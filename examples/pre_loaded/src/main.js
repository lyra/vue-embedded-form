import Vue from 'vue'
import App from './App.vue'
// import the compoment
import LyraForm from "@lyracom/vue-embedded-form"

//define component setup options
const setup = {
  'kr-client-domain': 'https://api.payzen.eu',
  'kr-public-key': '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
  'kr-theme': 'classic'
};

// Load the component
Vue.use(LyraForm, setup);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
