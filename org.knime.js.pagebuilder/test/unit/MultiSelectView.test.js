import { mount, shallowMount } from '@vue/test-utils';

import MultiSelectView from '@/components/widgets/baseElements/selection/MultiSelectView';
import Checkboxes from '~/webapps-common/ui/components/forms/Checkboxes';
import MultiselectListBox from '~/webapps-common/ui/components/forms/MultiselectListBox';
import Twinlist from '~/webapps-common/ui/components/forms/Twinlist';


describe('MultiSelectView.vue', () => {
    let propsDataTwinlist, propsDataCheckboxHorizontal, propsDataCheckboxVertical, propsDataMultiselectListBox;

    beforeEach(() => {
        propsDataTwinlist = {
            possibleValues: [
                'TwinList 1',
                'TwinList 2',
                'TwinList 3',
                'TwinList 4',
                'TwinList 5',
                'TwinList 6',
                'TwinList 7'
            ],
            value: [
                'TwinList 3',
                'TwinList 5'
            ],
            type: 'Twinlist',
            limitNumberVisOptions: true,
            numberVisOptions: 4,
            isValid: false
        };
        propsDataMultiselectListBox = {
            value: [
                'List 3',
                'List 4',
                'List 7'
            ],
            possibleValues: [
                'List 1',
                'List 2',
                'List 3',
                'List 4',
                'List 5',
                'List 6',
                'List 7',
                'List 8'
            ],
            type: 'List',
            limitNumberVisOptions: true,
            numberVisOptions: 5,
            isValid: false
        };
        propsDataCheckboxVertical = {
            value: [
                'CBV 2',
                'CBV 4',
                'CBV 6'
            ],
            possibleValues: [
                'CBV 1',
                'CBV 2',
                'CBV 3',
                'CBV 4',
                'CBV 5',
                'CBV 6'
            ],
            type: 'Check boxes (vertical)',
            limitNumberVisOptions: false,
            numberVisOptions: 10,
            isValid: false
        };
        propsDataCheckboxHorizontal = {
            value: [
                'CBH 1',
                'CBH 4'
            ],
            possibleValues: [
                'CBH 1',
                'CBH 2',
                'CBH 3',
                'CBH 4',
                'CBH 5',
                'CBH 6',
                'CBH 7'
            ],
            type: 'Check boxes (horizontal)',
            limitNumberVisOptions: false,
            numberVisOptions: 10,
            isValid: false
        };
    });

    it('renders all different types', () => {
        let wrapper = shallowMount(MultiSelectView, {
            propsData: propsDataTwinlist
        });
        expect(wrapper.html()).toBeTruthy();
        expect(wrapper.isVisible()).toBeTruthy();

        let wrapper2 = shallowMount(MultiSelectView, {
            propsData: propsDataCheckboxHorizontal
        });
        expect(wrapper2.html()).toBeTruthy();
        expect(wrapper2.isVisible()).toBeTruthy();

        let wrapper3 = shallowMount(MultiSelectView, {
            propsData: propsDataCheckboxVertical
        });
        expect(wrapper3.html()).toBeTruthy();
        expect(wrapper3.isVisible()).toBeTruthy();

        let wrapper4 = shallowMount(MultiSelectView, {
            propsData: propsDataMultiselectListBox
        });
        expect(wrapper4.html()).toBeTruthy();
        expect(wrapper4.isVisible()).toBeTruthy();
    });

    describe('checkboxes', () => {
        it('render horizontal', () => {
            propsDataCheckboxHorizontal.isValid = true;
            let wrapper = shallowMount(MultiSelectView, {
                propsData: propsDataCheckboxHorizontal
            });

            let checkboxes = wrapper.find(Checkboxes);
            expect(checkboxes.exists()).toBeTruthy();
            expect(checkboxes.props('alignment')).toBe('horizontal');
        });

        it('render vertical', () => {
            propsDataCheckboxVertical.isValid = true;
            let wrapper = shallowMount(MultiSelectView, {
                propsData: propsDataCheckboxVertical
            });

            let checkboxes = wrapper.find(Checkboxes);
            expect(checkboxes.exists()).toBeTruthy();
            expect(checkboxes.props('alignment')).toBe('vertical');
        });

        it('fail on invalid type (alignment)', () => {
            propsDataCheckboxVertical.type = 'Check boxes (vulcano)';
            let wrapper = mount(MultiSelectView, {
                propsData: propsDataCheckboxVertical
            });

            expect(wrapper.vm.checkBoxesAlignment).toBe(null);
            expect(wrapper.find(Checkboxes).exists()).toBe(false);
        });

        it('emits @input', () => {
            let propsData = propsDataCheckboxVertical;
            let wrapper = shallowMount(MultiSelectView, {
                propsData
            });

            const testValue = ['VALUE1', 'VALUE2'];
            const comp = wrapper.find(Checkboxes);
            comp.vm.$emit('input', testValue);

            expect(wrapper.emitted().input).toBeTruthy();
            expect(wrapper.emitted().input[0][0]).toStrictEqual(testValue);
        });

    });

    describe('listbox', () => {
        it('renders list box component', () => {
            propsDataMultiselectListBox.isValid = true;
            let wrapper = shallowMount(MultiSelectView, {
                propsData: propsDataMultiselectListBox
            });

            expect(wrapper.find(MultiselectListBox).exists()).toBeTruthy();
        });

        it('emits @input', () => {
            let propsData = propsDataMultiselectListBox;
            let wrapper = shallowMount(MultiSelectView, {
                propsData
            });

            const testValue = ['VALUE1', 'VALUE2'];
            const comp = wrapper.find(MultiselectListBox);
            comp.vm.$emit('input', testValue);

            expect(wrapper.emitted().input).toBeTruthy();
            expect(wrapper.emitted().input[0][0]).toStrictEqual(testValue);
        });
    });

    describe('twinlist', () => {
        it('renders component', () => {
            propsDataTwinlist.isValid = true;
            let wrapper = shallowMount(MultiSelectView, {
                propsData: propsDataTwinlist
            });

            expect(wrapper.find(Twinlist).exists()).toBeTruthy();
        });

        it('size defaults to 0', () => {
            propsDataTwinlist.isValid = true;
            propsDataTwinlist.limitNumberVisOptions = false;
            let wrapper = shallowMount(MultiSelectView, {
                propsData: propsDataTwinlist
            });

            let rb = wrapper.find(Twinlist);
            expect(rb.props('size')).toBe(0);
        });

        it('emits @input', () => {
            let propsData = propsDataTwinlist;
            let wrapper = shallowMount(MultiSelectView, {
                propsData
            });

            const testValue = ['VALUE1', 'VALUE2'];
            const comp = wrapper.find(Twinlist);
            comp.vm.$emit('input', testValue);

            expect(wrapper.emitted().input).toBeTruthy();
            expect(wrapper.emitted().input[0][0]).toStrictEqual(testValue);
        });
    });

});
