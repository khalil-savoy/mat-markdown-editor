export interface MatMarkdownEditorOptions {
    showBorder?: boolean;
    hideIcons?: object;
    scrollPastEnd?: number;
    enablePreviewContentClick?: boolean;
    resizable?: boolean;
    markedjsOpt?: MarkedjsOption;
    hideToolbar?: boolean;
    height?: string;
    mode?: string;
    preRender?: Function;
    toolbarColor?: string;
}
export interface MarkedjsOption {
    baseUrl?: string;
    breaks?: boolean;
    gfm?: boolean;
    headerIds?: boolean;
    headerPrefix?: string;
    langPrefix?: string;
    mangle?: boolean;
    pedantic?: boolean;
    sanitize?: boolean;
    sanitizer?: Function;
    silent?: boolean;
    smartLists?: boolean;
    smartypants?: boolean;
    tables?: boolean;
    xhtml?: boolean;
}
