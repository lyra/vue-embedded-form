<template>
    <div>
        <button @click="showForm">pay now!</button>
        <div class="payment-form" v-if="showPaymentForm">
            <lyra-form kr-form-token="DEMO-TOKEN-TO-BE-REPLACED"
                    kr-language="es-ES"
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
        </div>
    </div>
</template>

<script>
export default {
  name: 'PaymentForm',
  data() {
      return {
          showPaymentForm: false,
          price: 100
      }
  },
  methods: { 
      showForm: function() {
          this.showPaymentForm = true;
      }
  }
}
</script>