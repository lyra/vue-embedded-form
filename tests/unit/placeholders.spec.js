import Vue from 'vue';
import SimpleForm from './components/SimpleForm.vue';
import LyraForm from '../../src/index';

const renderer = require('vue-server-renderer').createRenderer();

const setup = {
    "kr-client-domain": 'https://krypton.purebilling.io',
    "kr-public-key": '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
    "kr-placeholder-expiry": "My Expiry!",
    "kr-placeholder-pan": "My Pan!",
    "kr-placeholder-security-code": "My Security Code!",
}

Vue.use(LyraForm, setup);

/**
 * ./node_modules/jest/bin/jest.js placeholders.spec.js
 */
describe('Toolbar visibility configuration configuration', () => {
    it("The toolbar configuration can be setted to false on setup", done => {
        const ClonedComponent = Vue.extend(SimpleForm);
        const NewComponent = new ClonedComponent().$mount();

        renderer.renderToString(NewComponent, (err, str) => {
            expect(window.__kr__script.getAttribute("kr-placeholder-expiry")).toBe("My Expiry!");
            expect(window.__kr__script.getAttribute("kr-placeholder-pan")).toBe("My Pan!");
            expect(window.__kr__script.getAttribute("kr-placeholder-security-code")).toBe("My Security Code!");
            done();
        });
    });
});

