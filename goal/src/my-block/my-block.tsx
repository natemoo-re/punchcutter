import { Block, WP } from '@punchcutter/core';
const { RichText, BlockControls, AlignmentToolbar } = wp.editor;

interface Attributes {
    content: string[];
    alignment: 'left'|'right'|'center';
}

@Block({
    title: 'My Block',
    description: 'An block that is automatically enqueued',
    category: 'common',
    styleUrls: {
        style: 'my-block.scss',
        editor: 'my-block.editor.scss'
    }
})
export class MyBlock extends WP.Block<Attributes> {

    edit({ attributes, className, setAttributes }: WP.props<Attributes>) {
        const { alignment, content } = attributes;

        function onChangeContent(newContent) {
            setAttributes({ content: newContent });
        }

        function onChangeAlignment(newAlignment) {
            setAttributes({ alignment: newAlignment });
        }

        return [
            <BlockControls key="controls">
				<AlignmentToolbar
					value={ alignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>,
            <RichText
				key="editable"
				tagName="p"
				className={ className }
				style={ { textAlign: alignment } }
				onChange={ onChangeContent }
				value={ content }
            />
        ];
    }
    
    save({ attributes, className }: WP.props<Attributes>) {
        const { content, alignment } = attributes;
        return (
            <RichText
                className={className}
                style={{ textAlign: alignment }}
                value={content}
                tagName="p"
            />
        )
    }
}