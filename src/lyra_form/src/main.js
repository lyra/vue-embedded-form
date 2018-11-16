import Vue from 'vue'
import App from './App.vue'
import LyraForm from './lyra_form'

Vue.config.productionTip = false

const options = {
    clientSrc: 'https://krypton.purebilling.io',
    theme: "classic",
    publicKey: '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
}

Vue.use(LyraForm, options);

new Vue({
  render: h => h(App)
}).$mount('#app')
