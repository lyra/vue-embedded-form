import Vue from 'vue';
import SimpleForm from './components/SimpleForm.vue';
import LyraForm from '../../src/index';
import cheerio from "cheerio";

const renderer = require('vue-server-renderer').createRenderer();

const setup = {
    "kr-client-domain": 'https://krypton.purebilling.io',
    "kr-public-key": '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
    "kr-clear-on-error": "false",
}

Vue.use(LyraForm, setup);

/**
 * ./node_modules/jest/bin/jest.js clear_on_error.spec.js
 */
describe('Clear on error configuration', () => {
    it("Clear on error can be setted on the setup as false", done => {
        const ClonedComponent = Vue.extend(SimpleForm);
        const NewComponent = new ClonedComponent({
            data: {
                "formToken": "TOKEN-TO-BE-REPLACED"
            }
        }).$mount();

        renderer.renderToString(NewComponent, (err, str) => {
            expect(Vue.__kr__script.getAttribute("kr-clear-on-error")).toBe("false");
            done();
        });
    });
});

