console.log('test');
function addListBlockClassName(settings, block) {
    if (name !== 'core/cover') {
        return settings;
    }

    console.log(settings);
}
wp.hooks.addFilter('blocks.registerBlockType', 'my-plugin/class-names/list-block', addListBlockClassName);
