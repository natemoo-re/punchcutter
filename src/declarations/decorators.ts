import { Dashicon } from './dashicons';

export interface BlockDecorator {
  (opts?: BlockOptions): any;
}

export interface BlockOptions {
    title: string;
    category: 'common' | 'formatting' | 'layout' | 'widgets' | 'embed';
    styleUrls?: string | { style: string; editor: string; };
    
    description?: string;
    keywords?: string[];
    icon?: Dashicon;
}

export interface AttributeDecorator {
    (opts?: AttributeOptions): any;
}

export interface AttributeOptions {
    source: 'attribute' | 'text' | 'html' | 'children' | 'query';
    selector: string;
}
export interface AttributeOptions {

}