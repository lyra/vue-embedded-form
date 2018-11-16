import { mount } from '@vue/test-utils';
import LyraForm from '../../src/components/LyraForm';


/**
 * ./node_modules/jest/bin/jest.js lyra_form.spec.js
 */
describe('Lyra form basic tests', () => {
    it('It should contain all configuration template attributes', done => {
        const wrapper = mount(LyraForm, {
            propsData: {
                "kr-language": "pt-PT",
                "kr-post-url-success": "/all-ok",
                "kr-post-url-refused": "/all-ko",
                "kr-clear-on-error": "false",
                "kr-hide-debug-toolbar": "true",
                "kr-placeholder-expiry": "My Expiry!",
                "kr-placeholder-pan": "My Pan!",
                "kr-placeholder-security-code": "My CVV!",
            }
        });

        const html = wrapper.html();
        const $form = wrapper.find(".kr-embedded");

        // expectations
        expect($form.attributes()["kr-language"]).toBe("pt-PT");
        expect($form.attributes()["kr-post-url-success"]).toBe("/all-ok");
        expect($form.attributes()["kr-post-url-refused"]).toBe("/all-ko");
        expect($form.attributes()["kr-clear-on-error"]).toBe("false");
        expect($form.attributes()["kr-hide-debug-toolbar"]).toBe("true");
        expect($form.attributes()["kr-placeholder-expiry"]).toBe("My Expiry!");
        expect($form.attributes()["kr-placeholder-pan"]).toBe("My Pan!");
        expect($form.attributes()["kr-placeholder-security-code"]).toBe("My CVV!");

        done();
    });
});
