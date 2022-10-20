import { ModuleWithProviders } from '@angular/core';
export { MatMarkdownEditorComponent } from './editor/editor.component';
export { LibService } from './service/lib.service';
export { MatMarkdownEditorOptions, MarkedjsOption } from './lib.interface';
export declare class MatMarkdownEditorModule {
    static forRoot(): ModuleWithProviders<MatMarkdownEditorModule>;
}
