<template lang="pug">
    .container
        .row
            .col-12
                h4 Select the delivery method
                select(v-model="delivery")
                    option(value="UPS") UPS
                    option(value="Seur") Seur
                h4 Proceed with the payment
                .wrapper
                    lyra-form(
                        :kr-form-token="formToken"
                        kr-post-url-success="paid.php"
                        :is-visible="this.delivery != null"
                        kr-language="fr-FR"
                        kr-theme="classic"
                    )
                        .kr-pan
                        .kr-expiry
                        .kr-security-code
                        button.btn.btn-primary.kr-payment-button
                        .kr-form-error
</template>
<script>

export default {
    name: 'app',
    data: function() {
        return {
            formToken: "01O0xI6UfrRFKb7J9_G30R_Q18AeyJhIjo5OTAsIm0iOiJFVVIiLCJvIjoiZGVtby01YmM4NjhmYzQ0MDAyIiwiYyI6eyJiIjp7InZpIjp7ImYiOnsidmFkQ2FyZFR5cGUiOnsidmFsdWUiOiJWSVNBIn19fSwibWMiOnsiZiI6eyJ2YWRDYXJkVHlwZSI6eyJ2YWx1ZSI6Ik1BU1RFUkNBUkQifX19LCJhbSI6eyJmIjp7InZhZENhcmRUeXBlIjp7InZhbHVlIjoiQU1FWCJ9fX0sImNiIjp7ImYiOnsiZGViaXRDcmVkaXQiOnsidmFsdWUiOiJjcmVkaXQifX19fX196102",
            delivery: null,
        };
    },
}
</script>
