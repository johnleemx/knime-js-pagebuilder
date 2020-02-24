require('consola');

jest.mock('raw-loader!./injectedScripts/messageListener.js', () => '"messageListener.js mock";', { virtual: true });
jest.mock('raw-loader!./injectedScripts/scriptLoader.js', () => '"scriptLoader.js mock";', { virtual: true });
jest.mock('raw-loader!iframe-resizer/js/iframeResizer.contentWindow.js', () => '"iframeResizer.js mock";',
    { virtual: true });
