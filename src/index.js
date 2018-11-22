import setupTools from './tools/setup';
import themeTools from './tools/theme';
import whenDefined from './tools/whenDefined';
import LyraForm from './components/LyraForm.vue';

let accumulatedCallbacks = {};
let accumulator = (name, args) => {
    if (!accumulatedCallbacks.hasOwnProperty(name)) accumulatedCallbacks[name] = [];
    accumulatedCallbacks[name].push([name, args]);
};

let accumulatorCallAll = newAccumulator => {
    let accKeys = Object.keys(accumulatedCallbacks);
    accKeys.forEach(key => {
        let items = accumulatedCallbacks[key];
        items.forEach(item => {
            newAccumulator(...item);
        });
    });
};

export default {
    install: (Vue, setup) => {
        Vue.component('lyra-form', LyraForm);
        Vue.mixin({
            beforeCreate() {
                this.$kr = {
                    setFormConfig(configuration) {
                        accumulator('setFormConfig', configuration);
                    },
                };
            },
            created() {
                if (typeof window.KR_CLIENT_LOADED == 'undefined') {
                    window.KR_CLIENT_LOADED = true;
                    themeTools.loader(setup['kr-client-domain'], setup['kr-theme'], () => {
                        // Load the script
                        let script = document.createElement('script');
                        script.type = 'text/javascript';

                        if (/^http.+kr-payment-min\.js.*$/.test()) {
                            script.src = setup['kr-client-domain'];
                        } else {
                            script.src = `${setup['kr-client-domain']}/static/js/krypton-client/V4.0/stable/kr-payment-form.min.js`;
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
                        whenDefined(window, 'KR', () => {
                            accumulator = (name, args) => {
                                window.KR[name](args);
                            };
                            accumulatorCallAll(accumulator);
                        });
                    });
                }
            },
        });
    },
};
