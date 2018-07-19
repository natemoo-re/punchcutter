export class MyBlock {
    
    edit(props) {
        return wp.element.createElement(
            'p',
            { className: props.className },
            'Hello World! — from the editor'
        );
    }
    
    save(props) {
        return wp.element.createElement(
            'p',
            { className: props.className },
            'Hello World! — from the frontend'
        );
    }

    static get attributes() {
        return {
            "first": {
                "type": String,
                "attr": "first"
            },
            "last": {
                "type": String,
                "attr": "last"
            }
        };
    }
}