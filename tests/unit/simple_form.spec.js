import Vue from 'vue';
import SimpleForm from './components/SimpleForm.vue';
import LyraForm from '../../src/index';
import cheerio from "cheerio";

const renderer = require('vue-server-renderer').createRenderer();

const setup = {
    clientDomain: 'https://krypton.purebilling.io',
    theme: "classic",
    publicKey: '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
}

Vue.use(LyraForm, setup);

/**
 * ./node_modules/jest/bin/jest.js simple_form.spec.js
 */
describe('Test suite for simple payment form', () => {
    it("Should render the configured form if token is defined", done => {
        const ClonedComponent = Vue.extend(SimpleForm);
        const NewComponent = new ClonedComponent({
            data() {
                return {
                    formToken: "01O0xI6UfrRFKb7J9_G30R_Q18AeyJhIjo5OTAsIm0iOiJFVVIiLCJvIjoiZGVtby01YmM4NjhmYzQ0MDAyIiwiYyI6eyJiIjp7InZpIjp7ImYiOnsidmFkQ2FyZFR5cGUiOnsidmFsdWUiOiJWSVNBIn19fSwibWMiOnsiZiI6eyJ2YWRDYXJkVHlwZSI6eyJ2YWx1ZSI6Ik1BU1RFUkNBUkQifX19LCJhbSI6eyJmIjp7InZhZENhcmRUeXBlIjp7InZhbHVlIjoiQU1FWCJ9fX0sImNiIjp7ImYiOnsiZGViaXRDcmVkaXQiOnsidmFsdWUiOiJjcmVkaXQifX19fX196102",
                };
            },
        }).$mount();

        renderer.renderToString(NewComponent, (err, str) => {
            let $ = cheerio.load(str);

            // the form is rendered
            let $form = $(".kr-embedded");

            expect($form.length).toBe(1);
            expect($form.find(".kr-pan").length).toBe(1);
            expect($form.find(".kr-expiry").length).toBe(1);
            expect($form.find(".kr-security-code").length).toBe(1);
            expect($form.find(".kr-payment-button").length).toBe(1);

            // By default is visible
            let form = NewComponent.$children[0];
            let props = form._props;

            expect(props.isVisible).toBe(true);

            let $embeddedForm = form.$el;
            let style = $embeddedForm.getAttribute("style");
            expect(/opacity\:\s1/.test(style)).toBe(true);

            done();
        });
    });

    it("Should not render the configured form if token is not defined", done => {
        const ClonedComponent = Vue.extend(SimpleForm);
        const NewComponent = new ClonedComponent({
        }).$mount();

        renderer.renderToString(NewComponent, (err, str) => {
            let $ = cheerio.load(str);

            // the form is rendered
            let $form = $(".kr-embedded");

            expect($form.length).toBe(0);

            done();
        });
    });
});
