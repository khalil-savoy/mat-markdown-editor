(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/toolbar'), require('@angular/flex-layout/flex'), require('@angular/material/divider'), require('@angular/material/button'), require('@angular/material/tooltip'), require('@angular/material/icon'), require('@angular/forms'), require('@angular/platform-browser'), require('@angular/material/autocomplete'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/core'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slide-toggle'), require('@angular/material/slider'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/stepper'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/platform-browser/animations'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/material/toolbar', '@angular/flex-layout/flex', '@angular/material/divider', '@angular/material/button', '@angular/material/tooltip', '@angular/material/icon', '@angular/forms', '@angular/platform-browser', '@angular/material/autocomplete', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/core', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slide-toggle', '@angular/material/slider', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/stepper', '@angular/material/table', '@angular/material/tabs', '@angular/platform-browser/animations', '@angular/flex-layout'], factory) :
    (factory((global.matMarkdownEditor = {}),global.ng.core,global.ng.common,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null));
}(this, (function (exports,i0,i3,i4,i3$1,i4$1,i5,i6,i7,forms,i1,autocomplete,buttonToggle,card,checkbox,chips,core,datepicker,dialog,expansion,gridList,input,list,menu,paginator,progressBar,progressSpinner,radio,select,sidenav,slideToggle,slider,snackBar,sort,stepper,table,tabs,animations,flexLayout) { 'use strict';

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
     * Generated from: module/editor/toolbar/toolbar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    function EditorToolbarComponent_mat_toolbar_0_button_2_Template(rf, ctx) { if (rf & 1) {
        var _r14 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 18);
        i0.ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); var ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.insertContent("Bold"); });
        i0.ɵɵelementStart(1, "mat-icon", 19);
        i0.ɵɵtext(2, "format_bold");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function EditorToolbarComponent_mat_toolbar_0_button_3_Template(rf, ctx) { if (rf & 1) {
        var _r16 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 20);
        i0.ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r16); var ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.insertContent("Italic"); });
        i0.ɵɵelementStart(1, "mat-icon", 21);
        i0.ɵɵtext(2, "format_italic");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function EditorToolbarComponent_mat_toolbar_0_button_4_Template(rf, ctx) { if (rf & 1) {
        var _r18 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 22);
        i0.ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r18); var ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.insertContent("Heading"); });
        i0.ɵɵelementStart(1, "mat-icon", 21);
        i0.ɵɵtext(2, "format_size");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function EditorToolbarComponent_mat_toolbar_0_button_5_Template(rf, ctx) { if (rf & 1) {
        var _r20 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 23);
        i0.ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r20); var ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.insertContent("Reference"); });
        i0.ɵɵelementStart(1, "mat-icon", 24);
        i0.ɵɵtext(2, "format_quote");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function EditorToolbarComponent_mat_toolbar_0_button_8_Template(rf, ctx) { if (rf & 1) {
        var _r22 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 25);
        i0.ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); var ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.insertContent("Link"); });
        i0.ɵɵelementStart(1, "mat-icon", 26);
        i0.ɵɵtext(2, "link");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function EditorToolbarComponent_mat_toolbar_0_button_9_Template(rf, ctx) { if (rf & 1) {
        var _r24 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 27);
        i0.ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); var ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.insertContent("Image"); });
        i0.ɵɵelementStart(1, "mat-icon", 28);
        i0.ɵɵtext(2, "photo");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function EditorToolbarComponent_mat_toolbar_0_button_12_Template(rf, ctx) { if (rf & 1) {
        var _r26 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 29);
        i0.ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); var ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.insertContent("Ul"); });
        i0.ɵɵelementStart(1, "mat-icon", 30);
        i0.ɵɵtext(2, " format_list_bulleted ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function EditorToolbarComponent_mat_toolbar_0_button_13_Template(rf, ctx) { if (rf & 1) {
        var _r28 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 31);
        i0.ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r28); var ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.insertContent("Ol"); });
        i0.ɵɵelementStart(1, "mat-icon", 30);
        i0.ɵɵtext(2, " format_list_numbered ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function EditorToolbarComponent_mat_toolbar_0_button_14_Template(rf, ctx) { if (rf & 1) {
        var _r30 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 32);
        i0.ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r30); var ctx_r29 = i0.ɵɵnextContext(2); return ctx_r29.insertContent("Code"); });
        i0.ɵɵelementStart(1, "mat-icon", 33);
        i0.ɵɵtext(2, "code");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function EditorToolbarComponent_mat_toolbar_0_button_17_Template(rf, ctx) { if (rf & 1) {
        var _r32 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 34);
        i0.ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r32); var ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.togglePreview(); });
        i0.ɵɵelementStart(1, "mat-icon", 30);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r10 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("matTooltip", ctx_r10.previewIsOpen ? "Hide Preview" : "Show Preview");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r10.previewIsOpen ? "visibility_off" : "visibility");
    } }
    function EditorToolbarComponent_mat_toolbar_0_button_20_Template(rf, ctx) { if (rf & 1) {
        var _r34 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 35);
        i0.ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_20_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r34); var ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.fullScreen(); });
        i0.ɵɵelementStart(1, "mat-icon", 36);
        i0.ɵɵtext(2, "fullscreen");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r11 = i0.ɵɵnextContext(2);
        i0.ɵɵclassProp("active", ctx_r11.isFullScreen);
    } }
    function EditorToolbarComponent_mat_toolbar_0_button_21_Template(rf, ctx) { if (rf & 1) {
        var _r36 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 37);
        i0.ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_21_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r36); var ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.fullScreen(); });
        i0.ɵɵelementStart(1, "mat-icon", 36);
        i0.ɵɵtext(2, "fullscreen_exit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r12 = i0.ɵɵnextContext(2);
        i0.ɵɵclassProp("active", ctx_r12.isFullScreen);
    } }
    function EditorToolbarComponent_mat_toolbar_0_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-toolbar", 1);
        i0.ɵɵelementStart(1, "div", 2);
        i0.ɵɵtemplate(2, EditorToolbarComponent_mat_toolbar_0_button_2_Template, 3, 0, "button", 3);
        i0.ɵɵtemplate(3, EditorToolbarComponent_mat_toolbar_0_button_3_Template, 3, 0, "button", 4);
        i0.ɵɵtemplate(4, EditorToolbarComponent_mat_toolbar_0_button_4_Template, 3, 0, "button", 5);
        i0.ɵɵtemplate(5, EditorToolbarComponent_mat_toolbar_0_button_5_Template, 3, 0, "button", 6);
        i0.ɵɵelement(6, "mat-divider", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 2);
        i0.ɵɵtemplate(8, EditorToolbarComponent_mat_toolbar_0_button_8_Template, 3, 0, "button", 8);
        i0.ɵɵtemplate(9, EditorToolbarComponent_mat_toolbar_0_button_9_Template, 3, 0, "button", 9);
        i0.ɵɵelement(10, "mat-divider", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 2);
        i0.ɵɵtemplate(12, EditorToolbarComponent_mat_toolbar_0_button_12_Template, 3, 0, "button", 10);
        i0.ɵɵtemplate(13, EditorToolbarComponent_mat_toolbar_0_button_13_Template, 3, 0, "button", 11);
        i0.ɵɵtemplate(14, EditorToolbarComponent_mat_toolbar_0_button_14_Template, 3, 0, "button", 12);
        i0.ɵɵelement(15, "mat-divider", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 2);
        i0.ɵɵtemplate(17, EditorToolbarComponent_mat_toolbar_0_button_17_Template, 3, 2, "button", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "span", 14);
        i0.ɵɵelementStart(19, "div", 15);
        i0.ɵɵtemplate(20, EditorToolbarComponent_mat_toolbar_0_button_20_Template, 3, 2, "button", 16);
        i0.ɵɵtemplate(21, EditorToolbarComponent_mat_toolbar_0_button_21_Template, 3, 2, "button", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("color", ctx_r0.options.toolbarColor);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Bold));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Italic));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Heading));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Reference));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("vertical", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Link));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Image));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("vertical", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Ul));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Ol));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Code));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("vertical", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.TogglePreview));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.FullScreen) && !ctx_r0.isFullScreen);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.FullScreen) && ctx_r0.isFullScreen);
    } }
    var EditorToolbarComponent = /** @class */ (function () {
        function EditorToolbarComponent(_renderer) {
            this._renderer = _renderer;
            this.onTogglePreview = new i0.EventEmitter();
            this.onFullScreen = new i0.EventEmitter();
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
        /** @nocollapse */ EditorToolbarComponent.ɵfac = function EditorToolbarComponent_Factory(t) { return new (t || EditorToolbarComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
        /** @nocollapse */ EditorToolbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EditorToolbarComponent, selectors: [["mat-markdown-editor-toolbar"]], inputs: { options: "options", isFullScreen: "isFullScreen", editor: "editor" }, outputs: { onTogglePreview: "onTogglePreview", onFullScreen: "onFullScreen" }, decls: 1, vars: 1, consts: [["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "5px", 3, "color", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "5px", 3, "color"], [1, "btn-group"], ["mat-icon-button", "", "type", "button", "matTooltip", "Bold", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Italic", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Heading", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Refrence", 3, "click", 4, "ngIf"], [3, "vertical"], ["mat-icon-button", "", "type", "button", "matTooltip", "Link", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Image", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Unordered List", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Ordered List", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Code Block", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 3, "matTooltip", "click", 4, "ngIf"], ["fxFlex", ""], [1, "btn-group", "pull-right", "hide-split"], ["mat-icon-button", "", "type", "button", "matTooltip", "Full Screen Mode", 3, "active", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Exit Full Screen Mode", 3, "active", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Bold", 3, "click"], ["aria-label", "bold"], ["mat-icon-button", "", "type", "button", "matTooltip", "Italic", 3, "click"], ["aria-label", "italic"], ["mat-icon-button", "", "type", "button", "matTooltip", "Heading", 3, "click"], ["mat-icon-button", "", "type", "button", "matTooltip", "Refrence", 3, "click"], ["aria-label", "quote"], ["mat-icon-button", "", "type", "button", "matTooltip", "Link", 3, "click"], ["aria-label", "link"], ["mat-icon-button", "", "type", "button", "matTooltip", "Image", 3, "click"], ["aria-label", "Image"], ["mat-icon-button", "", "type", "button", "matTooltip", "Unordered List", 3, "click"], ["aria-label", "Unordered List"], ["mat-icon-button", "", "type", "button", "matTooltip", "Ordered List", 3, "click"], ["mat-icon-button", "", "type", "button", "matTooltip", "Code Block", 3, "click"], ["aria-label", "code"], ["mat-icon-button", "", "type", "button", 3, "matTooltip", "click"], ["mat-icon-button", "", "type", "button", "matTooltip", "Full Screen Mode", 3, "click"], ["aria-label", "fullscreen"], ["mat-icon-button", "", "type", "button", "matTooltip", "Exit Full Screen Mode", 3, "click"]], template: function EditorToolbarComponent_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵtemplate(0, EditorToolbarComponent_mat_toolbar_0_Template, 22, 16, "mat-toolbar", 0);
            } if (rf & 2) {
                i0.ɵɵproperty("ngIf", !ctx.options.hideToolbar && (ctx.options == null ? null : ctx.options.mode) != "preview");
            } }, directives: [i3.NgIf, i4.MatToolbar, i3$1.DefaultLayoutDirective, i3$1.DefaultLayoutAlignDirective, i3$1.DefaultLayoutGapDirective, i4$1.MatDivider, i3$1.DefaultFlexDirective, i5.MatButton, i6.MatTooltip, i7.MatIcon], styles: [""] });
        return EditorToolbarComponent;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EditorToolbarComponent, [{
            type: i0.Component,
            args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'mat-markdown-editor-toolbar',
                    template: "\n    <mat-toolbar\n      [color]=\"options.toolbarColor\"\n      *ngIf=\"!options.hideToolbar && options?.mode != 'preview'\"\n      fxLayout=\"row\"\n      fxLayoutAlign=\"start center\"\n      fxLayoutGap=\"5px\"\n    >\n      <div class=\"btn-group\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Bold\"\n          (click)=\"insertContent('Bold')\"\n          *ngIf=\"!options?.hideIcons?.Bold\"\n        >\n          <mat-icon aria-label=\"bold\">format_bold</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Italic\"\n          (click)=\"insertContent('Italic')\"\n          *ngIf=\"!options?.hideIcons?.Italic\"\n        >\n          <mat-icon aria-label=\"italic\">format_italic</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Heading\"\n          (click)=\"insertContent('Heading')\"\n          *ngIf=\"!options?.hideIcons?.Heading\"\n        >\n          <mat-icon aria-label=\"italic\">format_size</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Refrence\"\n          (click)=\"insertContent('Reference')\"\n          *ngIf=\"!options?.hideIcons?.Reference\"\n        >\n          <mat-icon aria-label=\"quote\">format_quote</mat-icon>\n        </button>\n        <mat-divider [vertical]=\"true\"></mat-divider>\n      </div>\n\n      <div class=\"btn-group\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Link\"\n          (click)=\"insertContent('Link')\"\n          *ngIf=\"!options?.hideIcons?.Link\"\n        >\n          <mat-icon aria-label=\"link\">link</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Image\"\n          (click)=\"insertContent('Image')\"\n          *ngIf=\"!options?.hideIcons?.Image\"\n        >\n          <mat-icon aria-label=\"Image\">photo</mat-icon>\n        </button>\n        <mat-divider [vertical]=\"true\"></mat-divider>\n      </div>\n\n      <div class=\"btn-group\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Unordered List\"\n          (click)=\"insertContent('Ul')\"\n          *ngIf=\"!options?.hideIcons?.Ul\"\n        >\n          <mat-icon aria-label=\"Unordered List\">\n            format_list_bulleted\n          </mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Ordered List\"\n          (click)=\"insertContent('Ol')\"\n          *ngIf=\"!options?.hideIcons?.Ol\"\n        >\n          <mat-icon aria-label=\"Unordered List\">\n            format_list_numbered\n          </mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Code Block\"\n          (click)=\"insertContent('Code')\"\n          *ngIf=\"!options?.hideIcons?.Code\"\n        >\n          <mat-icon aria-label=\"code\">code</mat-icon>\n        </button>\n        <mat-divider [vertical]=\"true\"></mat-divider>\n      </div>\n\n      <div class=\"btn-group\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          [matTooltip]=\"previewIsOpen ? 'Hide Preview' : 'Show Preview'\"\n          (click)=\"togglePreview()\"\n          *ngIf=\"!options?.hideIcons?.TogglePreview\"\n        >\n          <mat-icon aria-label=\"Unordered List\">{{\n            previewIsOpen ? 'visibility_off' : 'visibility'\n          }}</mat-icon>\n        </button>\n      </div>\n\n      <span fxFlex></span>\n\n      <div class=\"btn-group pull-right hide-split\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Full Screen Mode\"\n          [class.active]=\"isFullScreen\"\n          (click)=\"fullScreen()\"\n          *ngIf=\"!options?.hideIcons?.FullScreen && !isFullScreen\"\n        >\n          <mat-icon aria-label=\"fullscreen\">fullscreen</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Exit Full Screen Mode\"\n          [class.active]=\"isFullScreen\"\n          (click)=\"fullScreen()\"\n          *ngIf=\"!options?.hideIcons?.FullScreen && isFullScreen\"\n        >\n          <mat-icon aria-label=\"fullscreen\">fullscreen_exit</mat-icon>\n        </button>\n      </div>\n    </mat-toolbar>\n  ",
                    styles: ["\n\n  "],
                }]
        }], function () { return [{ type: i0.Renderer2 }]; }, { options: [{
                type: i0.Input
            }], isFullScreen: [{
                type: i0.Input
            }], editor: [{
                type: i0.Input
            }], onTogglePreview: [{
                type: i0.Output
            }], onFullScreen: [{
                type: i0.Output
            }] }); })();

    /**
     * @fileoverview added by tsickle
     * Generated from: module/editor/editor.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var _c0 = ["aceEditor"];
    function MatMarkdownEditorComponent_div_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 11);
        i0.ɵɵelementStart(1, "mat-toolbar");
        i0.ɵɵelementStart(2, "div", 12);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "div", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2(" ", ctx_r1.markdownValue == null ? null : ctx_r1.markdownValue.length, " / ", ctx_r1.maxlength, " ");
    } }
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
            enumerable: true,
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
        /** @nocollapse */ MatMarkdownEditorComponent.ɵfac = function MatMarkdownEditorComponent_Factory(t) { return new (t || MatMarkdownEditorComponent)(i0.ɵɵinjectAttribute('required'), i0.ɵɵinjectAttribute('maxlength'), i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
        /** @nocollapse */ MatMarkdownEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MatMarkdownEditorComponent, selectors: [["mat-markdown-editor"]], viewQuery: function MatMarkdownEditorComponent_Query(rf, ctx) { if (rf & 1) {
                i0.ɵɵstaticViewQuery(_c0, true);
            } if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.aceEditorContainer = _t.first);
            } }, inputs: { options: "options" }, features: [i0.ɵɵProvidersFeature([
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: i0.forwardRef((/**
                         * @return {?}
                         */
                        function () { return MatMarkdownEditorComponent; })),
                        multi: true,
                    },
                    {
                        provide: forms.NG_VALIDATORS,
                        useExisting: i0.forwardRef((/**
                         * @return {?}
                         */
                        function () { return MatMarkdownEditorComponent; })),
                        multi: true,
                    },
                ])], decls: 11, vars: 17, consts: [[1, "md-editor-container"], [1, "md-layout"], [3, "options", "editor", "isFullScreen", "onTogglePreview", "onFullScreen"], [1, "editor-container"], [1, "editor-panel-container"], [1, "editor-panel"], [1, "ace-editor"], ["aceEditor", ""], [3, "click"], [1, "preview-panel", 3, "innerHTML"], ["class", "md-footer", 4, "ngIf"], [1, "md-footer"], [1, "text-right", "length-view"], [1, "resize-btn"]], template: function MatMarkdownEditorComponent_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "mat-markdown-editor-toolbar", 2);
                i0.ɵɵlistener("onTogglePreview", function MatMarkdownEditorComponent_Template_mat_markdown_editor_toolbar_onTogglePreview_2_listener($event) { return ctx.onTogglePreview($event); })("onFullScreen", function MatMarkdownEditorComponent_Template_mat_markdown_editor_toolbar_onFullScreen_2_listener($event) { return ctx.onFullScreen($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵelementStart(4, "div", 4);
                i0.ɵɵelementStart(5, "div", 5);
                i0.ɵɵelement(6, "div", 6, 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "div", 8);
                i0.ɵɵlistener("click", function MatMarkdownEditorComponent_Template_div_click_8_listener($event) { return ctx.previewPanelClick($event); });
                i0.ɵɵelement(9, "div", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(10, MatMarkdownEditorComponent_div_10_Template, 5, 2, "div", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵstyleProp("height", ctx.options.height);
                i0.ɵɵclassProp("fullscreen", ctx.isFullScreen)("border", ctx.options.showBorder)("md-editor-resizable", ctx.options.resizable);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("options", ctx.options)("editor", ctx.editor)("isFullScreen", ctx.isFullScreen);
                i0.ɵɵadvance(2);
                i0.ɵɵstyleProp("display", (ctx.options == null ? null : ctx.options.mode) == "preview" ? "none" : null);
                i0.ɵɵadvance(4);
                i0.ɵɵstyleProp("display", ctx.showPreviewPanel ? "block" : "none");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("innerHTML", ctx.previewHtml, i0.ɵɵsanitizeHtml);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.maxlength > 0 && (ctx.options == null ? null : ctx.options.mode) != "preview");
            } }, directives: [EditorToolbarComponent, i3.NgIf, i4.MatToolbar], styles: [".md-editor-container[_ngcontent-%COMP%]{position:relative;height:100%;margin-bottom:15px}.md-editor-container.border[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.1)}.md-editor-container.fullscreen[_ngcontent-%COMP%]{margin:0;position:fixed;border:0;top:0;left:0;width:100%!important;height:100%!important;z-index:99}.md-editor-container.md-editor-resizable[_ngcontent-%COMP%]:not(.fullscreen){resize:both;overflow:auto;display:inline-block;width:100%}.md-editor-container.md-editor-resizable[_ngcontent-%COMP%]:not(.fullscreen)   .md-footer[_ngcontent-%COMP%]{z-index:-1}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .editor-container[_ngcontent-%COMP%]{flex:1;display:flex}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .editor-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:1}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .editor-container[_ngcontent-%COMP%]   .editor-panel[_ngcontent-%COMP%], .md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .editor-container[_ngcontent-%COMP%]   .editor-panel-container[_ngcontent-%COMP%]{height:100%}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .editor-container[_ngcontent-%COMP%]   .editor-panel[_ngcontent-%COMP%]   .ace-editor[_ngcontent-%COMP%]{height:100%;min-height:100%}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]{height:100%;border-left:1px solid rgba(0,0,0,.1);background-color:#fff;padding:10px;overflow-y:auto}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{vertical-align:top;margin-bottom:.2em;margin-left:-.8em}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .md-footer[_ngcontent-%COMP%]   .length-view[_ngcontent-%COMP%]{flex:1;padding:4px 2px 0;font-size:12px;line-height:16px}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .md-footer[_ngcontent-%COMP%]   .resize-btn[_ngcontent-%COMP%]{width:17px}"] });
        return MatMarkdownEditorComponent;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MatMarkdownEditorComponent, [{
            type: i0.Component,
            args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'mat-markdown-editor',
                    template: "\n    <div\n      class=\"md-editor-container\"\n      [class.fullscreen]=\"isFullScreen\"\n      [class.border]=\"options.showBorder\"\n      [class.md-editor-resizable]=\"options.resizable\"\n      [style.height]=\"options.height\"\n    >\n      <div class=\"md-layout\">\n        <mat-markdown-editor-toolbar\n          [options]=\"options\"\n          [editor]=\"editor\"\n          [isFullScreen]=\"isFullScreen\"\n          (onTogglePreview)=\"onTogglePreview($event)\"\n          (onFullScreen)=\"onFullScreen($event)\"\n        >\n        </mat-markdown-editor-toolbar>\n\n        <div class=\"editor-container\">\n          <div\n            class=\"editor-panel-container\"\n            [style.display]=\"options?.mode == 'preview' ? 'none' : null\"\n          >\n            <div class=\"editor-panel\">\n              <div class=\"ace-editor\" #aceEditor></div>\n            </div>\n          </div>\n          <div\n            [style.display]=\"showPreviewPanel ? 'block' : 'none'\"\n            (click)=\"previewPanelClick($event)\"\n          >\n            <div class=\"preview-panel\" [innerHTML]=\"previewHtml\"></div>\n          </div>\n        </div>\n        <div class=\"md-footer\" *ngIf=\"maxlength > 0 && options?.mode != 'preview'\">\n          <mat-toolbar>\n            <div class=\"text-right length-view\">\n              {{ markdownValue?.length }} / {{ maxlength }}\n            </div>\n            <div class=\"resize-btn\"></div>\n          </mat-toolbar>\n        </div>\n      </div>\n    </div>\n  ",
                    styles: ["\n    .md-editor-container{position:relative;height:100%;margin-bottom:15px}.md-editor-container.border{border:1px solid rgba(0,0,0,.1)}.md-editor-container.fullscreen{margin:0;position:fixed;border:0;top:0;left:0;width:100%!important;height:100%!important;z-index:99}.md-editor-container.md-editor-resizable:not(.fullscreen){resize:both;overflow:auto;display:inline-block;width:100%}.md-editor-container.md-editor-resizable:not(.fullscreen) .md-footer{z-index:-1}.md-editor-container .md-layout{height:100%;display:flex;flex-direction:column}.md-editor-container .md-layout .editor-container{flex:1;display:flex}.md-editor-container .md-layout .editor-container>div{flex:1}.md-editor-container .md-layout .editor-container .editor-panel,.md-editor-container .md-layout .editor-container .editor-panel-container{height:100%}.md-editor-container .md-layout .editor-container .editor-panel .ace-editor{height:100%;min-height:100%}.md-editor-container .md-layout .preview-panel{height:100%;border-left:1px solid rgba(0,0,0,.1);background-color:#fff;padding:10px;overflow-y:auto}.md-editor-container .md-layout .preview-panel .material-icons{vertical-align:top;margin-bottom:.2em;margin-left:-.8em}.md-editor-container .md-layout .md-footer .length-view{flex:1;padding:4px 2px 0;font-size:12px;line-height:16px}.md-editor-container .md-layout .md-footer .resize-btn{width:17px}\n  "],
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef((/**
                             * @return {?}
                             */
                            function () { return MatMarkdownEditorComponent; })),
                            multi: true,
                        },
                        {
                            provide: forms.NG_VALIDATORS,
                            useExisting: i0.forwardRef((/**
                             * @return {?}
                             */
                            function () { return MatMarkdownEditorComponent; })),
                            multi: true,
                        },
                    ],
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: i0.Attribute,
                    args: ['required']
                }] }, { type: undefined, decorators: [{
                    type: i0.Attribute,
                    args: ['maxlength']
                }] }, { type: i1.DomSanitizer }]; }, { aceEditorContainer: [{
                type: i0.ViewChild,
                args: ['aceEditor', { static: true }]
            }], options: [{
                type: i0.Input
            }] }); })();

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
        /** @nocollapse */ LibService.ɵfac = function LibService_Factory(t) { return new (t || LibService)(); };
        /** @nocollapse */ LibService.ɵprov = i0.ɵɵdefineInjectable({ token: LibService, factory: LibService.ɵfac });
        return LibService;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LibService, [{
            type: i0.Injectable
        }], function () { return []; }, null); })();

    /**
     * @fileoverview added by tsickle
     * Generated from: module/material.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MaterialModule = /** @class */ (function () {
        function MaterialModule() {
        }
        /** @nocollapse */ MaterialModule.ɵmod = i0.ɵɵdefineNgModule({ type: MaterialModule });
        /** @nocollapse */ MaterialModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
                    autocomplete.MatAutocompleteModule,
                    i5.MatButtonModule,
                    buttonToggle.MatButtonToggleModule,
                    card.MatCardModule,
                    checkbox.MatCheckboxModule,
                    chips.MatChipsModule,
                    stepper.MatStepperModule,
                    datepicker.MatDatepickerModule,
                    dialog.MatDialogModule,
                    expansion.MatExpansionModule,
                    gridList.MatGridListModule,
                    i7.MatIconModule,
                    input.MatInputModule,
                    list.MatListModule,
                    menu.MatMenuModule,
                    core.MatNativeDateModule,
                    paginator.MatPaginatorModule,
                    progressBar.MatProgressBarModule,
                    progressSpinner.MatProgressSpinnerModule,
                    radio.MatRadioModule,
                    core.MatRippleModule,
                    select.MatSelectModule,
                    sidenav.MatSidenavModule,
                    slider.MatSliderModule,
                    slideToggle.MatSlideToggleModule,
                    snackBar.MatSnackBarModule,
                    sort.MatSortModule,
                    table.MatTableModule,
                    tabs.MatTabsModule,
                    i4.MatToolbarModule,
                    i6.MatTooltipModule,
                ],
                autocomplete.MatAutocompleteModule,
                i5.MatButtonModule,
                buttonToggle.MatButtonToggleModule,
                card.MatCardModule,
                checkbox.MatCheckboxModule,
                chips.MatChipsModule,
                stepper.MatStepperModule,
                datepicker.MatDatepickerModule,
                dialog.MatDialogModule,
                expansion.MatExpansionModule,
                gridList.MatGridListModule,
                i7.MatIconModule,
                input.MatInputModule,
                list.MatListModule,
                menu.MatMenuModule,
                core.MatNativeDateModule,
                paginator.MatPaginatorModule,
                progressBar.MatProgressBarModule,
                progressSpinner.MatProgressSpinnerModule,
                radio.MatRadioModule,
                core.MatRippleModule,
                select.MatSelectModule,
                sidenav.MatSidenavModule,
                slider.MatSliderModule,
                slideToggle.MatSlideToggleModule,
                snackBar.MatSnackBarModule,
                sort.MatSortModule,
                table.MatTableModule,
                tabs.MatTabsModule,
                i4.MatToolbarModule,
                i6.MatTooltipModule] });
        return MaterialModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MaterialModule, { imports: [autocomplete.MatAutocompleteModule,
            i5.MatButtonModule,
            buttonToggle.MatButtonToggleModule,
            card.MatCardModule,
            checkbox.MatCheckboxModule,
            chips.MatChipsModule,
            stepper.MatStepperModule,
            datepicker.MatDatepickerModule,
            dialog.MatDialogModule,
            expansion.MatExpansionModule,
            gridList.MatGridListModule,
            i7.MatIconModule,
            input.MatInputModule,
            list.MatListModule,
            menu.MatMenuModule,
            core.MatNativeDateModule,
            paginator.MatPaginatorModule,
            progressBar.MatProgressBarModule,
            progressSpinner.MatProgressSpinnerModule,
            radio.MatRadioModule,
            core.MatRippleModule,
            select.MatSelectModule,
            sidenav.MatSidenavModule,
            slider.MatSliderModule,
            slideToggle.MatSlideToggleModule,
            snackBar.MatSnackBarModule,
            sort.MatSortModule,
            table.MatTableModule,
            tabs.MatTabsModule,
            i4.MatToolbarModule,
            i6.MatTooltipModule], exports: [autocomplete.MatAutocompleteModule,
            i5.MatButtonModule,
            buttonToggle.MatButtonToggleModule,
            card.MatCardModule,
            checkbox.MatCheckboxModule,
            chips.MatChipsModule,
            stepper.MatStepperModule,
            datepicker.MatDatepickerModule,
            dialog.MatDialogModule,
            expansion.MatExpansionModule,
            gridList.MatGridListModule,
            i7.MatIconModule,
            input.MatInputModule,
            list.MatListModule,
            menu.MatMenuModule,
            core.MatNativeDateModule,
            paginator.MatPaginatorModule,
            progressBar.MatProgressBarModule,
            progressSpinner.MatProgressSpinnerModule,
            radio.MatRadioModule,
            core.MatRippleModule,
            select.MatSelectModule,
            sidenav.MatSidenavModule,
            slider.MatSliderModule,
            slideToggle.MatSlideToggleModule,
            snackBar.MatSnackBarModule,
            sort.MatSortModule,
            table.MatTableModule,
            tabs.MatTabsModule,
            i4.MatToolbarModule,
            i6.MatTooltipModule] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MaterialModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        autocomplete.MatAutocompleteModule,
                        i5.MatButtonModule,
                        buttonToggle.MatButtonToggleModule,
                        card.MatCardModule,
                        checkbox.MatCheckboxModule,
                        chips.MatChipsModule,
                        stepper.MatStepperModule,
                        datepicker.MatDatepickerModule,
                        dialog.MatDialogModule,
                        expansion.MatExpansionModule,
                        gridList.MatGridListModule,
                        i7.MatIconModule,
                        input.MatInputModule,
                        list.MatListModule,
                        menu.MatMenuModule,
                        core.MatNativeDateModule,
                        paginator.MatPaginatorModule,
                        progressBar.MatProgressBarModule,
                        progressSpinner.MatProgressSpinnerModule,
                        radio.MatRadioModule,
                        core.MatRippleModule,
                        select.MatSelectModule,
                        sidenav.MatSidenavModule,
                        slider.MatSliderModule,
                        slideToggle.MatSlideToggleModule,
                        snackBar.MatSnackBarModule,
                        sort.MatSortModule,
                        table.MatTableModule,
                        tabs.MatTabsModule,
                        i4.MatToolbarModule,
                        i6.MatTooltipModule,
                    ],
                    exports: [
                        autocomplete.MatAutocompleteModule,
                        i5.MatButtonModule,
                        buttonToggle.MatButtonToggleModule,
                        card.MatCardModule,
                        checkbox.MatCheckboxModule,
                        chips.MatChipsModule,
                        stepper.MatStepperModule,
                        datepicker.MatDatepickerModule,
                        dialog.MatDialogModule,
                        expansion.MatExpansionModule,
                        gridList.MatGridListModule,
                        i7.MatIconModule,
                        input.MatInputModule,
                        list.MatListModule,
                        menu.MatMenuModule,
                        core.MatNativeDateModule,
                        paginator.MatPaginatorModule,
                        progressBar.MatProgressBarModule,
                        progressSpinner.MatProgressSpinnerModule,
                        radio.MatRadioModule,
                        core.MatRippleModule,
                        select.MatSelectModule,
                        sidenav.MatSidenavModule,
                        slider.MatSliderModule,
                        slideToggle.MatSlideToggleModule,
                        snackBar.MatSnackBarModule,
                        sort.MatSortModule,
                        table.MatTableModule,
                        tabs.MatTabsModule,
                        i4.MatToolbarModule,
                        i6.MatTooltipModule,
                    ],
                }]
        }], null, null); })();

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
        /** @nocollapse */ MatMarkdownEditorModule.ɵmod = i0.ɵɵdefineNgModule({ type: MatMarkdownEditorModule });
        /** @nocollapse */ MatMarkdownEditorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MatMarkdownEditorModule_Factory(t) { return new (t || MatMarkdownEditorModule)(); }, imports: [[
                    i3.CommonModule,
                    forms.FormsModule,
                    MaterialModule,
                    forms.ReactiveFormsModule,
                    animations.BrowserAnimationsModule,
                    flexLayout.FlexLayoutModule,
                ]] });
        return MatMarkdownEditorModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MatMarkdownEditorModule, { declarations: [MatMarkdownEditorComponent, EditorToolbarComponent], imports: [i3.CommonModule,
            forms.FormsModule,
            MaterialModule,
            forms.ReactiveFormsModule,
            animations.BrowserAnimationsModule,
            flexLayout.FlexLayoutModule], exports: [MatMarkdownEditorComponent] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MatMarkdownEditorModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i3.CommonModule,
                        forms.FormsModule,
                        MaterialModule,
                        forms.ReactiveFormsModule,
                        animations.BrowserAnimationsModule,
                        flexLayout.FlexLayoutModule,
                    ],
                    exports: [MatMarkdownEditorComponent],
                    declarations: [MatMarkdownEditorComponent, EditorToolbarComponent],
                }]
        }], null, null); })();

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

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mat-markdown-editor.umd.js.map
