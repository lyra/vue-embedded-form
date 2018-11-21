import Vue from 'vue';
import SimpleForm from './components/SimpleForm.vue';
import LyraForm from '../../src/index';
import cheerio from "cheerio";

const renderer = require('vue-server-renderer').createRenderer();

const setup = {
    "kr-client-domain": 'https://krypton.purebilling.io',
    "kr-public-key": '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
    "kr-hide-debug-toolbar": "true",
}

Vue.use(LyraForm, setup);

/**
 * ./node_modules/jest/bin/jest.js hide_debug_toolbar.spec.js
 */
describe('Toolbar visibility configuration configuration', () => {
    it("The toolbar configuration can be setted to false on setup", done => {
        const ClonedComponent = Vue.extend(SimpleForm);
        const NewComponent = new ClonedComponent().$mount();

        renderer.renderToString(NewComponent, (err, str) => {
            expect(Vue.__kr__script.getAttribute("kr-hide-debug-toolbar")).toBe("true");
            done();
        });
    });
});

