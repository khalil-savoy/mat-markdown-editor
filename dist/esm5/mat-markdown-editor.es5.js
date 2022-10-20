import { Component, Input, Output, EventEmitter, ViewChild, forwardRef, Attribute, NgModule, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate2, ɵɵinjectAttribute, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵProvidersFeature, ɵɵlistener, ɵɵtemplate, ɵɵstyleProp, ɵɵclassProp, ɵɵproperty, ɵɵsanitizeHtml, ɵɵdefineInjectable, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵtextInterpolate, Renderer2 } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { DefaultLayoutDirective, DefaultLayoutAlignDirective, DefaultLayoutGapDirective, DefaultFlexDirective } from '@angular/flex-layout/flex';
import { MatDivider } from '@angular/material/divider';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatTooltipModule, MatTooltip } from '@angular/material/tooltip';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
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
 * Generated from: module/editor/toolbar/toolbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function EditorToolbarComponent_mat_toolbar_0_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 18);
    ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_2_Template_button_click_0_listener() { ɵɵrestoreView(_r14); var ctx_r13 = ɵɵnextContext(2); return ctx_r13.insertContent("Bold"); });
    ɵɵelementStart(1, "mat-icon", 19);
    ɵɵtext(2, "format_bold");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function EditorToolbarComponent_mat_toolbar_0_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 20);
    ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_3_Template_button_click_0_listener() { ɵɵrestoreView(_r16); var ctx_r15 = ɵɵnextContext(2); return ctx_r15.insertContent("Italic"); });
    ɵɵelementStart(1, "mat-icon", 21);
    ɵɵtext(2, "format_italic");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function EditorToolbarComponent_mat_toolbar_0_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 22);
    ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_4_Template_button_click_0_listener() { ɵɵrestoreView(_r18); var ctx_r17 = ɵɵnextContext(2); return ctx_r17.insertContent("Heading"); });
    ɵɵelementStart(1, "mat-icon", 21);
    ɵɵtext(2, "format_size");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function EditorToolbarComponent_mat_toolbar_0_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 23);
    ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_5_Template_button_click_0_listener() { ɵɵrestoreView(_r20); var ctx_r19 = ɵɵnextContext(2); return ctx_r19.insertContent("Reference"); });
    ɵɵelementStart(1, "mat-icon", 24);
    ɵɵtext(2, "format_quote");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function EditorToolbarComponent_mat_toolbar_0_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 25);
    ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_8_Template_button_click_0_listener() { ɵɵrestoreView(_r22); var ctx_r21 = ɵɵnextContext(2); return ctx_r21.insertContent("Link"); });
    ɵɵelementStart(1, "mat-icon", 26);
    ɵɵtext(2, "link");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function EditorToolbarComponent_mat_toolbar_0_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 27);
    ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_9_Template_button_click_0_listener() { ɵɵrestoreView(_r24); var ctx_r23 = ɵɵnextContext(2); return ctx_r23.insertContent("Image"); });
    ɵɵelementStart(1, "mat-icon", 28);
    ɵɵtext(2, "photo");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function EditorToolbarComponent_mat_toolbar_0_button_12_Template(rf, ctx) { if (rf & 1) {
    var _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 29);
    ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_12_Template_button_click_0_listener() { ɵɵrestoreView(_r26); var ctx_r25 = ɵɵnextContext(2); return ctx_r25.insertContent("Ul"); });
    ɵɵelementStart(1, "mat-icon", 30);
    ɵɵtext(2, " format_list_bulleted ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function EditorToolbarComponent_mat_toolbar_0_button_13_Template(rf, ctx) { if (rf & 1) {
    var _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 31);
    ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_13_Template_button_click_0_listener() { ɵɵrestoreView(_r28); var ctx_r27 = ɵɵnextContext(2); return ctx_r27.insertContent("Ol"); });
    ɵɵelementStart(1, "mat-icon", 30);
    ɵɵtext(2, " format_list_numbered ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function EditorToolbarComponent_mat_toolbar_0_button_14_Template(rf, ctx) { if (rf & 1) {
    var _r30 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 32);
    ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_14_Template_button_click_0_listener() { ɵɵrestoreView(_r30); var ctx_r29 = ɵɵnextContext(2); return ctx_r29.insertContent("Code"); });
    ɵɵelementStart(1, "mat-icon", 33);
    ɵɵtext(2, "code");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function EditorToolbarComponent_mat_toolbar_0_button_17_Template(rf, ctx) { if (rf & 1) {
    var _r32 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 34);
    ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_17_Template_button_click_0_listener() { ɵɵrestoreView(_r32); var ctx_r31 = ɵɵnextContext(2); return ctx_r31.togglePreview(); });
    ɵɵelementStart(1, "mat-icon", 30);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = ɵɵnextContext(2);
    ɵɵproperty("matTooltip", ctx_r10.previewIsOpen ? "Hide Preview" : "Show Preview");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r10.previewIsOpen ? "visibility_off" : "visibility");
} }
function EditorToolbarComponent_mat_toolbar_0_button_20_Template(rf, ctx) { if (rf & 1) {
    var _r34 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 35);
    ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_20_Template_button_click_0_listener() { ɵɵrestoreView(_r34); var ctx_r33 = ɵɵnextContext(2); return ctx_r33.fullScreen(); });
    ɵɵelementStart(1, "mat-icon", 36);
    ɵɵtext(2, "fullscreen");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r11 = ɵɵnextContext(2);
    ɵɵclassProp("active", ctx_r11.isFullScreen);
} }
function EditorToolbarComponent_mat_toolbar_0_button_21_Template(rf, ctx) { if (rf & 1) {
    var _r36 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 37);
    ɵɵlistener("click", function EditorToolbarComponent_mat_toolbar_0_button_21_Template_button_click_0_listener() { ɵɵrestoreView(_r36); var ctx_r35 = ɵɵnextContext(2); return ctx_r35.fullScreen(); });
    ɵɵelementStart(1, "mat-icon", 36);
    ɵɵtext(2, "fullscreen_exit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r12 = ɵɵnextContext(2);
    ɵɵclassProp("active", ctx_r12.isFullScreen);
} }
function EditorToolbarComponent_mat_toolbar_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-toolbar", 1);
    ɵɵelementStart(1, "div", 2);
    ɵɵtemplate(2, EditorToolbarComponent_mat_toolbar_0_button_2_Template, 3, 0, "button", 3);
    ɵɵtemplate(3, EditorToolbarComponent_mat_toolbar_0_button_3_Template, 3, 0, "button", 4);
    ɵɵtemplate(4, EditorToolbarComponent_mat_toolbar_0_button_4_Template, 3, 0, "button", 5);
    ɵɵtemplate(5, EditorToolbarComponent_mat_toolbar_0_button_5_Template, 3, 0, "button", 6);
    ɵɵelement(6, "mat-divider", 7);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 2);
    ɵɵtemplate(8, EditorToolbarComponent_mat_toolbar_0_button_8_Template, 3, 0, "button", 8);
    ɵɵtemplate(9, EditorToolbarComponent_mat_toolbar_0_button_9_Template, 3, 0, "button", 9);
    ɵɵelement(10, "mat-divider", 7);
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 2);
    ɵɵtemplate(12, EditorToolbarComponent_mat_toolbar_0_button_12_Template, 3, 0, "button", 10);
    ɵɵtemplate(13, EditorToolbarComponent_mat_toolbar_0_button_13_Template, 3, 0, "button", 11);
    ɵɵtemplate(14, EditorToolbarComponent_mat_toolbar_0_button_14_Template, 3, 0, "button", 12);
    ɵɵelement(15, "mat-divider", 7);
    ɵɵelementEnd();
    ɵɵelementStart(16, "div", 2);
    ɵɵtemplate(17, EditorToolbarComponent_mat_toolbar_0_button_17_Template, 3, 2, "button", 13);
    ɵɵelementEnd();
    ɵɵelement(18, "span", 14);
    ɵɵelementStart(19, "div", 15);
    ɵɵtemplate(20, EditorToolbarComponent_mat_toolbar_0_button_20_Template, 3, 2, "button", 16);
    ɵɵtemplate(21, EditorToolbarComponent_mat_toolbar_0_button_21_Template, 3, 2, "button", 17);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵɵnextContext();
    ɵɵproperty("color", ctx_r0.options.toolbarColor);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Bold));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Italic));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Heading));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Reference));
    ɵɵadvance(1);
    ɵɵproperty("vertical", true);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Link));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Image));
    ɵɵadvance(1);
    ɵɵproperty("vertical", true);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Ul));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Ol));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.Code));
    ɵɵadvance(1);
    ɵɵproperty("vertical", true);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.TogglePreview));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.FullScreen) && !ctx_r0.isFullScreen);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(ctx_r0.options == null ? null : ctx_r0.options.hideIcons == null ? null : ctx_r0.options.hideIcons.FullScreen) && ctx_r0.isFullScreen);
} }
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
    /** @nocollapse */ EditorToolbarComponent.ɵfac = function EditorToolbarComponent_Factory(t) { return new (t || EditorToolbarComponent)(ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ EditorToolbarComponent.ɵcmp = ɵɵdefineComponent({ type: EditorToolbarComponent, selectors: [["mat-markdown-editor-toolbar"]], inputs: { options: "options", isFullScreen: "isFullScreen", editor: "editor" }, outputs: { onTogglePreview: "onTogglePreview", onFullScreen: "onFullScreen" }, decls: 1, vars: 1, consts: [["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "5px", 3, "color", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "5px", 3, "color"], [1, "btn-group"], ["mat-icon-button", "", "type", "button", "matTooltip", "Bold", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Italic", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Heading", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Refrence", 3, "click", 4, "ngIf"], [3, "vertical"], ["mat-icon-button", "", "type", "button", "matTooltip", "Link", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Image", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Unordered List", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Ordered List", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Code Block", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 3, "matTooltip", "click", 4, "ngIf"], ["fxFlex", ""], [1, "btn-group", "pull-right", "hide-split"], ["mat-icon-button", "", "type", "button", "matTooltip", "Full Screen Mode", 3, "active", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Exit Full Screen Mode", 3, "active", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Bold", 3, "click"], ["aria-label", "bold"], ["mat-icon-button", "", "type", "button", "matTooltip", "Italic", 3, "click"], ["aria-label", "italic"], ["mat-icon-button", "", "type", "button", "matTooltip", "Heading", 3, "click"], ["mat-icon-button", "", "type", "button", "matTooltip", "Refrence", 3, "click"], ["aria-label", "quote"], ["mat-icon-button", "", "type", "button", "matTooltip", "Link", 3, "click"], ["aria-label", "link"], ["mat-icon-button", "", "type", "button", "matTooltip", "Image", 3, "click"], ["aria-label", "Image"], ["mat-icon-button", "", "type", "button", "matTooltip", "Unordered List", 3, "click"], ["aria-label", "Unordered List"], ["mat-icon-button", "", "type", "button", "matTooltip", "Ordered List", 3, "click"], ["mat-icon-button", "", "type", "button", "matTooltip", "Code Block", 3, "click"], ["aria-label", "code"], ["mat-icon-button", "", "type", "button", 3, "matTooltip", "click"], ["mat-icon-button", "", "type", "button", "matTooltip", "Full Screen Mode", 3, "click"], ["aria-label", "fullscreen"], ["mat-icon-button", "", "type", "button", "matTooltip", "Exit Full Screen Mode", 3, "click"]], template: function EditorToolbarComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, EditorToolbarComponent_mat_toolbar_0_Template, 22, 16, "mat-toolbar", 0);
        } if (rf & 2) {
            ɵɵproperty("ngIf", !ctx.options.hideToolbar && (ctx.options == null ? null : ctx.options.mode) != "preview");
        } }, directives: [NgIf, MatToolbar, DefaultLayoutDirective, DefaultLayoutAlignDirective, DefaultLayoutGapDirective, MatDivider, DefaultFlexDirective, MatButton, MatTooltip, MatIcon], styles: [""] });
    return EditorToolbarComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(EditorToolbarComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'mat-markdown-editor-toolbar',
                template: "\n    <mat-toolbar\n      [color]=\"options.toolbarColor\"\n      *ngIf=\"!options.hideToolbar && options?.mode != 'preview'\"\n      fxLayout=\"row\"\n      fxLayoutAlign=\"start center\"\n      fxLayoutGap=\"5px\"\n    >\n      <div class=\"btn-group\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Bold\"\n          (click)=\"insertContent('Bold')\"\n          *ngIf=\"!options?.hideIcons?.Bold\"\n        >\n          <mat-icon aria-label=\"bold\">format_bold</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Italic\"\n          (click)=\"insertContent('Italic')\"\n          *ngIf=\"!options?.hideIcons?.Italic\"\n        >\n          <mat-icon aria-label=\"italic\">format_italic</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Heading\"\n          (click)=\"insertContent('Heading')\"\n          *ngIf=\"!options?.hideIcons?.Heading\"\n        >\n          <mat-icon aria-label=\"italic\">format_size</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Refrence\"\n          (click)=\"insertContent('Reference')\"\n          *ngIf=\"!options?.hideIcons?.Reference\"\n        >\n          <mat-icon aria-label=\"quote\">format_quote</mat-icon>\n        </button>\n        <mat-divider [vertical]=\"true\"></mat-divider>\n      </div>\n\n      <div class=\"btn-group\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Link\"\n          (click)=\"insertContent('Link')\"\n          *ngIf=\"!options?.hideIcons?.Link\"\n        >\n          <mat-icon aria-label=\"link\">link</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Image\"\n          (click)=\"insertContent('Image')\"\n          *ngIf=\"!options?.hideIcons?.Image\"\n        >\n          <mat-icon aria-label=\"Image\">photo</mat-icon>\n        </button>\n        <mat-divider [vertical]=\"true\"></mat-divider>\n      </div>\n\n      <div class=\"btn-group\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Unordered List\"\n          (click)=\"insertContent('Ul')\"\n          *ngIf=\"!options?.hideIcons?.Ul\"\n        >\n          <mat-icon aria-label=\"Unordered List\">\n            format_list_bulleted\n          </mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Ordered List\"\n          (click)=\"insertContent('Ol')\"\n          *ngIf=\"!options?.hideIcons?.Ol\"\n        >\n          <mat-icon aria-label=\"Unordered List\">\n            format_list_numbered\n          </mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Code Block\"\n          (click)=\"insertContent('Code')\"\n          *ngIf=\"!options?.hideIcons?.Code\"\n        >\n          <mat-icon aria-label=\"code\">code</mat-icon>\n        </button>\n        <mat-divider [vertical]=\"true\"></mat-divider>\n      </div>\n\n      <div class=\"btn-group\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          [matTooltip]=\"previewIsOpen ? 'Hide Preview' : 'Show Preview'\"\n          (click)=\"togglePreview()\"\n          *ngIf=\"!options?.hideIcons?.TogglePreview\"\n        >\n          <mat-icon aria-label=\"Unordered List\">{{\n            previewIsOpen ? 'visibility_off' : 'visibility'\n          }}</mat-icon>\n        </button>\n      </div>\n\n      <span fxFlex></span>\n\n      <div class=\"btn-group pull-right hide-split\">\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Full Screen Mode\"\n          [class.active]=\"isFullScreen\"\n          (click)=\"fullScreen()\"\n          *ngIf=\"!options?.hideIcons?.FullScreen && !isFullScreen\"\n        >\n          <mat-icon aria-label=\"fullscreen\">fullscreen</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          type=\"button\"\n          matTooltip=\"Exit Full Screen Mode\"\n          [class.active]=\"isFullScreen\"\n          (click)=\"fullScreen()\"\n          *ngIf=\"!options?.hideIcons?.FullScreen && isFullScreen\"\n        >\n          <mat-icon aria-label=\"fullscreen\">fullscreen_exit</mat-icon>\n        </button>\n      </div>\n    </mat-toolbar>\n  ",
                styles: ["\n\n  "],
            }]
    }], function () { return [{ type: Renderer2 }]; }, { options: [{
            type: Input
        }], isFullScreen: [{
            type: Input
        }], editor: [{
            type: Input
        }], onTogglePreview: [{
            type: Output
        }], onFullScreen: [{
            type: Output
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: module/editor/editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var _c0 = ["aceEditor"];
function MatMarkdownEditorComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵelementStart(1, "mat-toolbar");
    ɵɵelementStart(2, "div", 12);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelement(4, "div", 13);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate2(" ", ctx_r1.markdownValue == null ? null : ctx_r1.markdownValue.length, " / ", ctx_r1.maxlength, " ");
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
    /** @nocollapse */ MatMarkdownEditorComponent.ɵfac = function MatMarkdownEditorComponent_Factory(t) { return new (t || MatMarkdownEditorComponent)(ɵɵinjectAttribute('required'), ɵɵinjectAttribute('maxlength'), ɵɵdirectiveInject(DomSanitizer)); };
    /** @nocollapse */ MatMarkdownEditorComponent.ɵcmp = ɵɵdefineComponent({ type: MatMarkdownEditorComponent, selectors: [["mat-markdown-editor"]], viewQuery: function MatMarkdownEditorComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.aceEditorContainer = _t.first);
        } }, inputs: { options: "options" }, features: [ɵɵProvidersFeature([
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
            ])], decls: 11, vars: 17, consts: [[1, "md-editor-container"], [1, "md-layout"], [3, "options", "editor", "isFullScreen", "onTogglePreview", "onFullScreen"], [1, "editor-container"], [1, "editor-panel-container"], [1, "editor-panel"], [1, "ace-editor"], ["aceEditor", ""], [3, "click"], [1, "preview-panel", 3, "innerHTML"], ["class", "md-footer", 4, "ngIf"], [1, "md-footer"], [1, "text-right", "length-view"], [1, "resize-btn"]], template: function MatMarkdownEditorComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelementStart(2, "mat-markdown-editor-toolbar", 2);
            ɵɵlistener("onTogglePreview", function MatMarkdownEditorComponent_Template_mat_markdown_editor_toolbar_onTogglePreview_2_listener($event) { return ctx.onTogglePreview($event); })("onFullScreen", function MatMarkdownEditorComponent_Template_mat_markdown_editor_toolbar_onFullScreen_2_listener($event) { return ctx.onFullScreen($event); });
            ɵɵelementEnd();
            ɵɵelementStart(3, "div", 3);
            ɵɵelementStart(4, "div", 4);
            ɵɵelementStart(5, "div", 5);
            ɵɵelement(6, "div", 6, 7);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(8, "div", 8);
            ɵɵlistener("click", function MatMarkdownEditorComponent_Template_div_click_8_listener($event) { return ctx.previewPanelClick($event); });
            ɵɵelement(9, "div", 9);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(10, MatMarkdownEditorComponent_div_10_Template, 5, 2, "div", 10);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵstyleProp("height", ctx.options.height);
            ɵɵclassProp("fullscreen", ctx.isFullScreen)("border", ctx.options.showBorder)("md-editor-resizable", ctx.options.resizable);
            ɵɵadvance(2);
            ɵɵproperty("options", ctx.options)("editor", ctx.editor)("isFullScreen", ctx.isFullScreen);
            ɵɵadvance(2);
            ɵɵstyleProp("display", (ctx.options == null ? null : ctx.options.mode) == "preview" ? "none" : null);
            ɵɵadvance(4);
            ɵɵstyleProp("display", ctx.showPreviewPanel ? "block" : "none");
            ɵɵadvance(1);
            ɵɵproperty("innerHTML", ctx.previewHtml, ɵɵsanitizeHtml);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.maxlength > 0 && (ctx.options == null ? null : ctx.options.mode) != "preview");
        } }, directives: [EditorToolbarComponent, NgIf, MatToolbar], styles: [".md-editor-container[_ngcontent-%COMP%]{position:relative;height:100%;margin-bottom:15px}.md-editor-container.border[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.1)}.md-editor-container.fullscreen[_ngcontent-%COMP%]{margin:0;position:fixed;border:0;top:0;left:0;width:100%!important;height:100%!important;z-index:99}.md-editor-container.md-editor-resizable[_ngcontent-%COMP%]:not(.fullscreen){resize:both;overflow:auto;display:inline-block;width:100%}.md-editor-container.md-editor-resizable[_ngcontent-%COMP%]:not(.fullscreen)   .md-footer[_ngcontent-%COMP%]{z-index:-1}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .editor-container[_ngcontent-%COMP%]{flex:1;display:flex}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .editor-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:1}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .editor-container[_ngcontent-%COMP%]   .editor-panel[_ngcontent-%COMP%], .md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .editor-container[_ngcontent-%COMP%]   .editor-panel-container[_ngcontent-%COMP%]{height:100%}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .editor-container[_ngcontent-%COMP%]   .editor-panel[_ngcontent-%COMP%]   .ace-editor[_ngcontent-%COMP%]{height:100%;min-height:100%}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]{height:100%;border-left:1px solid rgba(0,0,0,.1);background-color:#fff;padding:10px;overflow-y:auto}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{vertical-align:top;margin-bottom:.2em;margin-left:-.8em}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .md-footer[_ngcontent-%COMP%]   .length-view[_ngcontent-%COMP%]{flex:1;padding:4px 2px 0;font-size:12px;line-height:16px}.md-editor-container[_ngcontent-%COMP%]   .md-layout[_ngcontent-%COMP%]   .md-footer[_ngcontent-%COMP%]   .resize-btn[_ngcontent-%COMP%]{width:17px}"] });
    return MatMarkdownEditorComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MatMarkdownEditorComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Attribute,
                args: ['required']
            }] }, { type: undefined, decorators: [{
                type: Attribute,
                args: ['maxlength']
            }] }, { type: DomSanitizer }]; }, { aceEditorContainer: [{
            type: ViewChild,
            args: ['aceEditor', { static: true }]
        }], options: [{
            type: Input
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
    /** @nocollapse */ LibService.ɵprov = ɵɵdefineInjectable({ token: LibService, factory: LibService.ɵfac });
    return LibService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(LibService, [{
        type: Injectable
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: module/material.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    /** @nocollapse */ MaterialModule.ɵmod = ɵɵdefineNgModule({ type: MaterialModule });
    /** @nocollapse */ MaterialModule.ɵinj = ɵɵdefineInjector({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
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
            MatTooltipModule] });
    return MaterialModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MaterialModule, { imports: [MatAutocompleteModule,
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
        MatTooltipModule], exports: [MatAutocompleteModule,
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
        MatTooltipModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MaterialModule, [{
        type: NgModule,
        args: [{
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
    /** @nocollapse */ MatMarkdownEditorModule.ɵmod = ɵɵdefineNgModule({ type: MatMarkdownEditorModule });
    /** @nocollapse */ MatMarkdownEditorModule.ɵinj = ɵɵdefineInjector({ factory: function MatMarkdownEditorModule_Factory(t) { return new (t || MatMarkdownEditorModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                MaterialModule,
                ReactiveFormsModule,
                BrowserAnimationsModule,
                FlexLayoutModule,
            ]] });
    return MatMarkdownEditorModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MatMarkdownEditorModule, { declarations: [MatMarkdownEditorComponent, EditorToolbarComponent], imports: [CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FlexLayoutModule], exports: [MatMarkdownEditorComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MatMarkdownEditorModule, [{
        type: NgModule,
        args: [{
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

export { MatMarkdownEditorComponent, LibService, MatMarkdownEditorModule };
//# sourceMappingURL=mat-markdown-editor.es5.js.map
