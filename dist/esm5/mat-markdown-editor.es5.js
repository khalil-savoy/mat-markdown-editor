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
        return "<li>" + text + "</li>";
    }
    else {
        text = text
            .replace(/^\s*\[ ]\s*/, '<i class="material-icons" style="vertical-align:top;margin-bottom:0.2em;margin-left:-0.8em;">check_box_outline_blank</i> ')
            .replace(/^\s*\[x]\s*/, '<i class="material-icons" style="vertical-align:top;margin-bottom:0.2em;margin-left:-0.8em;">check_box</i> ');
        return "<li style=\"list-style: none;\">" + text + "</li>";
    }
}
/**
 * @param {?} header
 * @param {?} body
 * @return {?}
 */
function markDownTable(header, body) {
    return "<table class=\"table table-bordered\">\n<thead>\n" + header + "</thead>\n<tbody>\n" + body + "</tbody>\n</table>\n";
}
/**
 * @param {?} code
 * @param {?} language
 * @return {?}
 */
function markDownCode(code, language) {
    /** @type {?} */
    var validLang = !!(language && hljs.getLanguage(language));
    /** @type {?} */
    var highlighted = validLang ? hljs.highlight(language, code).value : code;
    return "<pre style=\"padding: 0; border-radius: 0;\"><code class=\"hljs " + language + "\">" + highlighted + "</code></pre>";
}

/**
 * @fileoverview added by tsickle
 * Generated from: module/editor/editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatMarkdownEditorComponent = /** @class */ (function () {
    function MatMarkdownEditorComponent(required, maxlength, _domSanitizer) {
        if (required === void 0) { required = false; }
        if (maxlength === void 0) { maxlength = -1; }
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
        function (_) { });
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    Object.defineProperty(MatMarkdownEditorComponent.prototype, "markdownValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._markdownValue || '';
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
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
                function () {
                    /** @type {?} */
                    var html = marked(value || '', _this._markedOpt);
                    _this.previewHtml = _this._domSanitizer.bypassSecurityTrustHtml(html);
                }), 100);
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatMarkdownEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var editorElement = this.aceEditorContainer.nativeElement;
        this.editor = ace.edit(editorElement);
        /** @type {?} */
        var markedRender = new marked.Renderer();
        markedRender.code = markDownCode;
        markedRender.table = markDownTable;
        markedRender.listitem = markDownListItem;
        /** @type {?} */
        var markedjsOpt = {
            renderer: markedRender,
            highlight: (/**
             * @param {?} code
             * @return {?}
             */
            function (code) { return hljs.highlightAuto(code).value; }),
        };
        this._markedOpt = Object.assign({}, this.options.markedjsOpt, markedjsOpt);
    };
    /**
     * @return {?}
     */
    MatMarkdownEditorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.editor.$blockScrolling = Infinity;
        this.editor.getSession().setUseWrapMode(true);
        this.editor.getSession().setMode('ace/mode/markdown');
        this.editor.setValue(this.markdownValue || '', 1);
        this.editor.setOption('scrollPastEnd', this._options.scrollPastEnd || 0);
        this.editor.on('change', (/**
         * @return {?}
         */
        function () {
            _this.markdownValue = _this.editor.getValue();
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MatMarkdownEditorComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.markdownValue = value;
            if (typeof value !== 'undefined' && _this.editor) {
                _this.editor.setValue(value || '', 1);
            }
        }), 1);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MatMarkdownEditorComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MatMarkdownEditorComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MatMarkdownEditorComponent.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var result = null;
        if (this.required && this.markdownValue.length === 0) {
            result = { required: true };
        }
        if (this.maxlength > 0 && this.markdownValue.length > this.maxlength) {
            result = { maxlength: true };
        }
        return result;
    };
    /**
     * @param {?} isOpen
     * @return {?}
     */
    MatMarkdownEditorComponent.prototype.onTogglePreview = /**
     * @param {?} isOpen
     * @return {?}
     */
    function (isOpen) {
        this.showPreviewPanel = isOpen;
    };
    /**
     * @param {?} isFullScreen
     * @return {?}
     */
    MatMarkdownEditorComponent.prototype.onFullScreen = /**
     * @param {?} isFullScreen
     * @return {?}
     */
    function (isFullScreen) {
        this.isFullScreen = isFullScreen;
        this.editor.resize();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatMarkdownEditorComponent.prototype.previewPanelClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.options.enablePreviewContentClick !== true) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    };
    /**
     * @return {?}
     */
    MatMarkdownEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        return this.editor && this.editor.destroy();
    };
    MatMarkdownEditorComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'mat-markdown-editor',
                    template: "\n    <div\n      class=\"md-editor-container\"\n      [class.fullscreen]=\"isFullScreen\"\n      [class.border]=\"options.showBorder\"\n      [class.md-editor-resizable]=\"options.resizable\"\n      [style.height]=\"options.height\"\n    >\n      <div class=\"md-layout\">\n        <mat-markdown-editor-toolbar\n          [options]=\"options\"\n          [editor]=\"editor\"\n          [isFullScreen]=\"isFullScreen\"\n          (onTogglePreview)=\"onTogglePreview($event)\"\n          (onFullScreen)=\"onFullScreen($event)\"\n        >\n        </mat-markdown-editor-toolbar>\n\n        <div class=\"editor-container\">\n          <div\n            class=\"editor-panel-container\"\n            [style.display]=\"options?.mode == 'preview' ? 'none' : null\"\n          >\n            <div class=\"editor-panel\">\n              <div class=\"ace-editor\" #aceEditor></div>\n            </div>\n          </div>\n          <div\n            [style.display]=\"showPreviewPanel ? 'block' : 'none'\"\n            (click)=\"previewPanelClick($event)\"\n          >\n            <div class=\"preview-panel\" [innerHTML]=\"previewHtml\"></div>\n          </div>\n        </div>\n        <div class=\"md-footer\" *ngIf=\"maxlength > 0 && options?.mode != 'preview'\">\n          <mat-toolbar>\n            <div class=\"text-right length-view\">\n              {{ markdownValue?.length }} / {{ maxlength }}\n            </div>\n            <div class=\"resize-btn\"></div>\n          </mat-toolbar>\n        </div>\n      </div>\n    </div>\n  ",
                    styles: ["\n    .md-editor-container{position:relative;height:100%;margin-bottom:15px}.md-editor-container.border{border:1px solid rgba(0,0,0,.1)}.md-editor-container.fullscreen{margin:0;position:fixed;border:0;top:0;left:0;width:100%!important;height:100%!important;z-index:99}.md-editor-container.md-editor-resizable:not(.fullscreen){resize:both;overflow:auto;display:inline-block;width:100%}.md-editor-container.md-editor-resizable:not(.fullscreen) .md-footer{z-index:-1}.md-editor-container .md-layout{height:100%;display:flex;flex-direction:column}.md-editor-container .md-layout .editor-container{flex:1;display:flex}.md-editor-container .md-layout .editor-container>div{flex:1}.md-editor-container .md-layout .editor-container .editor-panel,.md-editor-container .md-layout .editor-container .editor-panel-container{height:100%}.md-editor-container .md-layout .editor-container .editor-panel .ace-editor{height:100%;min-height:100%}.md-editor-container .md-layout .preview-panel{height:100%;border-left:1px solid rgba(0,0,0,.1);background-color:#fff;padding:10px;overflow-y:auto}.md-editor-container .md-layout .preview-panel .material-icons{vertical-align:top;margin-bottom:.2em;margin-left:-.8em}.md-editor-container .md-layout .md-footer .length-view{flex:1;padding:4px 2px 0;font-size:12px;line-height:16px}.md-editor-container .md-layout .md-footer .resize-btn{width:17px}\n  "],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return MatMarkdownEditorComponent; })),
                            multi: true,
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return MatMarkdownEditorComponent; })),
                            multi: true,
                        },
                    ],
                },] }
    ];
    /** @nocollapse */
    MatMarkdownEditorComponent.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: Attribute, args: ['required',] }] },
        { type: Number, decorators: [{ type: Attribute, args: ['maxlength',] }] },
        { type: DomSanitizer }
    ]; };
    MatMarkdownEditorComponent.propDecorators = {
        aceEditorContainer: [{ type: ViewChild, args: ['aceEditor', { static: true },] }],
        options: [{ type: Input }]
    };
    return MatMarkdownEditorComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: module/service/lib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibService = /** @class */ (function () {
    function LibService() {
    }
    /**
     * @param {?=} name
     * @return {?}
     */
    LibService.prototype.sayHello = /**
     * @param {?=} name
     * @return {?}
     */
    function (name) {
        return "Hello " + (name || 'Stanger') + "!";
    };
    LibService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LibService.ctorParameters = function () { return []; };
    return LibService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: module/material.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
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
                },] }
    ];
    return MaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: module/editor/toolbar/toolbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EditorToolbarComponent = /** @class */ (function () {
    function EditorToolbarComponent(_renderer) {
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
    EditorToolbarComponent.prototype.insertContent = /**
     * @param {?} type
     * @param {?=} customContent
     * @return {?}
     */
    function (type, customContent) {
        if (!this.editor) {
            return;
        }
        /** @type {?} */
        var selectedText = this.editor.getSelectedText();
        /** @type {?} */
        var startSize = 2;
        /** @type {?} */
        var initText = '';
        /** @type {?} */
        var isSelected = !!selectedText;
        /** @type {?} */
        var range = this.editor.selection.getRange();
        switch (type) {
            case 'Bold':
                initText = 'Bold Text';
                selectedText = "**" + (selectedText || initText) + "**";
                break;
            case 'Italic':
                initText = 'Italic Text';
                selectedText = "*" + (selectedText || initText) + "*";
                startSize = 1;
                break;
            case 'Heading':
                initText = 'Heading';
                selectedText = "# " + (selectedText || initText);
                break;
            case 'Reference':
                initText = 'Reference';
                selectedText = "> " + (selectedText || initText);
                break;
            case 'Link':
                selectedText = "[" + selectedText + "](http://)";
                startSize = 1;
                break;
            case 'Image':
                selectedText = "![](http://)";
                break;
            case 'Ul':
                selectedText = "- " + (selectedText || initText);
                break;
            case 'Ol':
                selectedText = "1. " + (selectedText || initText);
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
    };
    /**
     * @return {?}
     */
    EditorToolbarComponent.prototype.togglePreview = /**
     * @return {?}
     */
    function () {
        this.previewIsOpen = !this.previewIsOpen;
        this.onTogglePreview.emit(this.previewIsOpen);
        this.editorResize();
    };
    /**
     * @return {?}
     */
    EditorToolbarComponent.prototype.fullScreen = /**
     * @return {?}
     */
    function () {
        this.isFullScreen = !this.isFullScreen;
        this._renderer.setStyle(document.body, 'overflowY', this.isFullScreen ? 'hidden' : 'auto');
        this.onFullScreen.emit(this.isFullScreen);
        this.editorResize();
    };
    /**
     * @param {?=} timeOut
     * @return {?}
     */
    EditorToolbarComponent.prototype.editorResize = /**
     * @param {?=} timeOut
     * @return {?}
     */
    function (timeOut) {
        var _this = this;
        if (timeOut === void 0) { timeOut = 100; }
        if (!this.editor) {
            return;
        }
        if (this._editorResizeTimer) {
            clearTimeout(this._editorResizeTimer);
        }
        this._editorResizeTimer = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.editor.resize();
            _this.editor.focus();
        }), timeOut);
    };
    EditorToolbarComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'mat-markdown-editor-toolbar',
                    template: "\n    <mat-toolbar\n      [color]=\"options.toolbarColor\"\n      *ngIf=\"!options.hideToolbar && options?.mode != 'preview'\"\n      fxLayout=\"row\"\n      fxLayoutAlign=\"start center\"\n      fxLayoutGap=\"5px\"\n    >\n      <div class=\"btn-group\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Bold\"\n          (click)=\"insertContent('Bold')\"\n          *ngIf=\"!options?.hideIcons?.Bold\"\n        >\n          <mat-icon aria-label=\"bold\">format_bold</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Italic\"\n          (click)=\"insertContent('Italic')\"\n          *ngIf=\"!options?.hideIcons?.Italic\"\n        >\n          <mat-icon aria-label=\"italic\">format_italic</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Heading\"\n          (click)=\"insertContent('Heading')\"\n          *ngIf=\"!options?.hideIcons?.Heading\"\n        >\n          <mat-icon aria-label=\"italic\">format_size</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Refrence\"\n          (click)=\"insertContent('Reference')\"\n          *ngIf=\"!options?.hideIcons?.Reference\"\n        >\n          <mat-icon aria-label=\"quote\">format_quote</mat-icon>\n        </button>\n        <mat-divider [vertical]=\"true\"></mat-divider>\n      </div>\n\n      <div class=\"btn-group\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Link\"\n          (click)=\"insertContent('Link')\"\n          *ngIf=\"!options?.hideIcons?.Link\"\n        >\n          <mat-icon aria-label=\"link\">link</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Image\"\n          (click)=\"insertContent('Image')\"\n          *ngIf=\"!options?.hideIcons?.Image\"\n        >\n          <mat-icon aria-label=\"Image\">photo</mat-icon>\n        </button>\n        <mat-divider [vertical]=\"true\"></mat-divider>\n      </div>\n\n      <div class=\"btn-group\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Unordered List\"\n          (click)=\"insertContent('Ul')\"\n          *ngIf=\"!options?.hideIcons?.Ul\"\n        >\n          <mat-icon aria-label=\"Unordered List\">\n            format_list_bulleted\n          </mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Ordered List\"\n          (click)=\"insertContent('Ol')\"\n          *ngIf=\"!options?.hideIcons?.Ol\"\n        >\n          <mat-icon aria-label=\"Unordered List\">\n            format_list_numbered\n          </mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Code Block\"\n          (click)=\"insertContent('Code')\"\n          *ngIf=\"!options?.hideIcons?.Code\"\n        >\n          <mat-icon aria-label=\"code\">code</mat-icon>\n        </button>\n        <mat-divider [vertical]=\"true\"></mat-divider>\n      </div>\n\n      <div class=\"btn-group\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          [matTooltip]=\"previewIsOpen ? 'Hide Preview' : 'Show Preview'\"\n          (click)=\"togglePreview()\"\n          *ngIf=\"!options?.hideIcons?.TogglePreview\"\n        >\n          <mat-icon aria-label=\"Unordered List\">{{\n            previewIsOpen ? 'visibility_off' : 'visibility'\n          }}</mat-icon>\n        </button>\n      </div>\n\n      <span fxFlex></span>\n\n      <div class=\"btn-group pull-right hide-split\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Full Screen Mode\"\n          [class.active]=\"isFullScreen\"\n          (click)=\"fullScreen()\"\n          *ngIf=\"!options?.hideIcons?.FullScreen && !isFullScreen\"\n        >\n          <mat-icon aria-label=\"fullscreen\">fullscreen</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Exit Full Screen Mode\"\n          [class.active]=\"isFullScreen\"\n          (click)=\"fullScreen()\"\n          *ngIf=\"!options?.hideIcons?.FullScreen && isFullScreen\"\n        >\n          <mat-icon aria-label=\"fullscreen\">fullscreen_exit</mat-icon>\n        </button>\n      </div>\n    </mat-toolbar>\n  ",
                    styles: ["\n\n  "],
                },] }
    ];
    /** @nocollapse */
    EditorToolbarComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    EditorToolbarComponent.propDecorators = {
        options: [{ type: Input }],
        isFullScreen: [{ type: Input }],
        editor: [{ type: Input }],
        onTogglePreview: [{ type: Output }],
        onFullScreen: [{ type: Output }]
    };
    return EditorToolbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: module/lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatMarkdownEditorModule = /** @class */ (function () {
    function MatMarkdownEditorModule() {
    }
    /**
     * @return {?}
     */
    MatMarkdownEditorModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: MatMarkdownEditorModule,
            providers: [LibService],
        };
    };
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
                },] }
    ];
    return MatMarkdownEditorModule;
}());

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
//# sourceMappingURL=mat-markdown-editor.es5.js.map
