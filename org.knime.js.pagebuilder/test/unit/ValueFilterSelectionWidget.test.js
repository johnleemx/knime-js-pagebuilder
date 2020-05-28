import { mount, shallowMount } from '@vue/test-utils';

import ValueFilterSelectionWidget from '@/components/widgets/selection/ValueFilterSelectionWidget';
import Multiselect from '@/components/widgets/baseElements/selection/Multiselect';

describe('ValueFilterSelectionWidget.vue', () => {
    let propsData, propsDataColumnLocked;

    beforeEach(() => {
        propsData = {
            nodeConfig: {
                '@class': 'org.knime.js.core.JSONWebNode',
                stylesheets: [
                    '/js-lib/font-awesome/4_7_0/css/font-awesome.min.css',
                    '/js-lib/knime/service/knime.css',
                    '/js-lib/jQueryUI/min/themes/base/jquery-ui.min.css',
                    '/org/knime/js/base/util/quickform/quickformStyles.css'
                ],
                viewRepresentation: {
                    '@class': 'org.knime.js.base.node.base.filter.value.ValueFilterNodeRepresentation',
                    label: 'Default Twinlist (Include all Values)',
                    description: 'Enter Description',
                    required: true,
                    defaultValue: {
                        '@class': 'org.knime.js.base.node.base.filter.value.ValueFilterNodeValue',
                        column: 'Cluster Membership',
                        values: [
                            'Cluster_0',
                            'Cluster_1',
                            'Cluster_2',
                            'Cluster_3'
                        ]
                    },
                    currentValue: {
                        '@class': 'org.knime.js.base.node.base.filter.value.ValueFilterNodeValue',
                        column: 'Cluster Membership',
                        values: [
                            'Cluster_0',
                            'Cluster_1',
                            'Cluster_2',
                            'Cluster_3'
                        ]
                    },
                    lockColumn: false,
                    possibleValues: {
                        'Cluster Membership': [
                            'Cluster_0',
                            'Cluster_1',
                            'Cluster_2',
                            'Cluster_3'
                        ]
                    },
                    type: 'Twinlist',
                    limitNumberVisOptions: false,
                    numberVisOptions: 10,
                    possibleColumns: [
                        'Cluster Membership'
                    ]
                },
                viewValue: null,
                initMethodName: 'init',
                validateMethodName: 'validate',
                setValidationErrorMethodName: 'setValidationErrorMessage',
                getViewValueMethodName: 'value',
                nodeInfo: {
                    '@class': 'org.knime.js.core.JSONWebNodeInfo',
                    nodeState: 'executed',
                    nodeErrorMessage: null,
                    nodeWarnMessage: null,
                    displayPossible: true,
                    nodeName: 'Nominal Row Filter Widget',
                    nodeAnnotation: ''
                },
                javascriptLibraries: [
                    '/js-lib/knime/service/knime_service_1_0_0.js',
                    '/js-lib/jQuery/jquery-1.11.0.min.js',
                    '/js-lib/knime/knime_twinlist_1_0_0.js',
                    '/org/knime/js/base/dialog/selection/multiple/CheckBoxesMultipleSelections.js',
                    '/org/knime/js/base/dialog/selection/multiple/ListMultipleSelections.js',
                    '/org/knime/js/base/dialog/selection/multiple/TwinlistMultipleSelections.js',
                    '/js-lib/jQueryUI/min/ui/jquery-ui.min.js',
                    '/org/knime/js/base/util/quickform/knime_quickform_utils_1_0_0.js',
                    '/org/knime/js/base/node/widget/filter/value/valueFilterWidget.js'
                ],
                customCSS: '',
                namespace: 'knimeValueFilterWidget'
            },
            nodeId: '3:0:52',
            isValid: false
        };
        propsDataColumnLocked = {
            nodeConfig: {
                '@class': 'org.knime.js.core.JSONWebNode',
                stylesheets: [
                    '/js-lib/font-awesome/4_7_0/css/font-awesome.min.css',
                    '/js-lib/knime/service/knime.css',
                    '/js-lib/jQueryUI/min/themes/base/jquery-ui.min.css',
                    '/org/knime/js/base/util/quickform/quickformStyles.css'
                ],
                viewRepresentation: {
                    '@class': 'org.knime.js.base.node.base.filter.value.ValueFilterNodeRepresentation',
                    label: 'Default Twinlist (Include all Values)',
                    description: 'Enter Description',
                    required: true,
                    defaultValue: {
                        '@class': 'org.knime.js.base.node.base.filter.value.ValueFilterNodeValue',
                        column: 'Cluster Membership',
                        values: [
                            'Cluster_0',
                            'Cluster_1',
                            'Cluster_2',
                            'Cluster_3'
                        ]
                    },
                    currentValue: {
                        '@class': 'org.knime.js.base.node.base.filter.value.ValueFilterNodeValue',
                        column: 'Cluster Membership',
                        values: [
                            'Cluster_0',
                            'Cluster_1',
                            'Cluster_2',
                            'Cluster_3'
                        ]
                    },
                    lockColumn: true,
                    possibleValues: {
                        'Cluster Membership': [
                            'Cluster_0',
                            'Cluster_1',
                            'Cluster_2',
                            'Cluster_3'
                        ],
                        'Other Membership': [
                            'Other 1',
                            'Other 2'
                        ]
                    },
                    type: 'List',
                    limitNumberVisOptions: false,
                    numberVisOptions: 10,
                    possibleColumns: [
                        'Cluster Membership',
                        'Other Membership'
                    ]
                },
                viewValue: null,
                initMethodName: 'init',
                validateMethodName: 'validate',
                setValidationErrorMethodName: 'setValidationErrorMessage',
                getViewValueMethodName: 'value',
                nodeInfo: {
                    '@class': 'org.knime.js.core.JSONWebNodeInfo',
                    nodeState: 'executed',
                    nodeErrorMessage: null,
                    nodeWarnMessage: null,
                    displayPossible: true,
                    nodeName: 'Nominal Row Filter Widget',
                    nodeAnnotation: ''
                },
                javascriptLibraries: [
                    '/js-lib/knime/service/knime_service_1_0_0.js',
                    '/js-lib/jQuery/jquery-1.11.0.min.js',
                    '/js-lib/knime/knime_twinlist_1_0_0.js',
                    '/org/knime/js/base/dialog/selection/multiple/CheckBoxesMultipleSelections.js',
                    '/org/knime/js/base/dialog/selection/multiple/ListMultipleSelections.js',
                    '/org/knime/js/base/dialog/selection/multiple/TwinlistMultipleSelections.js',
                    '/js-lib/jQueryUI/min/ui/jquery-ui.min.js',
                    '/org/knime/js/base/util/quickform/knime_quickform_utils_1_0_0.js',
                    '/org/knime/js/base/node/widget/filter/value/valueFilterWidget.js'
                ],
                customCSS: '',
                namespace: 'knimeValueFilterWidget'
            },
            nodeId: '3:0:51',
            isValid: false
        };
    });

    it('renders all different types', () => {
        let wrapper = mount(ValueFilterSelectionWidget, {
            propsData
        });
        expect(wrapper.html()).toBeTruthy();
        expect(wrapper.isVisible()).toBeTruthy();

        let wrapperLocked = mount(ValueFilterSelectionWidget, {
            propsData: propsDataColumnLocked
        });
        expect(wrapperLocked.html()).toBeTruthy();
        expect(wrapperLocked.isVisible()).toBeTruthy();

    });

    it('sends @updateWidget if Multiselect emits @input', () => {
        let wrapper = shallowMount(ValueFilterSelectionWidget, {
            propsData
        });

        const testValue = ['VALUE1', 'VALUE2'];
        const comp = wrapper.find(Multiselect);
        comp.vm.$emit('input', testValue);

        expect(wrapper.emitted().updateWidget).toBeTruthy();
        expect(wrapper.emitted().updateWidget[0][0]).toStrictEqual({
            nodeId: propsData.nodeId,
            type: 'values',
            value: testValue
        });
    });

    it('sends @updateWidget if column emits @input', () => {
        let wrapper = shallowMount(ValueFilterSelectionWidget, {
            propsData
        });

        const testValue = 'MYCOL';
        const lb = wrapper.find({ ref: 'column' });
        lb.vm.$emit('input', testValue);

        expect(wrapper.emitted().updateWidget).toBeTruthy();
        expect(wrapper.emitted().updateWidget[0][0]).toStrictEqual({
            nodeId: propsData.nodeId,
            type: 'column',
            value: testValue
        });
    });

    describe('validation', () => {
        it('is invalid if isValid is false', () => {
            propsData.nodeConfig.viewRepresentation.required = false;
            propsData.isValid = true;
            let wrapper = shallowMount(ValueFilterSelectionWidget, {
                propsData
            });

            expect(wrapper.vm.validate()).toBe(true);
        });

        it('is always valid if not required', () => {
            propsData.nodeConfig.viewRepresentation.required = false;
            propsData.nodeConfig.viewRepresentation.currentValue.value = [];
            propsData.nodeConfig.viewRepresentation.defaultValue.value = [];
            let wrapper = shallowMount(ValueFilterSelectionWidget, {
                propsData
            });

            expect(wrapper.vm.validate()).toBe(true);
        });

        it('is valid even with locked invalid column', () => {
            propsData.nodeConfig.viewRepresentation.required = false;
            propsData.nodeConfig.viewRepresentation.lockColumn = true;
            propsData.nodeConfig.viewRepresentation.currentValue.column = 'INVALID';
            let wrapper = shallowMount(ValueFilterSelectionWidget, {
                propsData
            });

            expect(wrapper.vm.validate()).toBe(true);
        });

        it('is invalid/valid if required and no selection/a selection was made', () => {
            propsData.nodeConfig.viewRepresentation.required = true;
            let wrapper = mount(ValueFilterSelectionWidget, {
                propsData
            });

            expect(wrapper.vm.validate()).toBe(false);

            // set the value
            wrapper.setProps({ valuePair: propsData.nodeConfig.viewRepresentation.currentValue });

            expect(wrapper.vm.validate()).toBe(true);
        });

        it('is valid if required and a selection was made in lockColumn mode', () => {
            propsData.nodeConfig.viewRepresentation.required = true;
            propsData.nodeConfig.viewRepresentation.lockColumn = true;
            let wrapper = mount(ValueFilterSelectionWidget, {
                propsData
            });
            // set the value
            wrapper.setProps({ valuePair: propsData.nodeConfig.viewRepresentation.currentValue });
            expect(wrapper.vm.validate()).toBe(true);
        });
    });
});
