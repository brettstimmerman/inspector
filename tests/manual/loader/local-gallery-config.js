// Test Gallery modules locally with Loader.
// See: https://gist.github.com/943498
YUI_config = {
    lang  : ['en-US'],
    groups: {
        gallery: {
            base    : './../../../../yui3-gallery/build/',
            patterns: {
                'gallery-'  : {},
                'gallerycss-': { type: 'css' }
            },
            modules: {
                'gallery-inspector': {
                    path     :'gallery-inspector/gallery-inspector.js',
                    lang     : ['en'],
                    requires : [
                        'dd-constrain', 'escape', 'event-key', 'event-valuechange',
                        'substitute', 'widget', 'widget-stack'
                    ],
                    skinnable: true
                },
                'gallery-inspector-plugin': {
                    path    : 'gallery-inspector/gallery-inspector-plugin.js',
                    requires: ['gallery-inspector']
                }
            }
        }
    }
};
