(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/platform-browser'), require('@angular/material/autocomplete'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/core'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slide-toggle'), require('@angular/material/slider'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/stepper'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/common'), require('@angular/platform-browser/animations'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@angular/platform-browser', '@angular/material/autocomplete', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/core', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slide-toggle', '@angular/material/slider', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/stepper', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/common', '@angular/platform-browser/animations', '@angular/flex-layout'], factory) :
    (factory((global.matMarkdownEditor = {}),global.ng.core,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,global.ng.common,null,null));
}(this, (function (exports,core,forms,platformBrowser,autocomplete,button,buttonToggle,card,checkbox,chips,core$1,datepicker,dialog,expansion,gridList,icon,input,list,menu,paginator,progressBar,progressSpinner,radio,select,sidenav,slideToggle,slider,snackBar,sort,stepper,table,tabs,toolbar,tooltip,common,animations,flexLayout) { 'use strict';

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
            { type: core.Component, args: [{
                        // tslint:disable-next-line: component-selector
                        selector: 'mat-markdown-editor',
                        template: "\n    <div\n      class=\"md-editor-container\"\n      [class.fullscreen]=\"isFullScreen\"\n      [class.border]=\"options.showBorder\"\n      [class.md-editor-resizable]=\"options.resizable\"\n      [style.height]=\"options.height\"\n    >\n      <div class=\"md-layout\">\n        <mat-markdown-editor-toolbar\n          [options]=\"options\"\n          [editor]=\"editor\"\n          [isFullScreen]=\"isFullScreen\"\n          (onTogglePreview)=\"onTogglePreview($event)\"\n          (onFullScreen)=\"onFullScreen($event)\"\n        >\n        </mat-markdown-editor-toolbar>\n\n        <div class=\"editor-container\">\n          <div\n            class=\"editor-panel-container\"\n            [style.display]=\"options?.mode == 'preview' ? 'none' : null\"\n          >\n            <div class=\"editor-panel\">\n              <div class=\"ace-editor\" #aceEditor></div>\n            </div>\n          </div>\n          <div\n            [style.display]=\"showPreviewPanel ? 'block' : 'none'\"\n            (click)=\"previewPanelClick($event)\"\n          >\n            <div class=\"preview-panel\" [innerHTML]=\"previewHtml\"></div>\n          </div>\n        </div>\n        <div class=\"md-footer\" *ngIf=\"maxlength > 0 && options?.mode != 'preview'\">\n          <mat-toolbar>\n            <div class=\"text-right length-view\">\n              {{ markdownValue?.length }} / {{ maxlength }}\n            </div>\n            <div class=\"resize-btn\"></div>\n          </mat-toolbar>\n        </div>\n      </div>\n    </div>\n  ",
                        styles: ["\n    .md-editor-container{position:relative;height:100%;margin-bottom:15px}.md-editor-container.border{border:1px solid rgba(0,0,0,.1)}.md-editor-container.fullscreen{margin:0;position:fixed;border:0;top:0;left:0;width:100%!important;height:100%!important;z-index:99}.md-editor-container.md-editor-resizable:not(.fullscreen){resize:both;overflow:auto;display:inline-block;width:100%}.md-editor-container.md-editor-resizable:not(.fullscreen) .md-footer{z-index:-1}.md-editor-container .md-layout{height:100%;display:flex;flex-direction:column}.md-editor-container .md-layout .editor-container{flex:1;display:flex}.md-editor-container .md-layout .editor-container>div{flex:1}.md-editor-container .md-layout .editor-container .editor-panel,.md-editor-container .md-layout .editor-container .editor-panel-container{height:100%}.md-editor-container .md-layout .editor-container .editor-panel .ace-editor{height:100%;min-height:100%}.md-editor-container .md-layout .preview-panel{height:100%;border-left:1px solid rgba(0,0,0,.1);background-color:#fff;padding:10px;overflow-y:auto}.md-editor-container .md-layout .preview-panel .material-icons{vertical-align:top;margin-bottom:.2em;margin-left:-.8em}.md-editor-container .md-layout .md-footer .length-view{flex:1;padding:4px 2px 0;font-size:12px;line-height:16px}.md-editor-container .md-layout .md-footer .resize-btn{width:17px}\n  "],
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return MatMarkdownEditorComponent; })),
                                multi: true,
                            },
                            {
                                provide: forms.NG_VALIDATORS,
                                useExisting: core.forwardRef((/**
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
            { type: Boolean, decorators: [{ type: core.Attribute, args: ['required',] }] },
            { type: Number, decorators: [{ type: core.Attribute, args: ['maxlength',] }] },
            { type: platformBrowser.DomSanitizer }
        ]; };
        MatMarkdownEditorComponent.propDecorators = {
            aceEditorContainer: [{ type: core.ViewChild, args: ['aceEditor', { static: true },] }],
            options: [{ type: core.Input }]
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
            { type: core.Injectable }
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
            { type: core.NgModule, args: [{
                        imports: [
                            autocomplete.MatAutocompleteModule,
                            button.MatButtonModule,
                            buttonToggle.MatButtonToggleModule,
                            card.MatCardModule,
                            checkbox.MatCheckboxModule,
                            chips.MatChipsModule,
                            stepper.MatStepperModule,
                            datepicker.MatDatepickerModule,
                            dialog.MatDialogModule,
                            expansion.MatExpansionModule,
                            gridList.MatGridListModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            list.MatListModule,
                            menu.MatMenuModule,
                            core$1.MatNativeDateModule,
                            paginator.MatPaginatorModule,
                            progressBar.MatProgressBarModule,
                            progressSpinner.MatProgressSpinnerModule,
                            radio.MatRadioModule,
                            core$1.MatRippleModule,
                            select.MatSelectModule,
                            sidenav.MatSidenavModule,
                            slider.MatSliderModule,
                            slideToggle.MatSlideToggleModule,
                            snackBar.MatSnackBarModule,
                            sort.MatSortModule,
                            table.MatTableModule,
                            tabs.MatTabsModule,
                            toolbar.MatToolbarModule,
                            tooltip.MatTooltipModule,
                        ],
                        exports: [
                            autocomplete.MatAutocompleteModule,
                            button.MatButtonModule,
                            buttonToggle.MatButtonToggleModule,
                            card.MatCardModule,
                            checkbox.MatCheckboxModule,
                            chips.MatChipsModule,
                            stepper.MatStepperModule,
                            datepicker.MatDatepickerModule,
                            dialog.MatDialogModule,
                            expansion.MatExpansionModule,
                            gridList.MatGridListModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            list.MatListModule,
                            menu.MatMenuModule,
                            core$1.MatNativeDateModule,
                            paginator.MatPaginatorModule,
                            progressBar.MatProgressBarModule,
                            progressSpinner.MatProgressSpinnerModule,
                            radio.MatRadioModule,
                            core$1.MatRippleModule,
                            select.MatSelectModule,
                            sidenav.MatSidenavModule,
                            slider.MatSliderModule,
                            slideToggle.MatSlideToggleModule,
                            snackBar.MatSnackBarModule,
                            sort.MatSortModule,
                            table.MatTableModule,
                            tabs.MatTabsModule,
                            toolbar.MatToolbarModule,
                            tooltip.MatTooltipModule,
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
            this.onTogglePreview = new core.EventEmitter();
            this.onFullScreen = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        // tslint:disable-next-line: component-selector
                        selector: 'mat-markdown-editor-toolbar',
                        template: "\n    <mat-toolbar\n      [color]=\"options.toolbarColor\"\n      *ngIf=\"!options.hideToolbar && options?.mode != 'preview'\"\n      fxLayout=\"row\"\n      fxLayoutAlign=\"start center\"\n      fxLayoutGap=\"5px\"\n    >\n      <div class=\"btn-group\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Bold\"\n          (click)=\"insertContent('Bold')\"\n          *ngIf=\"!options?.hideIcons?.Bold\"\n        >\n          <mat-icon aria-label=\"bold\">format_bold</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Italic\"\n          (click)=\"insertContent('Italic')\"\n          *ngIf=\"!options?.hideIcons?.Italic\"\n        >\n          <mat-icon aria-label=\"italic\">format_italic</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Heading\"\n          (click)=\"insertContent('Heading')\"\n          *ngIf=\"!options?.hideIcons?.Heading\"\n        >\n          <mat-icon aria-label=\"italic\">format_size</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Refrence\"\n          (click)=\"insertContent('Reference')\"\n          *ngIf=\"!options?.hideIcons?.Reference\"\n        >\n          <mat-icon aria-label=\"quote\">format_quote</mat-icon>\n        </button>\n        <mat-divider [vertical]=\"true\"></mat-divider>\n      </div>\n\n      <div class=\"btn-group\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Link\"\n          (click)=\"insertContent('Link')\"\n          *ngIf=\"!options?.hideIcons?.Link\"\n        >\n          <mat-icon aria-label=\"link\">link</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Image\"\n          (click)=\"insertContent('Image')\"\n          *ngIf=\"!options?.hideIcons?.Image\"\n        >\n          <mat-icon aria-label=\"Image\">photo</mat-icon>\n        </button>\n        <mat-divider [vertical]=\"true\"></mat-divider>\n      </div>\n\n      <div class=\"btn-group\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Unordered List\"\n          (click)=\"insertContent('Ul')\"\n          *ngIf=\"!options?.hideIcons?.Ul\"\n        >\n          <mat-icon aria-label=\"Unordered List\">\n            format_list_bulleted\n          </mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Ordered List\"\n          (click)=\"insertContent('Ol')\"\n          *ngIf=\"!options?.hideIcons?.Ol\"\n        >\n          <mat-icon aria-label=\"Unordered List\">\n            format_list_numbered\n          </mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Code Block\"\n          (click)=\"insertContent('Code')\"\n          *ngIf=\"!options?.hideIcons?.Code\"\n        >\n          <mat-icon aria-label=\"code\">code</mat-icon>\n        </button>\n        <mat-divider [vertical]=\"true\"></mat-divider>\n      </div>\n\n      <div class=\"btn-group\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          [matTooltip]=\"previewIsOpen ? 'Hide Preview' : 'Show Preview'\"\n          (click)=\"togglePreview()\"\n          *ngIf=\"!options?.hideIcons?.TogglePreview\"\n        >\n          <mat-icon aria-label=\"Unordered List\">{{\n            previewIsOpen ? 'visibility_off' : 'visibility'\n          }}</mat-icon>\n        </button>\n      </div>\n\n      <span fxFlex></span>\n\n      <div class=\"btn-group pull-right hide-split\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Full Screen Mode\"\n          [class.active]=\"isFullScreen\"\n          (click)=\"fullScreen()\"\n          *ngIf=\"!options?.hideIcons?.FullScreen && !isFullScreen\"\n        >\n          <mat-icon aria-label=\"fullscreen\">fullscreen</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Exit Full Screen Mode\"\n          [class.active]=\"isFullScreen\"\n          (click)=\"fullScreen()\"\n          *ngIf=\"!options?.hideIcons?.FullScreen && isFullScreen\"\n        >\n          <mat-icon aria-label=\"fullscreen\">fullscreen_exit</mat-icon>\n        </button>\n      </div>\n    </mat-toolbar>\n  ",
                        styles: ["\n\n  "],
                    },] }
        ];
        /** @nocollapse */
        EditorToolbarComponent.ctorParameters = function () { return [
            { type: core.Renderer2 }
        ]; };
        EditorToolbarComponent.propDecorators = {
            options: [{ type: core.Input }],
            isFullScreen: [{ type: core.Input }],
            editor: [{ type: core.Input }],
            onTogglePreview: [{ type: core.Output }],
            onFullScreen: [{ type: core.Output }]
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            MaterialModule,
                            forms.ReactiveFormsModule,
                            animations.BrowserAnimationsModule,
                            flexLayout.FlexLayoutModule,
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

    exports.MatMarkdownEditorComponent = MatMarkdownEditorComponent;
    exports.LibService = LibService;
    exports.MatMarkdownEditorModule = MatMarkdownEditorModule;
    exports.ɵb = EditorToolbarComponent;
    exports.ɵa = MaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mat-markdown-editor.umd.js.map
