/* eslint-disable no-magic-numbers */
import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';

import Widget from '@/components/widgets/Widget';
import { getProp, setProp } from '../../src/util/nestedProperty';

import * as storeConfig from '~/store/pagebuilder';

describe('Widget.vue', () => {
    let store, localVue, context;

    let nodeConfig = {
        foo: 'bar',
        viewRepresentation: {
            '@class':
                'org.knime.js.base.node.widget.input.slider.SliderWidgetNodeRepresentation',
            currentValue: {
                testValue: 10
            }
        }
    };
    let nodeId = 'id1';

    beforeAll(() => {
        localVue = createLocalVue();
        localVue.use(Vuex);

        store = new Vuex.Store({ modules: { pagebuilder: storeConfig } });
        let page = {
            webNodes: {
                [nodeId]: nodeConfig
            }
        };
        store.commit('pagebuilder/setPage', page);
        context = {
            store,
            localVue,
            propsData: {
                nodeConfig
            },
            stubs: {
                SliderWidget: true
            }
        };
    });

    it('renders', () => {
        let wrapper = shallowMount(Widget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId
            }
        });
        expect(wrapper.html()).toBeTruthy();
        expect(wrapper.isVisible()).toBeTruthy();
    });

    it('detects correct widget type', () => {
        let wrapper = shallowMount(Widget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId
            }
        });

        expect(wrapper.vm.type).toEqual('SliderWidget');
    });

    it('correctly queries store for node validity', () => {
        let wrapper = shallowMount(Widget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId
            }
        });

        expect(wrapper.vm.isValid).toBe(true);

        wrapper.vm.publishUpdate({
            isValid: false,
            nodeId,
            update: {
                'viewRepresentation.currentValue.testValue': 11
            }
        });

        expect(wrapper.vm.isValid).toBe(false);
    });

    // TODO AP-12850: update Widget component level validation
    it('validates all data received', () => {
        let wrapper = shallowMount(Widget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId
            }
        });
        const expectedValue = 10;

        expect(wrapper.vm.validate()).toBe(true);
        expect(wrapper.vm.validate(null)).toBe(true);
        expect(wrapper.vm.validate({})).toBe(true);
        expect(wrapper.vm.validate('test')).toBe(true);
        expect(wrapper.vm.validate([])).toBe(true);
        expect(wrapper.vm.validate(0)).toBe(true);
        expect(wrapper.vm.validate(expectedValue)).toBe(true);
    });

    it('publishes update to store', () => {
        let wrapper = shallowMount(Widget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId
            }
        });
        const expectedValue = 10;
        const newValue = 11;

        expect(wrapper.vm.$store.state.pagebuilder.page.webNodes.id1.viewRepresentation
            .currentValue.testValue).toEqual(expectedValue);

        wrapper.vm.publishUpdate({
            isValid: true,
            nodeId,
            update: {
                'viewRepresentation.currentValue.testValue': newValue
            }
        });

        expect(
            wrapper.vm.$store.state.pagebuilder.page.webNodes.id1.viewRepresentation
                .currentValue.testValue
        ).toEqual(newValue);
    });

    it('test getting deep properties with util', () => {
        let wrapper = shallowMount(Widget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId
            }
        });
        // previously modified to be 11
        const expectedValue = 11;
        const newValue = 10;

        expect(
            getProp(
                wrapper.vm.$store.state,
                'pagebuilder.page.webNodes.id1.viewRepresentation.currentValue.testValue'
            )
        ).toEqual(expectedValue);
        setProp(
            wrapper.vm.$store.state,
            'pagebuilder.page.webNodes.id1.viewRepresentation.currentValue.testValue', newValue
        );
        expect(
            wrapper.vm.$store.state.pagebuilder.page.webNodes.id1.viewRepresentation.currentValue.testValue
        ).toEqual(newValue);
    });

    it('retrieves value as resolvable promise', () => {
        let wrapper = shallowMount(Widget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId
            }
        });

        const expectedValue = 10;
        const newValue = 42;

        expect(
            wrapper.vm.$store.state.pagebuilder.page.webNodes.id1.viewRepresentation.currentValue.testValue
        ).toEqual(expectedValue);

        wrapper.vm.publishUpdate({
            isValid: true,
            nodeId,
            update: {
                'viewRepresentation.currentValue.testValue': newValue
            }
        });

        expect(
            wrapper.vm.$store.state.pagebuilder.page.webNodes.id1.viewRepresentation.currentValue.testValue
        ).toEqual(newValue);
        let valPromise = wrapper.vm.getValue();
        return expect(valPromise).resolves.toStrictEqual({
            nodeId,
            value: { testValue: newValue }
        });
    });

    it('rejects value promise on error', () => {
        let wrapper = shallowMount(Widget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId
            }
        });

        const expectedValue = 42;

        // previously modified to be 42
        expect(
            wrapper.vm.$store.state.pagebuilder.page.webNodes.id1.viewRepresentation.currentValue.testValue
        ).toEqual(expectedValue);

        wrapper.vm.publishUpdate({
            isValid: true,
            nodeId,
            update: {
                viewRepresentation: {
                    '@class':
                        'org.knime.js.base.node.widget.input.slider.SliderWidgetNodeRepresentation'
                }
            }
        });

        let valPromise = wrapper.vm.getValue();
        return expect(valPromise).rejects.toStrictEqual(
            new Error('Value of widget could not be retrieved.')
        );
    });
});
