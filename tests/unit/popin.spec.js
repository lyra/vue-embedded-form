import { mount } from '@vue/test-utils';
import LyraForm from '../../src/components/LyraForm';

/**
 * ./node_modules/jest/bin/jest.js popin.spec.js
 */
describe('Test suite for popin property', () => {
    it("If it's defined the form should be rendered as popin", done => {
        const wrapper = mount(LyraForm, {
            propsData: {
                "kr-popin": "",
            }
        });

        // the form is rendered
        const $form = wrapper.find(".kr-embedded");

        expect($form.attributes()['kr-popin']).toBe("true");
        done();
    });
});
