import Vue from 'vue';
import VisibilityForm from './components/VisibilityForm.vue';
import LyraForm from '../src/index';
import cheerio from "cheerio";

const renderer = require('vue-server-renderer').createRenderer();

const setup = {
    clientDomain: 'https://krypton.purebilling.io',
    publicKey: '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
}

Vue.use(LyraForm, setup);

/**
 * ./node_modules/jest/bin/jest.js visibility.spec.js
 */
describe('Test suite for is-visible property', () => {
    it("If defined as 'false' the form should be hidden with css rule", done => {
        const ClonedComponent = Vue.extend(VisibilityForm);
        const NewComponent = new ClonedComponent().$mount();

        renderer.renderToString(NewComponent, (err, str) => {
            let $ = cheerio.load(str);

            // the form is rendered
            let $form = $(".kr-embedded");

            expect($form.length).toBe(1);
            expect($form.find(".kr-pan").length).toBe(1);
            expect($form.find(".kr-expiry").length).toBe(1);
            expect($form.find(".kr-security-code").length).toBe(1);
            expect($form.find(".kr-payment-button").length).toBe(1);

            let form = NewComponent.$children[0];
            let props = form._props;

            expect(props.isVisible).toBe(false);

            let $embeddedForm = form.$el;
            let style = $embeddedForm.getAttribute("style");
            expect(/opacity\:\s0/.test(style)).toBe(true);

            done();
        });
    });
});
