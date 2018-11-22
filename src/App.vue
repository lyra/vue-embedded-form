<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="wrapper">
                    <lyra-form
                        :kr-form-token="formToken"
                        kr-post-url-success="paid.php"
                        kr-language="fr-FR"
                        kr-theme="classic"
                        >
                        <div class="kr-pan"></div>
                        <div class="kr-expiry"></div>
                        <div class="kr-security-code"></div>
                        <button class="kr-payment-button"></button>
                        <div class="kr-form-error"></div>
                    </lyra-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'app',
    data: function() {
        return {
            formToken: (window.PARAMS && window.PARAMS.formToken) ? window.PARAMS.formToken:"01O0xI6UfrRFKb7J9_G30R_Q18AeyJhIjo5OTAsIm0iOiJFVVIiLCJvIjoiZGVtby01YmM4NjhmYzQ0MDAyIiwiYyI6eyJiIjp7InZpIjp7ImYiOnsidmFkQ2FyZFR5cGUiOnsidmFsdWUiOiJWSVNBIn19fSwibWMiOnsiZiI6eyJ2YWRDYXJkVHlwZSI6eyJ2YWx1ZSI6Ik1BU1RFUkNBUkQifX19LCJhbSI6eyJmIjp7InZhZENhcmRUeXBlIjp7InZhbHVlIjoiQU1FWCJ9fX0sImNiIjp7ImYiOnsiZGViaXRDcmVkaXQiOnsidmFsdWUiOiJjcmVkaXQifX19fX196102",
        };
    },
}
</script>
