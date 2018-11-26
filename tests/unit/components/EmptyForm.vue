<template>
    <div class="wrapper">
        <lyra-form
         :kr-form-token="formToken"
         kr-post-url-success="paid.php"
         kr-language="fr-FR"
         kr-theme="classic"
         >
            <button class="btn btn-primary kr-payment-button"></button>
         </lyra-form>
    </div>
</template>

<script type="text/javascript">

export default {
    name: "empty-form",
    data() {
        return {
            formToken: null,
        };
    }
};
</script>

