import * as i0 from '@angular/core';
import { Directive, input, output, computed, Component, ChangeDetectionStrategy, contentChild, signal } from '@angular/core';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/material/button';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as i2 from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';

class ActionCellDirective {
    constructor(template) {
        this.template = template;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: ActionCellDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.1", type: ActionCellDirective, isStandalone: true, selector: "[domTableActionCell]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: ActionCellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[domTableActionCell]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }] });

class FormCellDirective {
    constructor(template) {
        this.template = template;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: FormCellDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.1", type: FormCellDirective, isStandalone: true, selector: "[domTableFormCell]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: FormCellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[domTableFormCell]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }] });

// export interface ButtonActionState {
//   editState?: ActionState;
//   deleteState?: ActionState;
// }
class TableActionCellComponent {
    constructor() {
        this.icon = input('');
        this.tooltip = input('');
        this.text = input('');
        this.isDisabled = input(false);
        this.actionClicked = output();
    }
    ngOnInit() {
        this.isIconButton = computed(() => !!this.icon());
    }
    onActionButtonClick() {
        this.actionClicked.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: TableActionCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.1.1", type: TableActionCellComponent, isStandalone: true, selector: "dom-table-actions-cell", inputs: { icon: { classPropertyName: "icon", publicName: "icon", isSignal: true, isRequired: false, transformFunction: null }, tooltip: { classPropertyName: "tooltip", publicName: "tooltip", isSignal: true, isRequired: false, transformFunction: null }, text: { classPropertyName: "text", publicName: "text", isSignal: true, isRequired: false, transformFunction: null }, isDisabled: { classPropertyName: "isDisabled", publicName: "isDisabled", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { actionClicked: "actionClicked" }, ngImport: i0, template: "@if (isIconButton()) {\r\n\r\n<button\r\n  mat-icon-button\r\n  type=\"button\"\r\n  (click)=\"onActionButtonClick()\"\r\n  [disabled]=\"isDisabled()\"\r\n  [matTooltip]=\"tooltip()\"\r\n>\r\n  <mat-icon [fontIcon]=\"icon()\"></mat-icon>\r\n</button>\r\n\r\n} @else {\r\n  <button\r\n    mat-flat-button\r\n    color=\"\"\r\n    type=\"button\"\r\n    (click)=\"onActionButtonClick()\"\r\n    [disabled]=\"isDisabled()\"\r\n    [matTooltip]=\"tooltip()\"\r\n  >\r\n    {{ text() }}\r\n  </button>\r\n}\r\n<!-- slots buttons -->\r\n<!-- <ng-container>\r\n    <ng-template\r\n      *ngTemplateOutlet=\"\r\n        endSlot;\r\n        context: {\r\n          $implicit: rowState\r\n        }\r\n      \"\r\n    ></ng-template>\r\n  </ng-container> -->\r\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "directive", type: MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "component", type: MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatSlideToggleModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: TableActionCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dom-table-actions-cell', standalone: true, imports: [
                        CommonModule,
                        MatButtonModule,
                        MatIconButton,
                        MatTooltip,
                        MatIcon,
                        MatSlideToggleModule,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (isIconButton()) {\r\n\r\n<button\r\n  mat-icon-button\r\n  type=\"button\"\r\n  (click)=\"onActionButtonClick()\"\r\n  [disabled]=\"isDisabled()\"\r\n  [matTooltip]=\"tooltip()\"\r\n>\r\n  <mat-icon [fontIcon]=\"icon()\"></mat-icon>\r\n</button>\r\n\r\n} @else {\r\n  <button\r\n    mat-flat-button\r\n    color=\"\"\r\n    type=\"button\"\r\n    (click)=\"onActionButtonClick()\"\r\n    [disabled]=\"isDisabled()\"\r\n    [matTooltip]=\"tooltip()\"\r\n  >\r\n    {{ text() }}\r\n  </button>\r\n}\r\n<!-- slots buttons -->\r\n<!-- <ng-container>\r\n    <ng-template\r\n      *ngTemplateOutlet=\"\r\n        endSlot;\r\n        context: {\r\n          $implicit: rowState\r\n        }\r\n      \"\r\n    ></ng-template>\r\n  </ng-container> -->\r\n" }]
        }] });

class TableFormCellComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: TableFormCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.1", type: TableFormCellComponent, isStandalone: true, selector: "dom-table-form-cell", ngImport: i0, template: "<div>form cell</div>\r\n", dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: MatSelectModule }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "ngmodule", type: MatIconModule }, { kind: "ngmodule", type: MatInputModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: TableFormCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dom-table-form-cell', standalone: true, imports: [
                        CommonModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        MatIconModule,
                        MatInputModule,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div>form cell</div>\r\n" }]
        }] });

var GridRowModes;
(function (GridRowModes) {
    GridRowModes["Edit"] = "edit";
    GridRowModes["View"] = "view";
})(GridRowModes || (GridRowModes = {}));

class TableComponent {
    constructor() {
        this.actionColumn = contentChild(ActionCellDirective);
        this.formColumn = contentChild(FormCellDirective);
        this.idKey = input('id');
        this.dataSource = input.required();
        this.columns = input.required();
        this.editRow = input(false);
        this.rowModesModel = input({});
        this.rowFormGroupModel = computed(() => {
            return Object.keys(this.rowModesModel()).reduce((acc, key) => {
                if (this.rowModesModel()[key] === GridRowModes.Edit) {
                    acc[key] = new FormGroup({});
                }
                return acc;
            }, {});
        });
        this.tableColumns = this.computeTableColumns();
        this.displayedColumns = this.computeDisplayColumns();
        this.showEdit = signal({});
    }
    computeTableColumns() {
        return computed(() => {
            const columns = this.columns();
            const withEditColumn = this.editRow()
                ? [
                    ...columns,
                    {
                        field: 'actions',
                        type: 'actions',
                    },
                ]
                : columns;
            return withEditColumn;
        });
    }
    computeDisplayColumns() {
        return computed(() => this.tableColumns().map((column) => column.field));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: TableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.1.1", type: TableComponent, isStandalone: true, selector: "dom-table", inputs: { idKey: { classPropertyName: "idKey", publicName: "idKey", isSignal: true, isRequired: false, transformFunction: null }, dataSource: { classPropertyName: "dataSource", publicName: "dataSource", isSignal: true, isRequired: true, transformFunction: null }, columns: { classPropertyName: "columns", publicName: "columns", isSignal: true, isRequired: true, transformFunction: null }, editRow: { classPropertyName: "editRow", publicName: "editRow", isSignal: true, isRequired: false, transformFunction: null }, rowModesModel: { classPropertyName: "rowModesModel", publicName: "rowModesModel", isSignal: true, isRequired: false, transformFunction: null } }, queries: [{ propertyName: "actionColumn", first: true, predicate: ActionCellDirective, descendants: true, isSignal: true }, { propertyName: "formColumn", first: true, predicate: FormCellDirective, descendants: true, isSignal: true }], ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource()\" class=\"mat-elevation-z8\">\n  <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n\n  @for (column of tableColumns(); track $index) {\n\n  <ng-container [matColumnDef]=\"column.field\">\n    <th mat-header-cell *matHeaderCellDef>\n      {{ column.headerName | titlecase }}\n    </th>\n\n    @if(column.type !== 'actions') {\n\n    <td mat-cell *matCellDef=\"let element\">\n      @if( column.editable && rowModesModel()![element[idKey()]] === 'edit') {\n\n      <ng-container\n        *ngTemplateOutlet=\"formCell; context: { $implicit: element }\"\n      ></ng-container>\n\n      } @else { {{ element[column.field] }}}\n    </td>\n\n    } @else {\n    <td mat-cell *matCellDef=\"let element\">\n      <ng-container\n        *ngTemplateOutlet=\"actionCell; context: { $implicit: element }\"\n      ></ng-container>\n    </td>\n    }\n  </ng-container>\n\n  }\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns()\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns()\"></tr>\n</table>\n\n<ng-template #formCell let-element>\n  @if(formColumn()) {\n  <ng-container\n    *ngTemplateOutlet=\"formColumn()!.template; context: { $implicit: element }\"\n  ></ng-container>\n  }\n</ng-template>\n\n<ng-template #actionCell let-element>\n  @if(actionColumn()){\n\n  <ng-container\n    *ngTemplateOutlet=\"\n      actionColumn()!.template;\n      context: { $implicit: element }\n    \"\n  ></ng-container>\n  }\n</ng-template>\n", dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i1$1.TitleCasePipe, name: "titlecase" }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i2.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i2.MatColumnDef, selector: "[matColumnDef]", inputs: ["matColumnDef"] }, { kind: "directive", type: i2.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i2.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i2.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i2.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i2.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatPaginatorModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dom-table', standalone: true, imports: [
                        CommonModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatIcon,
                        MatIconButton,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<table mat-table [dataSource]=\"dataSource()\" class=\"mat-elevation-z8\">\n  <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n\n  @for (column of tableColumns(); track $index) {\n\n  <ng-container [matColumnDef]=\"column.field\">\n    <th mat-header-cell *matHeaderCellDef>\n      {{ column.headerName | titlecase }}\n    </th>\n\n    @if(column.type !== 'actions') {\n\n    <td mat-cell *matCellDef=\"let element\">\n      @if( column.editable && rowModesModel()![element[idKey()]] === 'edit') {\n\n      <ng-container\n        *ngTemplateOutlet=\"formCell; context: { $implicit: element }\"\n      ></ng-container>\n\n      } @else { {{ element[column.field] }}}\n    </td>\n\n    } @else {\n    <td mat-cell *matCellDef=\"let element\">\n      <ng-container\n        *ngTemplateOutlet=\"actionCell; context: { $implicit: element }\"\n      ></ng-container>\n    </td>\n    }\n  </ng-container>\n\n  }\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns()\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns()\"></tr>\n</table>\n\n<ng-template #formCell let-element>\n  @if(formColumn()) {\n  <ng-container\n    *ngTemplateOutlet=\"formColumn()!.template; context: { $implicit: element }\"\n  ></ng-container>\n  }\n</ng-template>\n\n<ng-template #actionCell let-element>\n  @if(actionColumn()){\n\n  <ng-container\n    *ngTemplateOutlet=\"\n      actionColumn()!.template;\n      context: { $implicit: element }\n    \"\n  ></ng-container>\n  }\n</ng-template>\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ActionCellDirective, FormCellDirective, GridRowModes, TableActionCellComponent, TableComponent, TableFormCellComponent };
//# sourceMappingURL=dom.mjs.map
