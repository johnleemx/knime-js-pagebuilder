import { mount } from '@vue/test-utils';

import DateTimeInput from '@/components/widgets/baseElements/input/DateTimeInput';
import NumberInput from 'webapps-common/ui/components/forms/NumberInput';

import { getDayOfYear, getHours, getMinutes, getSeconds, getMilliseconds, getDate, getMonth, getYear } from 'date-fns';

describe('DateTimeInput.vue', () => {
    let context, propsData;

    beforeEach(() => {
        propsData = {
            value: new Date('2020-05-03T09:54:55'),
            id: 'dateTimeInputID',
            min: null,
            max: null,
            isValid: true,
            showSeconds: true,
            showMilliseconds: true,
            showTime: true,
            showDate: true,
            required: false,
            timezone: 'Europe/Berlin'
        };
        context = {};
    });

    describe('renders', () => {
        it('renders with datepicker and time', () => {
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData
            });
            expect(wrapper.html()).toBeTruthy();
            expect(wrapper.isVisible()).toBeTruthy();
            expect(wrapper.find({ ref: 'datePicker' }).isVisible()).toBeTruthy();
            // eslint-disable-next-line no-magic-numbers
            expect(wrapper.findAll(NumberInput).length).toBe(4);
        });

        it('renders without time', () => {
            propsData.showTime = false;
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData
            });
            expect(wrapper.html()).toBeTruthy();
            expect(wrapper.isVisible()).toBeTruthy();
            expect(wrapper.find({ ref: 'datePicker' }).isVisible()).toBeTruthy();
            expect(wrapper.findAll(NumberInput).exists()).toBeFalsy();
        });

        it('renders without date', () => {
            propsData.showDate = false;
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData
            });
            expect(wrapper.html()).toBeTruthy();
            expect(wrapper.isVisible()).toBeTruthy();
            expect(wrapper.find({ ref: 'datePicker' }).exists()).toBeFalsy();
            expect(wrapper.findAll(NumberInput).exists()).toBeTruthy();
        });

        it('renders without milliseconds and seconds', () => {
            propsData.showSeconds = false;
            propsData.showMilliseconds = false;
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData
            });
            expect(wrapper.findAll(NumberInput).length).toBe(2);
        });

        it('has default props', () => {
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData: {
                    value: new Date()
                }
            });
            expect(wrapper.html()).toBeTruthy();
            expect(wrapper.isVisible()).toBeTruthy();
            expect(wrapper.find({ ref: 'datePicker' }).isVisible()).toBeTruthy();
        });
    });

    describe('updates', () => {

        it('updates date on datepicker changes', () => {
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData
            });
            const d = new Date('2020-05-05T15:34:25');
            wrapper.find({ ref: 'datePicker' }).vm.$emit('input', d);

            expect(wrapper.emitted().input).toBeTruthy();
            expect(getDayOfYear(wrapper.emitted().input[0][0])).toStrictEqual(getDayOfYear(d));
        });

        it('updates date if datepicker emits @input', () => {
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData
            });
            const d = new Date('2020-05-05T15:34:25');
            wrapper.find({ ref: 'datePicker' }).vm.$emit('input', d);

            expect(wrapper.emitted().input).toBeTruthy();
            expect(getDayOfYear(wrapper.emitted().input[0][0])).toStrictEqual(getDayOfYear(d));
        });

        it('updates date on manual input to date field', () => {
            propsData.dateFormat = 'yyyy-MM-dd';
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData
            });
            const dayOfMonth = 22;
            const month = 11;
            const year = 2019;
            const input = `${year}-${month}-${dayOfMonth}`;

            // <input> is inside of the slot
            wrapper.vm.onTextInputChange({ target: { value: input } }, () => '');

            expect(wrapper.emitted().input).toBeTruthy();
            const date = wrapper.emitted().input[0][0];

            expect(getDate(date)).toStrictEqual(dayOfMonth);
            expect(getMonth(date)).toStrictEqual(month - 1);
            expect(getYear(date)).toStrictEqual(year);
        });

        it('does not update date if invalid input is entered', () => {
            propsData.value = new Date('2020-05-03T09:54:55');
            propsData.dateFormat = 'yyyy-MM-dd';
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData
            });

            // <input> is inside of the slot
            wrapper.vm.onTextInputChange({ target: { value: 'asdf' } }, () => '');

            expect(wrapper.emitted().input).toBeTruthy();
            const date = wrapper.emitted().input[0][0];

            expect(getDate(date)).toStrictEqual(getDate(propsData.value));
            expect(getMonth(date)).toStrictEqual(getMonth(propsData.value));
            expect(getYear(date)).toStrictEqual(getYear(propsData.value));
        });

        it('updates hours if input changes', () => {
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData
            });

            const hours = 11;
            wrapper.find({ ref: 'hours' }).vm.$emit('input', hours);

            expect(wrapper.emitted().input).toBeTruthy();
            expect(getHours(wrapper.emitted().input[0][0])).toStrictEqual(hours);
            expect(getDayOfYear(wrapper.emitted().input[0][0])).toStrictEqual(getDayOfYear(propsData.value));
        });

        it('updates minutes if input changes', () => {
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData
            });
            const minutes = 23;
            wrapper.find({ ref: 'minutes' }).vm.$emit('input', minutes);

            expect(wrapper.emitted().input).toBeTruthy();
            expect(getMinutes(wrapper.emitted().input[0][0])).toStrictEqual(minutes);
            expect(getDayOfYear(wrapper.emitted().input[0][0])).toStrictEqual(getDayOfYear(propsData.value));
        });

        it('updates seconds if input changes', () => {
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData
            });
            const seconds = 12;
            wrapper.find({ ref: 'seconds' }).vm.$emit('input', seconds);

            expect(wrapper.emitted().input).toBeTruthy();
            expect(getSeconds(wrapper.emitted().input[0][0])).toStrictEqual(seconds);
            expect(getDayOfYear(wrapper.emitted().input[0][0])).toStrictEqual(getDayOfYear(propsData.value));
        });

        it('updates milliseconds if input changes', () => {
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData
            });
            const milliseconds = 234;
            wrapper.find({ ref: 'milliseconds' }).vm.$emit('input', milliseconds);

            expect(wrapper.emitted().input).toBeTruthy();
            expect(getMilliseconds(wrapper.emitted().input[0][0])).toStrictEqual(milliseconds);
            expect(getDayOfYear(wrapper.emitted().input[0][0])).toStrictEqual(getDayOfYear(propsData.value));
        });
    });
    describe('validates', () => {
        it('invalidates values earlier than min date', () => {
            propsData.value = new Date('2020-05-03T09:54:50');
            propsData.min = new Date('2020-05-03T09:54:54');
            propsData.max = new Date('2020-05-03T09:54:56');
            propsData.dateFormat = 'yyy-MM-dd';
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData
            });

            const validation = wrapper.vm.validate();
            expect(validation.isValid).toBeFalsy();
            expect(validation.errorMessage).toBe('2020-05-03 09:54:00 is before minimum date 2020-05-03 09:54:00');
        });

        it('invalidates values later than max date', () => {
            propsData.value = new Date('2020-05-03T09:54:59');
            propsData.max = new Date('2020-05-02T09:54:56');
            propsData.dateFormat = 'yyy-MM-dd';
            propsData.showTime = false;
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData
            });

            const validation = wrapper.vm.validate();
            expect(validation.isValid).toBeFalsy();
            expect(validation.errorMessage).toBe('2020-05-03 is after maximum date 2020-05-02');
        });

        it('invalidates values later than max date via @input', () => {
            propsData.max = new Date('2020-05-05T09:54:56');
            propsData.dateFormat = 'yyy-MM-dd';
            propsData.showTime = false;
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData
            });

            wrapper.find({ ref: 'datePicker' }).vm.$emit('input', new Date('2020-05-06T09:54:56'));

            const validation = wrapper.vm.validate();
            expect(validation.isValid).toBeFalsy();
            expect(validation.errorMessage).toBe('2020-05-06 is after maximum date 2020-05-05');
        });

        it('invalidates null value if required', () => {
            propsData.value = new Date('');
            propsData.required = true;
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData
            });

            const validation = wrapper.vm.validate();
            expect(validation.isValid).toBeFalsy();
            expect(validation.errorMessage).toBe('Please input a valid date');
        });

        it('validates values in the given min/max range', () => {
            propsData.value = new Date('2020-05-03T09:54:55');
            propsData.min = new Date('2020-05-03T09:54:54');
            propsData.max = new Date('2020-05-03T09:54:56');
            propsData.dateFormat = 'yyy-MM-dd';
            let wrapper = mount(DateTimeInput, {
                ...context,
                propsData
            });

            const validation = wrapper.vm.validate();
            expect(validation.isValid).toBeTruthy();
        });

    });
});
