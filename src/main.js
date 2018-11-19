import Vue from 'vue'
import App from './App.vue'
import LyraForm from './index'

Vue.config.productionTip = false

const setup = {
    clientDomain: 'https://krypton.purebilling.io',
    theme: "classic",
    publicKey: '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
}

Vue.use(LyraForm, setup);

new Vue({
  render: h => h(App)
}).$mount('#app')
