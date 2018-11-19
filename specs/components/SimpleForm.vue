<template>
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
         <button class="btn btn-primary kr-payment-button"></button>
         <div class="kr-form-error"></div>
         </lyra-form>
    </div>
</template>

<script type="text/javascript">

export default {
    name: "simple-form",
    data() {
        return {
            formToken: null,
        };
    }
};
</script>
