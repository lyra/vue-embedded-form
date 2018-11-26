import { mount } from '@vue/test-utils';
import LyraForm from '../../src/components/LyraForm';

/**
 * ./node_modules/jest/bin/jest.js visibility.spec.js
 */
describe('Test suite for is-visible property', () => {
    it("If defined as 'false' the form should be hidden with css rule", done => {
        const wrapper = mount(LyraForm, {
            propsData: {
                "is-visible": false,
            }
        });

        // the form is rendered
        expect(wrapper.attributes().style).toBe("opacity: 0;");
        done();
    });
    it("If defined as 'true' the form should be hidden with css rule", done => {
        const wrapper = mount(LyraForm, {
            propsData: {
                "is-visible": true,
            }
        });

        // the form is rendered
        expect(wrapper.attributes().style).toBe("opacity: 1;");
        done();
    });
});
