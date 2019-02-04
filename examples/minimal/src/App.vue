<template>
  <div id="app">
    <PaymentForm />
  </div>
</template>

<script>
import PaymentForm from './components/PaymentForm.vue'

export default {
  name: 'app',
  components: {
      PaymentForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
