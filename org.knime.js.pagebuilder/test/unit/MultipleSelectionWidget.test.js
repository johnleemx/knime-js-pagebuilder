import { mount, shallowMount } from '@vue/test-utils';

import MultipleSelectionWidget from '@/components/widgets/selection/MultipleSelectionWidget';
import MultiSelectView from '@/components/widgets/baseElements/selection/MultiSelectView';


describe('MultipleSelectionWidget.vue', () => {
    let propsDataTwinlist, propsDataCheckboxHorizontal, propsDataCheckboxVertical, propsDataMultiselectListBox;

    beforeEach(() => {
        propsDataTwinlist = {
            nodeConfig: {
                '@class': 'org.knime.js.core.JSONWebNode',
                stylesheets: [
                    '/js-lib/font-awesome/4_7_0/css/font-awesome.min.css',
                    '/js-lib/knime/service/knime.css',
                    '/js-lib/jQueryUI/min/themes/base/jquery-ui.min.css',
                    '/org/knime/js/base/util/quickform/quickformStyles.css'
                ],
                nodeInfo: {
                    '@class': 'org.knime.js.core.JSONWebNodeInfo',
                    nodeAnnotation: '',
                    nodeName: 'Multiple Selection Widget',
                    nodeState: 'executed',
                    displayPossible: true,
                    nodeErrorMessage: null,
                    nodeWarnMessage: null
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
                    '/org/knime/js/base/node/widget/selection/multiple/multipleSelectionWidget.js'
                ],
                getViewValueMethodName: 'value',
                namespace: 'knimeMultipleSelectionWidget',
                viewRepresentation: {
                    '@class': 'org.knime.js.base.node.widget.selection.multiple.MultipleSelectionWidgetRepresentation',
                    label: 'Label',
                    description: 'Some Text...',
                    required: true,
                    defaultValue: {
                        '@class':
                            'org.knime.js.base.node.base.selection.singleMultiple.SingleMultipleSelectionNodeValue',
                        value: [
                            'TwinList 3',
                            'TwinList 5'
                        ]
                    },
                    currentValue: {
                        '@class':
                            'org.knime.js.base.node.base.selection.singleMultiple.SingleMultipleSelectionNodeValue',
                        value: [
                            'TwinList 3',
                            'TwinList 5'
                        ]
                    },
                    possibleChoices: [
                        'TwinList 1',
                        'TwinList 2',
                        'TwinList 3',
                        'TwinList 4',
                        'TwinList 5',
                        'TwinList 6',
                        'TwinList 7'
                    ],
                    type: 'Twinlist',
                    limitNumberVisOptions: true,
                    numberVisOptions: 4
                },
                viewValue: null,
                customCSS: '',
                initMethodName: 'init',
                validateMethodName: 'validate',
                setValidationErrorMethodName: 'setValidationErrorMessage'
            },
            nodeId: '5:0:6',
            isValid: false
        };
        propsDataMultiselectListBox = {
            nodeConfig: {
                '@class': 'org.knime.js.core.JSONWebNode',
                stylesheets: [
                    '/js-lib/font-awesome/4_7_0/css/font-awesome.min.css',
                    '/js-lib/knime/service/knime.css',
                    '/js-lib/jQueryUI/min/themes/base/jquery-ui.min.css',
                    '/org/knime/js/base/util/quickform/quickformStyles.css'
                ],
                nodeInfo: {
                    '@class': 'org.knime.js.core.JSONWebNodeInfo',
                    nodeAnnotation: '',
                    nodeName: 'Multiple Selection Widget',
                    nodeState: 'executed',
                    displayPossible: true,
                    nodeErrorMessage: null,
                    nodeWarnMessage: null
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
                    '/org/knime/js/base/node/widget/selection/multiple/multipleSelectionWidget.js'
                ],
                getViewValueMethodName: 'value',
                namespace: 'knimeMultipleSelectionWidget',
                viewRepresentation: {
                    '@class': 'org.knime.js.base.node.widget.selection.multiple.MultipleSelectionWidgetRepresentation',
                    label: 'Label List',
                    description: 'Desc List',
                    required: true,
                    defaultValue: {
                        '@class':
                            'org.knime.js.base.node.base.selection.singleMultiple.SingleMultipleSelectionNodeValue',
                        value: [
                            'List 3',
                            'List 4',
                            'List 7'
                        ]
                    },
                    currentValue: {
                        '@class':
                            'org.knime.js.base.node.base.selection.singleMultiple.SingleMultipleSelectionNodeValue',
                        value: [
                            'List 3',
                            'List 4',
                            'List 7'
                        ]
                    },
                    possibleChoices: [
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
                    numberVisOptions: 5
                },
                viewValue: null,
                customCSS: '',
                initMethodName: 'init',
                validateMethodName: 'validate',
                setValidationErrorMethodName: 'setValidationErrorMessage'
            },
            nodeId: '5:0:8',
            isValid: false
        };
        propsDataCheckboxVertical = {
            nodeConfig: {
                '@class': 'org.knime.js.core.JSONWebNode',
                stylesheets: [
                    '/js-lib/font-awesome/4_7_0/css/font-awesome.min.css',
                    '/js-lib/knime/service/knime.css',
                    '/js-lib/jQueryUI/min/themes/base/jquery-ui.min.css',
                    '/org/knime/js/base/util/quickform/quickformStyles.css'
                ],
                nodeInfo: {
                    '@class': 'org.knime.js.core.JSONWebNodeInfo',
                    nodeAnnotation: '',
                    nodeName: 'Multiple Selection Widget',
                    nodeState: 'executed',
                    displayPossible: true,
                    nodeErrorMessage: null,
                    nodeWarnMessage: null
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
                    '/org/knime/js/base/node/widget/selection/multiple/multipleSelectionWidget.js'
                ],
                getViewValueMethodName: 'value',
                namespace: 'knimeMultipleSelectionWidget',
                viewRepresentation: {
                    '@class': 'org.knime.js.base.node.widget.selection.multiple.MultipleSelectionWidgetRepresentation',
                    label: 'Label Checkbox Vertical',
                    description: 'Enter Description CHV',
                    required: true,
                    defaultValue: {
                        '@class':
                            'org.knime.js.base.node.base.selection.singleMultiple.SingleMultipleSelectionNodeValue',
                        value: [
                            'CBV 2',
                            'CBV 4',
                            'CBV 6'
                        ]
                    },
                    currentValue: {
                        '@class':
                            'org.knime.js.base.node.base.selection.singleMultiple.SingleMultipleSelectionNodeValue',
                        value: [
                            'CBV 2',
                            'CBV 4',
                            'CBV 6'
                        ]
                    },
                    possibleChoices: [
                        'CBV 1',
                        'CBV 2',
                        'CBV 3',
                        'CBV 4',
                        'CBV 5',
                        'CBV 6'
                    ],
                    type: 'Check boxes (vertical)',
                    limitNumberVisOptions: false,
                    numberVisOptions: 10
                },
                viewValue: null,
                customCSS: '',
                initMethodName: 'init',
                validateMethodName: 'validate',
                setValidationErrorMethodName: 'setValidationErrorMessage'
            },
            nodeId: '5:0:7',
            isValid: false
        };
        propsDataCheckboxHorizontal = {
            nodeConfig: {
                '@class': 'org.knime.js.core.JSONWebNode',
                stylesheets: [
                    '/js-lib/font-awesome/4_7_0/css/font-awesome.min.css',
                    '/js-lib/knime/service/knime.css',
                    '/js-lib/jQueryUI/min/themes/base/jquery-ui.min.css',
                    '/org/knime/js/base/util/quickform/quickformStyles.css'
                ],
                nodeInfo: {
                    '@class': 'org.knime.js.core.JSONWebNodeInfo',
                    nodeAnnotation: '',
                    nodeName: 'Multiple Selection Widget',
                    nodeState: 'executed',
                    displayPossible: true,
                    nodeErrorMessage: null,
                    nodeWarnMessage: null
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
                    '/org/knime/js/base/node/widget/selection/multiple/multipleSelectionWidget.js'
                ],
                getViewValueMethodName: 'value',
                namespace: 'knimeMultipleSelectionWidget',
                viewRepresentation: {
                    '@class': 'org.knime.js.base.node.widget.selection.multiple.MultipleSelectionWidgetRepresentation',
                    label: 'Label Checkbox Horiziontal',
                    description: 'Enter Description',
                    required: true,
                    defaultValue: {
                        '@class':
                            'org.knime.js.base.node.base.selection.singleMultiple.SingleMultipleSelectionNodeValue',
                        value: [
                            'CBH 1',
                            'CBH 4'
                        ]
                    },
                    currentValue: {
                        '@class':
                            'org.knime.js.base.node.base.selection.singleMultiple.SingleMultipleSelectionNodeValue',
                        value: [
                            'CBH 1',
                            'CBH 4'
                        ]
                    },
                    possibleChoices: [
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
                    numberVisOptions: 10
                },
                viewValue: null,
                customCSS: '',
                initMethodName: 'init',
                validateMethodName: 'validate',
                setValidationErrorMethodName: 'setValidationErrorMessage'
            },
            nodeId: '5:0:9',
            isValid: false
        };

    });

    it('renders all different types', () => {
        let wrapper = shallowMount(MultipleSelectionWidget, {
            propsData: propsDataTwinlist
        });
        expect(wrapper.html()).toBeTruthy();
        expect(wrapper.isVisible()).toBeTruthy();

        let wrapper2 = shallowMount(MultipleSelectionWidget, {
            propsData: propsDataCheckboxHorizontal
        });
        expect(wrapper2.html()).toBeTruthy();
        expect(wrapper2.isVisible()).toBeTruthy();

        let wrapper3 = shallowMount(MultipleSelectionWidget, {
            propsData: propsDataCheckboxVertical
        });
        expect(wrapper3.html()).toBeTruthy();
        expect(wrapper3.isVisible()).toBeTruthy();

        let wrapper4 = shallowMount(MultipleSelectionWidget, {
            propsData: propsDataMultiselectListBox
        });
        expect(wrapper4.html()).toBeTruthy();
        expect(wrapper4.isVisible()).toBeTruthy();
    });

    it('sends @updateWidget if MultiSelectView emits @input', () => {
        let propsData = propsDataMultiselectListBox;
        let wrapper = shallowMount(MultipleSelectionWidget, {
            propsData
        });

        const testValue = ['VALUE1', 'VALUE2'];
        const comp = wrapper.find(MultiSelectView);
        comp.vm.$emit('input', testValue);

        expect(wrapper.emitted().updateWidget).toBeTruthy();
        expect(wrapper.emitted().updateWidget[0][0]).toStrictEqual({
            nodeId: propsData.nodeId,
            type: 'value',
            value: testValue
        });
    });

    describe('validation', () => {
        it('is always valid if not required', () => {
            propsDataMultiselectListBox.nodeConfig.viewRepresentation.required = false;
            propsDataMultiselectListBox.nodeConfig.viewRepresentation.currentValue.value = [];
            propsDataMultiselectListBox.nodeConfig.viewRepresentation.defaultValue.value = [];
            let wrapper = shallowMount(MultipleSelectionWidget, {
                propsData: propsDataMultiselectListBox
            });

            expect(wrapper.vm.validate()).toBe(true);
        });

        it('is invalid/valid if required and no selection/a selection was made', () => {
            propsDataMultiselectListBox.nodeConfig.viewRepresentation.required = true;
            let wrapper = mount(MultipleSelectionWidget, {
                propsData: propsDataMultiselectListBox
            });

            expect(wrapper.vm.validate()).toBe(false);

            // set the value
            wrapper.setProps({ valuePair: propsDataMultiselectListBox.nodeConfig.viewRepresentation.currentValue });

            expect(wrapper.vm.validate()).toBe(true);
        });
    });


    describe('error message', () => {
        it('is not set when valid', () => {
            propsDataCheckboxHorizontal.isValid = true;
            let wrapper = shallowMount(MultipleSelectionWidget, {
                propsData: propsDataCheckboxHorizontal
            });

            expect(wrapper.vm.errorMessage).toBe(null);
        });

        it('is default if not set', () => {
            propsDataCheckboxHorizontal.nodeConfig.viewRepresentation.errorMessage = false;
            let wrapper = shallowMount(MultipleSelectionWidget, {
                propsData: propsDataCheckboxHorizontal
            });

            expect(wrapper.vm.errorMessage).toBe('Current selection is invalid');
        });

        it('is errorMessage if set (viewRep)', () => {
            propsDataCheckboxHorizontal.nodeConfig.viewRepresentation.errorMessage = 'Test ERROR MSG';
            let wrapper = shallowMount(MultipleSelectionWidget, {
                propsData: propsDataCheckboxHorizontal
            });

            expect(wrapper.vm.errorMessage).toBe('Test ERROR MSG');
        });
    });
});
