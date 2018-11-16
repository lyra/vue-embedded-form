import Vue from 'vue';
import SimpleForm from './components/SimpleForm.vue';
import LyraForm from '../../src/index';
import cheerio from "cheerio";

const renderer = require('vue-server-renderer').createRenderer();

const setup = {
    "kr-client-domain": 'https://krypton.purebilling.io',
    "kr-public-key": '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
    "kr-language": "es-ES",
}

Vue.use(LyraForm, setup);

/**
 * ./node_modules/jest/bin/jest.js language.spec.js
 */
describe('Language configuration', () => {
    it("Language can be setted on the setup as non-default language", done => {
        const ClonedComponent = Vue.extend(SimpleForm);
        const NewComponent = new ClonedComponent({
            data: {
                "formToken": "TOKEN-TO-BE-REPLACED"
            }
        }).$mount();

        renderer.renderToString(NewComponent, (err, str) => {
            expect(window.__kr__script.getAttribute("kr-language")).toBe("es-ES");
            done();
        });
    });
});

