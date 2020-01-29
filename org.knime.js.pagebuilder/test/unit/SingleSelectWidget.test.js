/* eslint-disable no-magic-numbers */
import { shallowMount } from '@vue/test-utils';

import SingleSelectWidget from '@/components/widgets/input/SingleSelectWidget';
import RadioButtons from '~/webapps-common/ui/components/forms/RadioButtons';

describe('SingleSelectWidget.vue', () => {
    let propsDataRadioHorizonal, propsDataRadioVertical;

    beforeEach(() => {
        propsDataRadioHorizonal = {
            nodeConfig: {
                '@class': 'org.knime.js.core.JSONWebNode',
                nodeInfo: {
                    '@class': 'org.knime.js.core.JSONWebNodeInfo',
                    nodeErrorMessage: null,
                    nodeWarnMessage: null,
                    displayPossible: true,
                    nodeName: 'Single Selection Widget',
                    nodeAnnotation: '',
                    nodeState: 'executed'
                },
                stylesheets: [
                    '/js-lib/font-awesome/4_7_0/css/font-awesome.min.css',
                    '/js-lib/knime/service/knime.css',
                    '/js-lib/jQueryUI/min/themes/base/jquery-ui.min.css',
                    '/org/knime/js/base/util/quickform/quickformStyles.css'
                ],
                javascriptLibraries: [
                    '/js-lib/knime/service/knime_service_1_0_0.js',
                    '/js-lib/jQuery/jquery-1.11.0.min.js',
                    '/org/knime/js/base/dialog/selection/single/DropdownSingleSelection.js',
                    '/org/knime/js/base/dialog/selection/single/ListSingleSelection.js',
                    '/org/knime/js/base/dialog/selection/single/RadioButtonSingleSelection.js',
                    '/js-lib/jQueryUI/min/ui/jquery-ui.min.js',
                    '/org/knime/js/base/util/quickform/knime_quickform_utils_1_0_0.js',
                    '/org/knime/js/base/node/widget/selection/single/singleSelectionWidget.js'
                ],
                initMethodName: 'init',
                validateMethodName: 'validate',
                setValidationErrorMethodName: 'setValidationErrorMessage',
                getViewValueMethodName: 'value',
                namespace: 'knimeSingleSelectionWidget',
                viewRepresentation: {
                    '@class': 'org.knime.js.base.node.base.selection.singleMultiple.' +
                        'SingleMultipleSelectionNodeRepresentation',
                    label: 'Radio Hor',
                    description: 'Enter Description\t\t',
                    required: true,
                    defaultValue: {
                        '@class':
                            'org.knime.js.base.node.base.selection.singleMultiple.SingleMultipleSelectionNodeValue',
                        value: [
                            'O3'
                        ]
                    },
                    currentValue: {
                        '@class':
                            'org.knime.js.base.node.base.selection.singleMultiple.SingleMultipleSelectionNodeValue',
                        value: [
                            'O3'
                        ]
                    },
                    possibleChoices: [
                        'O1 ',
                        'Option 2',
                        'O3'
                    ],
                    type: 'Radio buttons (horizontal)',
                    limitNumberVisOptions: false,
                    numberVisOptions: 10
                },
                viewValue: null,
                customCSS: ''
            },
            nodeId: '4:0:7',
            isValid: false
        };

        propsDataRadioVertical = {
            nodeConfig: {
                '@class': 'org.knime.js.core.JSONWebNode',
                nodeInfo: {
                    '@class': 'org.knime.js.core.JSONWebNodeInfo',
                    nodeErrorMessage: null,
                    nodeWarnMessage: null,
                    displayPossible: true,
                    nodeName: 'Single Selection Widget',
                    nodeAnnotation: '',
                    nodeState: 'executed'
                },
                stylesheets: [
                    '/js-lib/font-awesome/4_7_0/css/font-awesome.min.css',
                    '/js-lib/knime/service/knime.css',
                    '/js-lib/jQueryUI/min/themes/base/jquery-ui.min.css',
                    '/org/knime/js/base/util/quickform/quickformStyles.css'
                ],
                javascriptLibraries: [
                    '/js-lib/knime/service/knime_service_1_0_0.js',
                    '/js-lib/jQuery/jquery-1.11.0.min.js',
                    '/org/knime/js/base/dialog/selection/single/DropdownSingleSelection.js',
                    '/org/knime/js/base/dialog/selection/single/ListSingleSelection.js',
                    '/org/knime/js/base/dialog/selection/single/RadioButtonSingleSelection.js',
                    '/js-lib/jQueryUI/min/ui/jquery-ui.min.js',
                    '/org/knime/js/base/util/quickform/knime_quickform_utils_1_0_0.js',
                    '/org/knime/js/base/node/widget/selection/single/singleSelectionWidget.js'
                ],
                initMethodName: 'init',
                validateMethodName: 'validate',
                setValidationErrorMethodName: 'setValidationErrorMessage',
                getViewValueMethodName: 'value',
                namespace: 'knimeSingleSelectionWidget',
                viewRepresentation: {
                    '@class': 'org.knime.js.base.node.base.selection.singleMultiple.' +
                        'SingleMultipleSelectionNodeRepresentation',
                    label: 'Radio Vertical',
                    description: 'Enter Description\t\t',
                    required: true,
                    defaultValue: {
                        '@class':
                            'org.knime.js.base.node.base.selection.singleMultiple.SingleMultipleSelectionNodeValue',
                        value: [
                            'O3'
                        ]
                    },
                    currentValue: {
                        '@class':
                            'org.knime.js.base.node.base.selection.singleMultiple.SingleMultipleSelectionNodeValue',
                        value: [
                            'O3'
                        ]
                    },
                    possibleChoices: [
                        'O1 ',
                        'Option 2',
                        'O3'
                    ],
                    type: 'Radio buttons (vertical)',
                    limitNumberVisOptions: false,
                    numberVisOptions: 10
                },
                viewValue: null,
                customCSS: ''
            },
            nodeId: '4:0:6',
            isValid: false
        };
    });

    it('renders', () => {
        let wrapper = shallowMount(SingleSelectWidget, {
            propsData: propsDataRadioHorizonal
        });
        expect(wrapper.html()).toBeTruthy();
        expect(wrapper.isVisible()).toBeTruthy();
        let wrapper2 = shallowMount(SingleSelectWidget, {
            propsData: propsDataRadioVertical
        });
        expect(wrapper2.html()).toBeTruthy();
        expect(wrapper2.isVisible()).toBeTruthy();
    });

    it('renders radiobuttons horizontal', () => {
        propsDataRadioHorizonal.isValid = true;
        let wrapper = shallowMount(SingleSelectWidget, {
            propsData: propsDataRadioHorizonal
        });

        let rb = wrapper.find(RadioButtons);
        expect(rb).toBeTruthy();
        expect(rb.props('alignment')).toBe('horizontal');
    });

    it('renders radiobuttons vertical', () => {
        propsDataRadioVertical.isValid = true;
        let wrapper = shallowMount(SingleSelectWidget, {
            propsData: propsDataRadioVertical
        });

        let rb = wrapper.find(RadioButtons);
        expect(rb).toBeTruthy();
        expect(rb.props('alignment')).toBe('vertical');
    });

    it('has no error message when valid', () => {
        propsDataRadioHorizonal.isValid = true;
        let wrapper = shallowMount(SingleSelectWidget, {
            propsData: propsDataRadioHorizonal
        });

        expect(wrapper.vm.errorMessage).toBe(null);
    });

    it('has default error message', () => {
        propsDataRadioHorizonal.nodeConfig.viewRepresentation.errorMessage = false;
        let wrapper = shallowMount(SingleSelectWidget, {
            propsData: propsDataRadioHorizonal
        });

        expect(wrapper.vm.errorMessage).toBe('Current selected item is invalid');
    });

    it('has warning message', () => {
        propsDataRadioHorizonal.nodeConfig.viewRepresentation.errorMessage = false;
        propsDataRadioHorizonal.nodeConfig.nodeInfo.nodeWarnMessage = 'Testing warning message';
        let wrapper = shallowMount(SingleSelectWidget, {
            propsData: propsDataRadioHorizonal
        });

        expect(wrapper.vm.errorMessage).toBe('Testing warning message');
    });

    it('has error message', () => {
        propsDataRadioHorizonal.nodeConfig.viewRepresentation.errorMessage = false;
        propsDataRadioHorizonal.nodeConfig.nodeInfo.nodeErrorMessage = 'Testing error message';
        let wrapper = shallowMount(SingleSelectWidget, {
            propsData: propsDataRadioHorizonal
        });

        expect(wrapper.vm.errorMessage).toBe('Testing error message');
    });
});
