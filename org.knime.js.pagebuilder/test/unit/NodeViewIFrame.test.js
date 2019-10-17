import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';

import NodeViewIFrame from '@/components/layout/NodeViewIFrame';

import * as storeConfig from '@/../store/pagebuilder';

describe('NodeViewIframe.vue', () => {

    let store, localVue, context;

    beforeAll(() => {
        localVue = createLocalVue();
        localVue.use(Vuex);

        store = new Vuex.Store({ modules: { pagebuilder: storeConfig } });
        store.commit('pagebuilder/setPage', {
            webNodes: {
                '0.0.7': {
                    namespace: 'foo',
                    javascriptLibraries: [],
                    stylesheets: []
                },
                '0.0.9': {
                    namespace: 'bar',
                    javascriptLibraries: [],
                    stylesheets: []
                }
            }
        });

        context = {
            store,
            localVue
        };
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('renders', () => {
        let wrapper = shallowMount(NodeViewIFrame, {
            ...context,
            attachToDocument: true
        });
        expect(wrapper.html()).toBeTruthy();
    });

    it('respects the "scrolling" attribute', () => {
        let wrapper = shallowMount(NodeViewIFrame, {
            ...context,
            attachToDocument: true,
            propsData: {
                scrolling: false,
                pollHeight: true
            }
        });
        expect(wrapper.vm.$el.contentDocument.documentElement.innerHTML).toContain('html { overflow: hidden; }');

        wrapper = shallowMount(NodeViewIFrame, {
            ...context,
            attachToDocument: true,
            propsData: {
                scrolling: true,
                pollHeight: true
            }
        });
        expect(wrapper.vm.$el.contentDocument.documentElement.innerHTML).toContain('html { overflow-y: hidden; }');

        wrapper = shallowMount(NodeViewIFrame, {
            ...context,
            attachToDocument: true,
            propsData: {
                scrolling: true,
                pollHeight: false
            }
        });
        expect(wrapper.vm.$el.contentDocument.documentElement.innerHTML).not.toContain('html { overflow: hidden; }');
        expect(wrapper.vm.$el.contentDocument.documentElement.innerHTML).not.toContain('html { overflow-y: hidden; }');

    });

    it('adjusts height initially', () => {
        const fakeHeight = 5;
        jest.spyOn(NodeViewIFrame.methods, 'setHeight').mockImplementation(function () {
            // eslint-disable-next-line no-invalid-this
            this.height = fakeHeight;
        });
        let wrapper = shallowMount(NodeViewIFrame, {
            ...context,
            attachToDocument: true,
            propsData: {
                autoHeight: true
            }
        });
        expect(NodeViewIFrame.methods.setHeight).toHaveBeenCalled();
        expect(wrapper.emitted().heightChange).toBeTruthy();
        expect(wrapper.emitted().heightChange[0]).toEqual([fakeHeight]);
    });

    it('does not adjust height if autoHeight is not true', () => {
        jest.spyOn(NodeViewIFrame.methods, 'setHeight').mockImplementation(() => {});
        shallowMount(NodeViewIFrame, {
            ...context,
            attachToDocument: true
        });
        expect(NodeViewIFrame.methods.setHeight).not.toHaveBeenCalled();
    });

    it('polls on heightChange', () => {
        jest.spyOn(NodeViewIFrame.methods, 'initHeightPolling').mockImplementation(() => {});
        shallowMount(NodeViewIFrame, {
            ...context,
            attachToDocument: true,
            propsData: {
                autoHeight: true,
                pollHeight: true
            }
        });
        expect(NodeViewIFrame.methods.initHeightPolling).toHaveBeenCalled();
    });

    it('does not poll on heightChange if pollHeight is not true', () => {
        jest.spyOn(NodeViewIFrame.methods, 'initHeightPolling').mockImplementation(() => {});
        shallowMount(NodeViewIFrame, {
            ...context,
            attachToDocument: true,
            propsData: {
                autoHeight: true
            }
        });
        expect(NodeViewIFrame.methods.initHeightPolling).not.toHaveBeenCalled();
    });
});
