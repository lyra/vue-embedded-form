import { mount } from '@vue/test-utils';
import LyraForm from '../../src/components/LyraForm';

/**
 * ./node_modules/jest/bin/jest.js popin_button.spec.js
 */
describe('Test suite for popin-button property', () => {
    it("If it's defined, the popin button should be rendered", done => {
        const wrapper = mount(LyraForm, {
            propsData: {
                "kr-popin-button": "",
            }
        });

        // the form is rendered
        const $form = wrapper.find(".kr-embedded");

        expect($form.attributes()['kr-popin-button']).toBe("true");
        done();
    });

    it("If it not defined, the popin button param should be false", done => {
        const wrapper = mount(LyraForm, {
            propsData: {}
        });

        // the form is rendered
        const $form = wrapper.find(".kr-embedded");

        expect($form.attributes()['kr-popin-button']).toBe("false");
        done();
    });
});
