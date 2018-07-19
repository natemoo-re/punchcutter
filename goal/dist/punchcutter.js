(function (win, doc, namespace, blockName, resourceUrl) {
    function init(namespace, blockName, resourceUrl) {
        wp.blocks.registerBlockType(`${namespace}/${blockName}`, {
            title: __('Basic', 'GB'), // Block title.
            icon: 'shield-alt', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
            category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.

            // The "edit" property must be a valid function.
            edit: function (props) {
                // Creates a <p class='wp-block-gb-01-basic'></p>.
                return el(
                    'p', // Tag type.
                    {
                        className: props.className
                    }, // The class="wp-block-gb-01-basic" : The class name is generated using the block's name prefixed with wp-block-, replacing the / namespace separator with a single -.
                    'Hello World! — from the editor (01 Basic Block).' // Content inside the tag.
                );
            },

            // The "save" property must be specified and must be a valid function.
            save: function (props) {
                return el(
                    'p', // Tag type.
                    {
                        className: props.className
                    }, // The class="wp-block-gb-01-basic" : The class name is generated using the block's name prefixed with wp-block-, replacing the / namespace separator with a single -.
                    'Hello World! — from the frontend (01 Basic Block).' // Content inside the tag.
                );
            },
        });
    }

    init(win, doc, namespace)
})(window, document, "my-plugin", "my-block", "my-block.compiled.js");