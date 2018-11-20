import setupTools from "./tools/setup";
import themeTools from "./tools/theme";

export default {
    install: (Vue, setup) => {
        Vue.component('lyra-form', {
            name: "lyra-form",
            render: function (createElement) {
                if(this.active) {
                    let confEmbedded = {
                        class: { 'kr-embedded': true },
                        props: { 'krFormToken': this.krFormToken },
                    };

                    let confWrapper = {
                        style: {
                            opacity: (!this.isVisible) ? '0':'1',
                        },
                    };

                    return createElement(
                        'div', confWrapper, [
                            createElement('div', confEmbedded, this.$slots.default),
                        ]
                    );
                }
            },
            props: {
                krClientSrc: String,
                krPublicKey: String,
                krPostUrlSuccess: String,
                krLanguage: String,
                krFormToken: String,
                krTheme: String,
                isVisible: {
                    type: Boolean,
                    default: true,
                    required: false,
                },
            },
            computed: {
                active: function() {
                    return (this.krFormToken);
                }
            },
            created() {
                if (typeof(this.isVisible) != "boolean") this.isVisible = true;
            },
            mounted() {
                if(this.active) this.setupForm();
            },
            beforeDestroy() {
                if(this.krTheme) this.cleanDeps();
            },
            watch: {
                active: function(newVal) {
                    if(newVal) this.setupForm();
                }
            },
            methods: {
                setupForm() {
                    const _this = this;

                    if(window.hasOwnProperty('KR')) {
                        window.KR.onFormReady(() => {
                            _this.setConfig();
                        });
                    } else {
                        // Wait until the library is loaded
                        const checkInterval = setInterval(() => {
                            if(window.hasOwnProperty('KR')) {
                                _this.setupForm();
                                clearInterval(checkInterval);
                            }
                        }, 50);
                    }
                },
                setConfig() {
                    let formConfig = {
                        'formToken': this.krFormToken
                    };
                    if(this.krTheme) this.setupTheme();
                    if(this.krPublicKey) formConfig['publicKey'] = this.krPublicKey;
                    if(this.krLanguage) formConfig['language'] = this.krLanguage;
                    //if(this.krPostUrlSuccess) formConfig['postUrlSuccess'] = this.krPostUrlSuccess;

                    // Wait until everything is loaded
                    let loadCheckInterval = setInterval(() => {
                        if(document.readyState === 'complete') {
                            clearInterval(loadCheckInterval);
                            KR.setFormConfig(formConfig);
                        }
                    }, 25);
                },
                setupTheme() {
                    themeLoader(setup.clientDomain, this.krTheme, function() {});
                }
            }
        })

        Vue.mixin({
            created() {
                if(typeof(window.KR_CLIENT_LOADED)=="undefined") {
                    window.KR_CLIENT_LOADED = true;
                    setupTools.makeCompatible(setup);
                    themeTools.loader(setup.clientDomain, setup.theme, () => {
                        // Load the script
                        let script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.src = `${setup.clientDomain}/static/js/krypton-client/V4.0/stable/kr-payment-form.min.js`;
                        script.setAttribute("kr-public-key", setup.publicKey);

                        document.getElementsByTagName('body')[0].appendChild(script);
                    });
                }
            }
        });
    }
};
