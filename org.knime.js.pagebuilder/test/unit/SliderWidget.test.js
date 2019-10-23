import { shallowMount } from '@vue/test-utils';

import SliderWidget from '@/components/widgets/input/SliderWidget';
import Slider from '@/components/widgets/baseElements/input/Slider';
import ErrorMessage from '@/components/widgets/baseElements/text/ErrorMessage';

describe('SliderWidget.vue', () => {
    let context, nodeConfig, nodeId, isValid;

    beforeEach(() => {

        nodeConfig = {
            '@class': 'org.knime.js.core.JSONWebNode',
            nodeInfo: {
                '@class': 'org.knime.js.core.JSONWebNodeInfo',
                nodeState: 'executed',
                nodeAnnotation: '',
                nodeErrorMessage: null,
                nodeWarnMessage: null,
                displayPossible: true,
                nodeName: 'Slider Widget'
            },
            namespace: 'knimeSliderWidget',
            validateMethodName: 'validate',
            setValidationErrorMethodName: 'setValidationErrorMessage',
            viewRepresentation: {
                '@class': 'org.knime.js.base.node.widget.input.slider.SliderWidgetNodeRepresentation',
                sliderSettings: {
                    '@class': 'org.knime.js.core.settings.slider.SliderSettings',
                    connect: [
                        false,
                        false
                    ],
                    tooltips: [
                        {
                            prefix: '$',
                            negative: '-',
                            thousand: ',',
                            decimals: 2,
                            postfix: '_',
                            mark: '.',
                            negativeBefore: '-'
                        }
                    ],
                    pips: {
                        '@class': 'org.knime.js.core.settings.slider.SliderPipsSettings',
                        format: {
                            '@class': 'org.knime.js.core.settings.numberFormat.NumberFormatSettings',
                            negative: '-',
                            decimals: 2,
                            mark: '.'
                        },
                        mode: 'positions',
                        values: [
                            0,
                            25,
                            50,
                            75,
                            100
                        ],
                        stepped: false,
                        density: 3
                    },
                    direction: 'ltr',
                    orientation: 'vertical',
                    range: {
                        min: [
                            5
                        ],
                        max: [
                            25
                        ]
                    },
                    start: [
                        5
                    ]
                },
                useCustomMax: true,
                useCustomMin: true,
                customMax: 100,
                customMin: 0,
                defaultValue: {
                    '@class': 'org.knime.js.base.node.base.input.slider.SliderNodeValue',
                    double: 5
                },
                description: 'Enter Description',
                required: true,
                label: 'Testing Slider',
                currentValue: {
                    '@class': 'org.knime.js.base.node.base.input.slider.SliderNodeValue',
                    double: 5
                }
            },
            initMethodName: 'init',
            getViewValueMethodName: 'value',
            javascriptLibraries: [
                '/js-lib/knime/service/knime_service_1_0_0.js',
                '/js-lib/jQuery/jquery-1.11.0.min.js',
                '/js-lib/jQueryUI/min/ui/jquery-ui.min.js',
                '/org/knime/js/base/util/quickform/knime_quickform_utils_1_0_0.js',
                '/js-lib/wNumb/wNumb.js',
                '/js-lib/noUiSlider/12_1_0/nouislider.min.js',
                '/org/knime/js/base/node/widget/input/slider/sliderWidget.js'
            ],
            viewValue: null,
            customCSS: '',
            stylesheets: [
                '/js-lib/font-awesome/4_7_0/css/font-awesome.min.css',
                '/js-lib/knime/service/knime.css',
                '/js-lib/jQueryUI/min/themes/base/jquery-ui.min.css',
                '/org/knime/js/base/util/quickform/quickformStyles.css',
                '/js-lib/noUiSlider/12_1_0/nouislider.min.css',
                '/org/knime/js/base/node/widget/input/slider/sliderWidget.css'
            ]
        };
        nodeId = 'id1';
        isValid = true;
    });

    it('renders', () => {
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid
            }
        });
        expect(wrapper.html()).toBeTruthy();
        expect(wrapper.isVisible()).toBeTruthy();
    });

    it('has default (empty) props (expected failure)', () => {
        try {
            shallowMount(SliderWidget, context);
        } catch (e) {
            expect(e.toString().split(':')[0]).toBe('TypeError');
        }
    });

    it('has a Slider component', () => {
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid
            }
        });

        expect(wrapper.find(Slider)).toBeTruthy();
    });

    // TODO AP-12850: update component level validation
    it('always validates as true', () => {
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid
            }
        });
        expect(wrapper.vm.validate()).toBe(true);
    });

    it('has correct data properties', () => {
        let propsData = {
            nodeConfig,
            nodeId,
            isValid
        };
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData
        });

        expect(wrapper.vm.viewRep).toBe(nodeConfig.viewRepresentation);
        expect(wrapper.vm.sliderSettings).toBe(nodeConfig.viewRepresentation.sliderSettings);
    });

    it('has correct computed properties', () => {
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid
            }
        });
        // tooltip format and marks and labels tested separately
        expect(wrapper.vm.label).toBe('Testing Slider');
        expect(wrapper.vm.min).toBe(0);
        expect(wrapper.vm.max).toBe(100);
        expect(wrapper.vm.val).toBe(5);
        expect(wrapper.vm.direction).toBe('ttb');
        expect(wrapper.vm.stepSize).toBe(.000001);
        expect(wrapper.vm.height).toBe(533);
        expect(wrapper.vm.tooltips).toBe('always');
        expect(wrapper.vm.connect).toBe('none');
        expect(wrapper.vm.sliderClass).toEqual(
            expect.arrayContaining(['knime-slider', 'knime-slider-vertical', 'tooltip-slider'])
        );
        expect(wrapper.vm.labelClass).toEqual(
            expect.arrayContaining(['knime-label', 'knime-slider-vertical-label', 'tooltip-label'])
        );
        expect(wrapper.vm.errorClass).toEqual(
            expect.arrayContaining(['knime-error', 'knime-slider-vertical-error', 'tooltip-error'])
        );
    });

    it('uses custom max and min if present', () => {
        let propsData = {
            nodeConfig,
            nodeId,
            isValid
        };
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData
        });

        expect(wrapper.vm.min).toBe(0);
        expect(wrapper.vm.max).toBe(100);
        
        nodeConfig.viewRepresentation.useCustomMin = false;
        nodeConfig.viewRepresentation.useCustomMax = false;

        expect(wrapper.vm.min).toBe(5);
        expect(wrapper.vm.max).toBe(25);
    });

    it('sets height if slider is vertical', () => {
        let propsData = {
            nodeConfig,
            nodeId,
            isValid
        };
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData
        });

        expect(wrapper.vm.height).toBe(533);

        nodeConfig.viewRepresentation.sliderSettings.orientation = 'horizontal';

        expect(wrapper.vm.height).toBe(null);
    });

    it('creates tooltip formatting function if present', () => {
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid
            }
        });

        expect(typeof wrapper.vm.tooltipFormat).toBe('function');
        expect(wrapper.vm.tooltipFormat(1.234)).toBe('$1.23_');
        
        nodeConfig.viewRepresentation.sliderSettings.tooltips = [];

        expect(typeof wrapper.vm.tooltipFormat).toBe('function');
        expect(wrapper.vm.tooltipFormat(1.234, {})).toBe('1.234');
    });

    // determines if the slider bar is filled, half (w/ orientation) or none
    it('correctly interprets the "none" connect configuration', () => {
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid
            }
        });

        expect(wrapper.vm.connect).toBe('none');
    });

    // determines if the slider bar is filled, half (w/ orientation) or none
    it('correctly interprets the "bottom" connect configuration', () => {
        nodeConfig.viewRepresentation.sliderSettings.connect[1] = true;
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid
            }
        });

        expect(wrapper.vm.connect).toBe('bottom');
    });

    // determines if the slider bar is filled, half (w/ orientation) or none
    it('correctly interprets the "top" connect configuration', () => {
        nodeConfig.viewRepresentation.sliderSettings.connect[0] = true;
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid
            }
        });

        expect(wrapper.vm.connect).toBe('top');
    });

    // determines if the slider bar is filled, half (w/ orientation) or none
    it('correctly interprets the "both" connect configuration', () => {
        nodeConfig.viewRepresentation.sliderSettings.connect[0] = true;
        nodeConfig.viewRepresentation.sliderSettings.connect[1] = true;
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid
            }
        });

        expect(wrapper.vm.connect).toBe('both');
    });

    it('sets debouncer when an update is received', () => {
        let getWrapper = () => shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid
            }
        });

        let wrapper = getWrapper();

        let changeEvent = {
            val: 10,
            isValid: true,
            nodeId
        };

        wrapper.find(Slider).vm.$emit('onChange', changeEvent);
        setTimeout(() => expect(wrapper.vm.updateDebouncer).toBeTruthy(), 251);
        setTimeout(() => expect(typeof wrapper.vm.updateDebouncer === 'function').toBeTruthy(), 251);
        wrapper = getWrapper();
        wrapper.vm.onChange(changeEvent);
        setTimeout(() => expect(wrapper.vm.updateDebouncer).toBeTruthy(), 251);
        setTimeout(() => expect(typeof wrapper.vm.updateDebouncer === 'function').toBeTruthy(), 251);
    });

    it('captures and detects update events from Slider component with debounce', () => {
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid
            }
        });

        wrapper.find(Slider).vm.$emit('onChange', {
            val: 10,
            isValid: true,
            nodeId
        });

        expect(wrapper.emitted().updateWidget).toBeUndefined();

        setTimeout(() => expect(wrapper.emitted().updateWidget).toBeTruthy(), 251);
    });

    it('debounces multiple updates properly', () => {
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid
            }
        });

        let fireUpdate = () => {
            wrapper.find(Slider).vm.$emit('onChange', {
                val: 10,
                isValid: true,
                nodeId
            });
        };

        fireUpdate();
        setTimeout(() => expect(wrapper.emitted().updateWidget).toBeUndefined(), 251);
        setTimeout(fireUpdate, 240);
        expect(wrapper.emitted().updateWidget).toBeUndefined();
        setTimeout(() => expect(wrapper.emitted().updateWidget).toBeTruthy(), 251);

    });

    it('correctly emits the updateWidget Payload', () => {
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid
            }
        });

        wrapper.find(Slider).vm.$emit('onChange', {
            val: 10,
            isValid: true,
            nodeId
        });

        setTimeout(() => {
            expect(wrapper.emitted().updateWidget.isValid).toBeTrue();
            expect(wrapper.emitted().updateWidget.update).toBeTrue();
            expect(wrapper.emitted().updateWidget.update['viewRepresentation.currentValue.double'])
                .toBe(10);
        }, 251);
    });

    it('has no error message when valid', () => {
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid
            }
        });

        expect(wrapper.vm.errorMessage).toBe('');
    });

    it('has default error message', () => {
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid: false
            }
        });

        expect(wrapper.vm.errorMessage).toBe('Current slider value is invalid');
    });

    it('has warning message', () => {
        nodeConfig.nodeInfo.nodeWarnMessage = 'Testing warning message';
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid: false
            }
        });

        expect(wrapper.vm.errorMessage).toBe('Testing warning message');
    });

    it('has error message', () => {
        nodeConfig.nodeInfo.nodeErrorMessage = 'Testing error message';
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid: false
            }
        });

        expect(wrapper.vm.errorMessage).toBe('Testing error message');
    });

    it('only displays error message when invalid', () => {
        let wrapper = shallowMount(SliderWidget, {
            ...context,
            propsData: {
                nodeConfig,
                nodeId,
                isValid
            }
        });

        expect(wrapper.find(ErrorMessage).isVisible()).toBe(true);
        expect(wrapper.find(ErrorMessage).vm.error).toBe('');
        
        wrapper.setProps({ isValid: false });

        expect(wrapper.find(ErrorMessage).vm.error).not.toBe('');
        expect(wrapper.find(ErrorMessage).vm.error).toBe('Current slider value is invalid');
    });
});
