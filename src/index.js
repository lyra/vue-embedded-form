import setupTools from './tools/setup';
import themeTools from './tools/theme';
import whenDefined from './tools/whenDefined';
import LyraForm from './components/LyraForm.vue';
import kr from './service/kr';

export default {
    install: (Vue, setup) => {
        Vue.component('lyra-form', LyraForm);
        Vue.mixin({
            created() {
                this.$kr = kr;

                if (typeof window.KR_CLIENT_LOADED == 'undefined') {
                    window.KR_CLIENT_LOADED = true;
                    themeTools.loader(setup['kr-client-domain'], setup['kr-theme'], () => {
                        // Load the script
                        let script = document.createElement('script');
                        script.type = 'text/javascript';

                        let domain = setup["kr-client-domain"];

                        if (/^http.+$/.test(domain)) {
                            script.src = domain;
                        } else {
                            script.src = `${domain}/static/js/krypton-client/V4.0/stable/kr-payment-form.min.js`;
                        }

                        let propagationKeys = [
                            'kr-clear-on-error',
                            'kr-hide-debug-toolbar',
                            'kr-form-token',
                            'kr-public-key',
                            'kr-post-url-success',
                            'kr-language',
                            'kr-placeholder-expiry',
                            'kr-placeholder-pan',
                            'kr-placeholder-security-code',
                        ];

                        propagationKeys.forEach(propKey => {
                            if (setup.hasOwnProperty(propKey)) {
                                script.setAttribute(propKey, setup[propKey]);
                            }
                        });

                        window.__kr__script = script;
                        document.getElementsByTagName('body')[0].appendChild(script);

                        // Wait for it ...
                        whenDefined(window, 'KR', kr.triggerReady);
                    });
                }
            },
        });
    },
};
