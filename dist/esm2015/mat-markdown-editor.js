import { Component, ViewChild, forwardRef, Attribute, Input, Injectable, NgModule, Output, EventEmitter, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

/**
 * @fileoverview added by tsickle
 * Generated from: module/utils/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} text
 * @return {?}
 */
function markDownListItem(text) {
    if (!/^\s*\[[x ]]\s*/.test(text)) {
        return `<li>${text}</li>`;
    }
    else {
        text = text
            .replace(/^\s*\[ ]\s*/, '<i class="material-icons" style="vertical-align:top;margin-bottom:0.2em;margin-left:-0.8em;">check_box_outline_blank</i> ')
            .replace(/^\s*\[x]\s*/, '<i class="material-icons" style="vertical-align:top;margin-bottom:0.2em;margin-left:-0.8em;">check_box</i> ');
        return `<li style="list-style: none;">${text}</li>`;
    }
}
/**
 * @param {?} header
 * @param {?} body
 * @return {?}
 */
function markDownTable(header, body) {
    return `<table class="table table-bordered">\n<thead>\n${header}</thead>\n<tbody>\n${body}</tbody>\n</table>\n`;
}
/**
 * @param {?} code
 * @param {?} language
 * @return {?}
 */
function markDownCode(code, language) {
    /** @type {?} */
    const validLang = !!(language && hljs.getLanguage(language));
    /** @type {?} */
    const highlighted = validLang ? hljs.highlight(language, code).value : code;
    return `<pre style="padding: 0; border-radius: 0;"><code class="hljs ${language}">${highlighted}</code></pre>`;
}

/**
 * @fileoverview added by tsickle
 * Generated from: module/editor/editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatMarkdownEditorComponent {
    /**
     * @param {?=} required
     * @param {?=} maxlength
     * @param {?=} _domSanitizer
     */
    constructor(required = false, maxlength = -1, _domSanitizer) {
        this.required = required;
        this.maxlength = maxlength;
        this._domSanitizer = _domSanitizer;
        this.showPreviewPanel = true;
        this.isFullScreen = false;
        this._options = {};
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @return {?}
     */
    get markdownValue() {
        return this._markdownValue || '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set markdownValue(value) {
        this._markdownValue = value;
        this._onChange(value);
        if (this.options.preRender && this.options.preRender instanceof Function) {
            value = this.options.preRender(value);
        }
        if (value !== null && value !== undefined) {
            if (this._renderMarkTimeout) {
                clearTimeout(this._renderMarkTimeout);
            }
            this._renderMarkTimeout = setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const html = marked(value || '', this._markedOpt);
                this.previewHtml = this._domSanitizer.bypassSecurityTrustHtml(html);
            }), 100);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const editorElement = this.aceEditorContainer.nativeElement;
        this.editor = ace.edit(editorElement);
        /** @type {?} */
        const markedRender = new marked.Renderer();
        markedRender.code = markDownCode;
        markedRender.table = markDownTable;
        markedRender.listitem = markDownListItem;
        /** @type {?} */
        const markedjsOpt = {
            renderer: markedRender,
            highlight: (/**
             * @param {?} code
             * @return {?}
             */
            (code) => hljs.highlightAuto(code).value),
        };
        this._markedOpt = Object.assign({}, this.options.markedjsOpt, markedjsOpt);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.editor.$blockScrolling = Infinity;
        this.editor.getSession().setUseWrapMode(true);
        this.editor.getSession().setMode('ace/mode/markdown');
        this.editor.setValue(this.markdownValue || '', 1);
        this.editor.setOption('scrollPastEnd', this._options.scrollPastEnd || 0);
        this.editor.on('change', (/**
         * @return {?}
         */
        () => {
            this.markdownValue = this.editor.getValue();
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.markdownValue = value;
            if (typeof value !== 'undefined' && this.editor) {
                this.editor.setValue(value || '', 1);
            }
        }), 1);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        /** @type {?} */
        let result = null;
        if (this.required && this.markdownValue.length === 0) {
            result = { required: true };
        }
        if (this.maxlength > 0 && this.markdownValue.length > this.maxlength) {
            result = { maxlength: true };
        }
        return result;
    }
    /**
     * @param {?} isOpen
     * @return {?}
     */
    onTogglePreview(isOpen) {
        this.showPreviewPanel = isOpen;
    }
    /**
     * @param {?} isFullScreen
     * @return {?}
     */
    onFullScreen(isFullScreen) {
        this.isFullScreen = isFullScreen;
        this.editor.resize();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    previewPanelClick(event) {
        if (this.options.enablePreviewContentClick !== true) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        return this.editor && this.editor.destroy();
    }
}
MatMarkdownEditorComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'mat-markdown-editor',
                template: `
    <div
      class="md-editor-container"
      [class.fullscreen]="isFullScreen"
      [class.border]="options.showBorder"
      [class.md-editor-resizable]="options.resizable"
      [style.height]="options.height"
    >
      <div class="md-layout">
        <mat-markdown-editor-toolbar
          [options]="options"
          [editor]="editor"
          [isFullScreen]="isFullScreen"
          (onTogglePreview)="onTogglePreview($event)"
          (onFullScreen)="onFullScreen($event)"
        >
        </mat-markdown-editor-toolbar>

        <div class="editor-container">
          <div
            class="editor-panel-container"
            [style.display]="options?.mode == 'preview' ? 'none' : null"
          >
            <div class="editor-panel">
              <div class="ace-editor" #aceEditor></div>
            </div>
          </div>
          <div
            [style.display]="showPreviewPanel ? 'block' : 'none'"
            (click)="previewPanelClick($event)"
          >
            <div class="preview-panel" [innerHTML]="previewHtml"></div>
          </div>
        </div>
        <div class="md-footer" *ngIf="maxlength > 0 && options?.mode != 'preview'">
          <mat-toolbar>
            <div class="text-right length-view">
              {{ markdownValue?.length }} / {{ maxlength }}
            </div>
            <div class="resize-btn"></div>
          </mat-toolbar>
        </div>
      </div>
    </div>
  `,
                styles: [`
    .md-editor-container{position:relative;height:100%;margin-bottom:15px}.md-editor-container.border{border:1px solid rgba(0,0,0,.1)}.md-editor-container.fullscreen{margin:0;position:fixed;border:0;top:0;left:0;width:100%!important;height:100%!important;z-index:99}.md-editor-container.md-editor-resizable:not(.fullscreen){resize:both;overflow:auto;display:inline-block;width:100%}.md-editor-container.md-editor-resizable:not(.fullscreen) .md-footer{z-index:-1}.md-editor-container .md-layout{height:100%;display:flex;flex-direction:column}.md-editor-container .md-layout .editor-container{flex:1;display:flex}.md-editor-container .md-layout .editor-container>div{flex:1}.md-editor-container .md-layout .editor-container .editor-panel,.md-editor-container .md-layout .editor-container .editor-panel-container{height:100%}.md-editor-container .md-layout .editor-container .editor-panel .ace-editor{height:100%;min-height:100%}.md-editor-container .md-layout .preview-panel{height:100%;border-left:1px solid rgba(0,0,0,.1);background-color:#fff;padding:10px;overflow-y:auto}.md-editor-container .md-layout .preview-panel .material-icons{vertical-align:top;margin-bottom:.2em;margin-left:-.8em}.md-editor-container .md-layout .md-footer .length-view{flex:1;padding:4px 2px 0;font-size:12px;line-height:16px}.md-editor-container .md-layout .md-footer .resize-btn{width:17px}
  `],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => MatMarkdownEditorComponent)),
                        multi: true,
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => MatMarkdownEditorComponent)),
                        multi: true,
                    },
                ],
            },] },
];
/** @nocollapse */
MatMarkdownEditorComponent.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: Attribute, args: ['required',] }] },
    { type: Number, decorators: [{ type: Attribute, args: ['maxlength',] }] },
    { type: DomSanitizer }
];
MatMarkdownEditorComponent.propDecorators = {
    aceEditorContainer: [{ type: ViewChild, args: ['aceEditor', { static: true },] }],
    options: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: module/service/lib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LibService {
    constructor() { }
    /**
     * @param {?=} name
     * @return {?}
     */
    sayHello(name) {
        return `Hello ${name || 'Stanger'}!`;
    }
}
LibService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LibService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: module/material.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MaterialModule {
}
MaterialModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatAutocompleteModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatChipsModule,
                    MatStepperModule,
                    MatDatepickerModule,
                    MatDialogModule,
                    MatExpansionModule,
                    MatGridListModule,
                    MatIconModule,
                    MatInputModule,
                    MatListModule,
                    MatMenuModule,
                    MatNativeDateModule,
                    MatPaginatorModule,
                    MatProgressBarModule,
                    MatProgressSpinnerModule,
                    MatRadioModule,
                    MatRippleModule,
                    MatSelectModule,
                    MatSidenavModule,
                    MatSliderModule,
                    MatSlideToggleModule,
                    MatSnackBarModule,
                    MatSortModule,
                    MatTableModule,
                    MatTabsModule,
                    MatToolbarModule,
                    MatTooltipModule,
                ],
                exports: [
                    MatAutocompleteModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatChipsModule,
                    MatStepperModule,
                    MatDatepickerModule,
                    MatDialogModule,
                    MatExpansionModule,
                    MatGridListModule,
                    MatIconModule,
                    MatInputModule,
                    MatListModule,
                    MatMenuModule,
                    MatNativeDateModule,
                    MatPaginatorModule,
                    MatProgressBarModule,
                    MatProgressSpinnerModule,
                    MatRadioModule,
                    MatRippleModule,
                    MatSelectModule,
                    MatSidenavModule,
                    MatSliderModule,
                    MatSlideToggleModule,
                    MatSnackBarModule,
                    MatSortModule,
                    MatTableModule,
                    MatTabsModule,
                    MatToolbarModule,
                    MatTooltipModule,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * Generated from: module/editor/toolbar/toolbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EditorToolbarComponent {
    /**
     * @param {?} _renderer
     */
    constructor(_renderer) {
        this._renderer = _renderer;
        this.onTogglePreview = new EventEmitter();
        this.onFullScreen = new EventEmitter();
        this.previewIsOpen = true;
    }
    /**
     * @param {?} type
     * @param {?=} customContent
     * @return {?}
     */
    insertContent(type, customContent) {
        if (!this.editor) {
            return;
        }
        /** @type {?} */
        let selectedText = this.editor.getSelectedText();
        /** @type {?} */
        let startSize = 2;
        /** @type {?} */
        let initText = '';
        /** @type {?} */
        const isSelected = !!selectedText;
        /** @type {?} */
        const range = this.editor.selection.getRange();
        switch (type) {
            case 'Bold':
                initText = 'Bold Text';
                selectedText = `**${selectedText || initText}**`;
                break;
            case 'Italic':
                initText = 'Italic Text';
                selectedText = `*${selectedText || initText}*`;
                startSize = 1;
                break;
            case 'Heading':
                initText = 'Heading';
                selectedText = `# ${selectedText || initText}`;
                break;
            case 'Reference':
                initText = 'Reference';
                selectedText = `> ${selectedText || initText}`;
                break;
            case 'Link':
                selectedText = `[${selectedText}](http://)`;
                startSize = 1;
                break;
            case 'Image':
                selectedText = `![](http://)`;
                break;
            case 'Ul':
                selectedText = `- ${selectedText || initText}`;
                break;
            case 'Ol':
                selectedText = `1. ${selectedText || initText}`;
                startSize = 3;
                break;
            case 'Code':
                initText = 'Source Code';
                selectedText =
                    '```language\r\n' + (selectedText || initText) + '\r\n```';
                startSize = 3;
                break;
            case 'Custom':
                selectedText = customContent;
                startSize = 0;
                break;
        }
        this.editor.session.replace(range, selectedText);
        if (!isSelected) {
            range.start.column += startSize;
            range.end.column = range.start.column + initText.length;
            this.editor.selection.setRange(range);
        }
        this.editor.focus();
    }
    /**
     * @return {?}
     */
    togglePreview() {
        this.previewIsOpen = !this.previewIsOpen;
        this.onTogglePreview.emit(this.previewIsOpen);
        this.editorResize();
    }
    /**
     * @return {?}
     */
    fullScreen() {
        this.isFullScreen = !this.isFullScreen;
        this._renderer.setStyle(document.body, 'overflowY', this.isFullScreen ? 'hidden' : 'auto');
        this.onFullScreen.emit(this.isFullScreen);
        this.editorResize();
    }
    /**
     * @param {?=} timeOut
     * @return {?}
     */
    editorResize(timeOut = 100) {
        if (!this.editor) {
            return;
        }
        if (this._editorResizeTimer) {
            clearTimeout(this._editorResizeTimer);
        }
        this._editorResizeTimer = setTimeout((/**
         * @return {?}
         */
        () => {
            this.editor.resize();
            this.editor.focus();
        }), timeOut);
    }
}
EditorToolbarComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'mat-markdown-editor-toolbar',
                template: `
    <mat-toolbar
      [color]="options.toolbarColor"
      *ngIf="!options.hideToolbar && options?.mode != 'preview'"
      fxLayout="row"
      fxLayoutAlign="start center"
      fxLayoutGap="5px"
    >
      <div class="btn-group">
        <button
          mat-icon-button
          type="button"
          matTooltip="Bold"
          (click)="insertContent('Bold')"
          *ngIf="!options?.hideIcons?.Bold"
        >
          <mat-icon aria-label="bold">format_bold</mat-icon>
        </button>
        <button
          mat-icon-button
          type="button"
          matTooltip="Italic"
          (click)="insertContent('Italic')"
          *ngIf="!options?.hideIcons?.Italic"
        >
          <mat-icon aria-label="italic">format_italic</mat-icon>
        </button>
        <button
          mat-icon-button
          type="button"
          matTooltip="Heading"
          (click)="insertContent('Heading')"
          *ngIf="!options?.hideIcons?.Heading"
        >
          <mat-icon aria-label="italic">format_size</mat-icon>
        </button>
        <button
          mat-icon-button
          type="button"
          matTooltip="Refrence"
          (click)="insertContent('Reference')"
          *ngIf="!options?.hideIcons?.Reference"
        >
          <mat-icon aria-label="quote">format_quote</mat-icon>
        </button>
        <mat-divider [vertical]="true"></mat-divider>
      </div>

      <div class="btn-group">
        <button
          mat-icon-button
          type="button"
          matTooltip="Link"
          (click)="insertContent('Link')"
          *ngIf="!options?.hideIcons?.Link"
        >
          <mat-icon aria-label="link">link</mat-icon>
        </button>
        <button
          mat-icon-button
          type="button"
          matTooltip="Image"
          (click)="insertContent('Image')"
          *ngIf="!options?.hideIcons?.Image"
        >
          <mat-icon aria-label="Image">photo</mat-icon>
        </button>
        <mat-divider [vertical]="true"></mat-divider>
      </div>

      <div class="btn-group">
        <button
          mat-icon-button
          type="button"
          matTooltip="Unordered List"
          (click)="insertContent('Ul')"
          *ngIf="!options?.hideIcons?.Ul"
        >
          <mat-icon aria-label="Unordered List">
            format_list_bulleted
          </mat-icon>
        </button>
        <button
          mat-icon-button
          type="button"
          matTooltip="Ordered List"
          (click)="insertContent('Ol')"
          *ngIf="!options?.hideIcons?.Ol"
        >
          <mat-icon aria-label="Unordered List">
            format_list_numbered
          </mat-icon>
        </button>
        <button
          mat-icon-button
          type="button"
          matTooltip="Code Block"
          (click)="insertContent('Code')"
          *ngIf="!options?.hideIcons?.Code"
        >
          <mat-icon aria-label="code">code</mat-icon>
        </button>
        <mat-divider [vertical]="true"></mat-divider>
      </div>

      <div class="btn-group">
        <button
          mat-icon-button
          type="button"
          [matTooltip]="previewIsOpen ? 'Hide Preview' : 'Show Preview'"
          (click)="togglePreview()"
          *ngIf="!options?.hideIcons?.TogglePreview"
        >
          <mat-icon aria-label="Unordered List">{{
            previewIsOpen ? 'visibility_off' : 'visibility'
          }}</mat-icon>
        </button>
      </div>

      <span fxFlex></span>

      <div class="btn-group pull-right hide-split">
        <button
          mat-icon-button
          type="button"
          matTooltip="Full Screen Mode"
          [class.active]="isFullScreen"
          (click)="fullScreen()"
          *ngIf="!options?.hideIcons?.FullScreen && !isFullScreen"
        >
          <mat-icon aria-label="fullscreen">fullscreen</mat-icon>
        </button>
        <button
          mat-icon-button
          type="button"
          matTooltip="Exit Full Screen Mode"
          [class.active]="isFullScreen"
          (click)="fullScreen()"
          *ngIf="!options?.hideIcons?.FullScreen && isFullScreen"
        >
          <mat-icon aria-label="fullscreen">fullscreen_exit</mat-icon>
        </button>
      </div>
    </mat-toolbar>
  `,
                styles: [`

  `],
            },] },
];
/** @nocollapse */
EditorToolbarComponent.ctorParameters = () => [
    { type: Renderer2 }
];
EditorToolbarComponent.propDecorators = {
    options: [{ type: Input }],
    isFullScreen: [{ type: Input }],
    editor: [{ type: Input }],
    onTogglePreview: [{ type: Output }],
    onFullScreen: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: module/lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatMarkdownEditorModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: MatMarkdownEditorModule,
            providers: [LibService],
        };
    }
}
MatMarkdownEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    MaterialModule,
                    ReactiveFormsModule,
                    BrowserAnimationsModule,
                    FlexLayoutModule,
                ],
                exports: [MatMarkdownEditorComponent],
                declarations: [MatMarkdownEditorComponent, EditorToolbarComponent],
            },] },
];

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: mat-markdown-editor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MatMarkdownEditorComponent, LibService, MatMarkdownEditorModule, EditorToolbarComponent as ɵb, MaterialModule as ɵa };
//# sourceMappingURL=mat-markdown-editor.js.map
