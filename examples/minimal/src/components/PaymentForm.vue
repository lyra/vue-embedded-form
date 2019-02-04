<template>
    <lyra-form kr-form-token="DEMO-TOKEN-TO-BE-REPLACED"
            kr-language="en-EN"
            kr-theme="classic"
            kr-post-url-success="paid.php">

        <!-- payment form fields -->
        <div class="kr-pan"></div>
        <div class="kr-expiry"></div>
        <div class="kr-security-code"></div>

        <!-- payment form submit button -->
        <button class="kr-payment-button"></button>

        <!-- error zone -->
        <div class="kr-form-error"></div>
    </lyra-form>
</template>

<script>
export default {
name: 'PaymentForm',
}
</script>