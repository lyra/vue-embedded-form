import Vue from 'vue';
import App from './App.vue';
import LyraForm from './index';
import setupTools from './tools/setup';

Vue.config.productionTip = false;

let setup = {
    'kr-client-domain': 'https://krypton.purebilling.io',
    'kr-theme': 'classic',
    'kr-public-key': '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
};

if (typeof window.PARAMS != 'undefined') {
    setup = setupTools.createSetupFromObject(window.PARAMS);
}

Vue.use(LyraForm, setup);

new Vue({
    render: h => h(App),
}).$mount('.app');
