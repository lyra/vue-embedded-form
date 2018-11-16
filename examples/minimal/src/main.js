import Vue from 'vue'
import App from './App.vue'
// import the compoment
import LyraForm from "@lyracom/vue-embedded-form"

//define component setup options
const setup = {
  clientDomain: 'https://api.payzen.eu',
  publicKey: '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
  theme: 'classic'
};

// Load the component
Vue.use(LyraForm, setup);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
