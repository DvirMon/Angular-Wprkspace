import { Signal, WritableSignal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GridBaseColDef } from './models/gridColDef';
import { GridRowModes } from './models/gridRows';
import { ActionCellDirective } from './table-action-cell/table-cell-action.directive';
import { FormCellDirective } from './table-form-cell/table-cell-form.directive';
import * as i0 from "@angular/core";
export declare class TableComponent<T> {
    actionColumn: Signal<ActionCellDirective | undefined>;
    formColumn: Signal<FormCellDirective | undefined>;
    idKey: import("@angular/core").InputSignal<string>;
    dataSource: import("@angular/core").InputSignal<T[]>;
    columns: import("@angular/core").InputSignal<GridBaseColDef<import("./models/gridRows").GridValidRowModel, unknown, unknown>[]>;
    editRow: import("@angular/core").InputSignal<boolean>;
    rowModesModel: import("@angular/core").InputSignal<{
        [key: string]: GridRowModes;
    }>;
    rowFormGroupModel: Signal<{
        [key: string]: FormGroup;
    }>;
    readonly tableColumns: Signal<GridBaseColDef<import("./models/gridRows").GridValidRowModel, unknown, unknown>[]>;
    readonly displayedColumns: Signal<string[]>;
    readonly showEdit: WritableSignal<{
        [key: string]: boolean;
    }>;
    computeTableColumns(): Signal<GridBaseColDef<import("./models/gridRows").GridValidRowModel, unknown, unknown>[]>;
    computeDisplayColumns(): Signal<string[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent<any>, "dom-table", never, { "idKey": { "alias": "idKey"; "required": false; "isSignal": true; }; "dataSource": { "alias": "dataSource"; "required": true; "isSignal": true; }; "columns": { "alias": "columns"; "required": true; "isSignal": true; }; "editRow": { "alias": "editRow"; "required": false; "isSignal": true; }; "rowModesModel": { "alias": "rowModesModel"; "required": false; "isSignal": true; }; }, {}, ["actionColumn", "formColumn"], never, true, never>;
}
