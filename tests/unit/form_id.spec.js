import { mount } from '@vue/test-utils';
import LyraForm from '../../src/components/LyraForm';

/**
 * ./node_modules/jest/bin/jest.js form_id.spec.js
 */
describe('Test suite for form-id property', () => {
    it("If it's defined, the form should be created with the indicated ID", done => {
        const wrapper = mount(LyraForm, {
            propsData: {
                "kr-form-id": "F01",
            }
        });

        // the form is rendered
        const $form = wrapper.find(".kr-embedded");

        expect($form.attributes()['kr-form-id']).toBe("F01");
        done();
    });
});
