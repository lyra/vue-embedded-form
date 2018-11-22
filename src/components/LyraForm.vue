<template>
    <div :style="(isVisible) ? 'opacity:1':'opacity:0'">
        <div class="kr-embedded"
             :kr-language="krLanguage"
             :kr-hide-debug-toolbar="krHideDebugToolbar"
             :kr-clear-on-error="krClearOnError"
             :kr-post-url-success="krPostUrlSuccess"
             :kr-post-url-refused="krPostUrlRefused"
             :kr-placeholder-expiry="krPlaceholderExpiry"
             :kr-placeholder-pan="krPlaceholderPan"
             :kr-placeholder-security-code="krPlaceholderSecurityCode"
             :kr-form-token="krFormToken">
        </div>
    </div>
</template>

<script type="text/javascript">

export default {
    name: "lyra-form",
    data() {
        return {
        };
    },
    props: {
        krClientSrc: String,
        krHideDebugToolbar: String,
        krClearOnError: String,
        krPublicKey: String,
        krPostUrlSuccess: String,
        krPostUrlRefused: String,
        krLanguage: String,
        krFormToken: String,
        krTheme: String,
        krPlaceholderExpiry: String,
        krPlaceholderPan: String,
        krPlaceholderSecurityCode: String,
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
};
</script>
