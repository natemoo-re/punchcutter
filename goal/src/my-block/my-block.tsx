import { Block, Attribute } from 'punchcutter';

@Block({
    title: 'My Block',
    description: 'An block that is automatically enqueued',
    category: 'common',
    styleUrls: {
        style: 'my-block.scss',
        editor: 'my-block.editor.scss'
    }
})
export class MyBlock {

    @Attribute({ source: 'text', selector: 'p' }) firstName: string;
    @Attribute() lastName: string;

	edit(props: any) {
		return (
			<p className={ props.className }>Hello World! — from the editor</p>
		);
    }
    
    save(props: any) {
        return (
            <p className={props.className}>Hello World! — from the frontend</p>
        );
    }
}