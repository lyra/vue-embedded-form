export default {
    install: (Vue, options) => {
        Vue.component('lyra-form', {
            name: "lyra-form",
            render: function (createElement) {
                if(this.active) {
                    return createElement(
                        'div',
                        {
                            class: { 'kr-embedded': true },
                            props: { 'krFormToken': this.krFormToken },
                        },
                        this.$slots.default
                    );
                }
            },
            props: [
                "krClientSrc", "krPublicKey", "krPostUrlSuccess", "krLanguage", "krFormToken",
                "krTheme",
            ],
            computed: {
                active: function() {
                    return (this.krFormToken);
                }
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
                    // Javascript
                    const themeJS = `${options.clientSrc}/static/js/krypton-client/V4.0/ext/${this.krTheme}.js`;
                    let script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = themeJS;
                    document.getElementsByTagName('body')[0].appendChild(script);

                    // CSS
                    const themeCSS = `${options.clientSrc}/static/js/krypton-client/V4.0/ext/${this.krTheme}-reset.css`;
                    let link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = themeCSS;
                    document.getElementsByTagName('body')[0].appendChild(link);
                }
            }
        })

        Vue.mixin({
            created() {
                if(!options.clientLoaded) {
                    // Load the script
                    let script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = `${options.clientSrc}/static/js/krypton-client/V4.0/stable/kr-payment-form.min.js`;
                    script.setAttribute("kr-public-key", options.publicKey);
                    options.clientLoaded = true;

                    document.getElementsByTagName('body')[0].appendChild(script);
                }
            }
        });
    }
};
