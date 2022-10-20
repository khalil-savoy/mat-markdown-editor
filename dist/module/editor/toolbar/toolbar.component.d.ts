import { EventEmitter, Renderer2 } from '@angular/core';
export declare class EditorToolbarComponent {
    private _renderer;
    options: any;
    isFullScreen: boolean;
    private editor;
    onTogglePreview: EventEmitter<any>;
    onFullScreen: EventEmitter<any>;
    previewIsOpen: boolean;
    private _editorResizeTimer;
    constructor(_renderer: Renderer2);
    insertContent(type: string, customContent?: string): void;
    togglePreview(): void;
    fullScreen(): void;
    editorResize(timeOut?: number): void;
}
