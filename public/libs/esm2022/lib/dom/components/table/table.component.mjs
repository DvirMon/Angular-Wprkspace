import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, contentChild, input, signal, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { GridRowModes } from './models/gridRows';
import { ActionCellDirective } from './table-action-cell/table-cell-action.directive';
import { FormCellDirective } from './table-form-cell/table-cell-form.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/table";
export class TableComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: TableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.2", type: TableComponent, isStandalone: true, selector: "dom-table", inputs: { idKey: { classPropertyName: "idKey", publicName: "idKey", isSignal: true, isRequired: false, transformFunction: null }, dataSource: { classPropertyName: "dataSource", publicName: "dataSource", isSignal: true, isRequired: true, transformFunction: null }, columns: { classPropertyName: "columns", publicName: "columns", isSignal: true, isRequired: true, transformFunction: null }, editRow: { classPropertyName: "editRow", publicName: "editRow", isSignal: true, isRequired: false, transformFunction: null }, rowModesModel: { classPropertyName: "rowModesModel", publicName: "rowModesModel", isSignal: true, isRequired: false, transformFunction: null } }, queries: [{ propertyName: "actionColumn", first: true, predicate: ActionCellDirective, descendants: true, isSignal: true }, { propertyName: "formColumn", first: true, predicate: FormCellDirective, descendants: true, isSignal: true }], ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource()\" class=\"mat-elevation-z8\">\n  <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n\n  @for (column of tableColumns(); track $index) {\n\n  <ng-container [matColumnDef]=\"column.field\">\n    <th mat-header-cell *matHeaderCellDef>\n      {{ column.headerName | titlecase }}\n    </th>\n\n    @if(column.type !== 'actions') {\n\n    <td mat-cell *matCellDef=\"let element\">\n      @if( column.editable && rowModesModel()![element[idKey()]] === 'edit') {\n      @defer (when column.editable && rowModesModel()![element[idKey()]] ===\n      'edit') {\n\n      <ng-container\n        *ngTemplateOutlet=\"formCell; context: { $implicit: element }\"\n      ></ng-container>\n\n      } } @else { {{ element[column.field] }}}\n    </td>\n\n    } @else {\n    <td mat-cell *matCellDef=\"let element\">\n      <ng-container\n        *ngTemplateOutlet=\"actionCell; context: { $implicit: element }\"\n      ></ng-container>\n    </td>\n    }\n  </ng-container>\n\n  }\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns()\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns()\"></tr>\n</table>\n\n<ng-template #formCell let-element>\n  @if(formColumn()) {\n  <ng-container\n    *ngTemplateOutlet=\"formColumn()!.template; context: { $implicit: element }\"\n  ></ng-container>\n  }\n</ng-template>\n\n<ng-template #actionCell let-element>\n  @if(actionColumn()){\n\n  <ng-container\n    *ngTemplateOutlet=\"\n      actionColumn()!.template;\n      context: { $implicit: element }\n    \"\n  ></ng-container>\n  }\n</ng-template>\n", dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i1.TitleCasePipe, name: "titlecase" }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i2.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i2.MatColumnDef, selector: "[matColumnDef]", inputs: ["matColumnDef"] }, { kind: "directive", type: i2.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i2.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i2.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i2.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i2.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatPaginatorModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dom-table', standalone: true, imports: [
                        CommonModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatIcon,
                        MatIconButton,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<table mat-table [dataSource]=\"dataSource()\" class=\"mat-elevation-z8\">\n  <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n\n  @for (column of tableColumns(); track $index) {\n\n  <ng-container [matColumnDef]=\"column.field\">\n    <th mat-header-cell *matHeaderCellDef>\n      {{ column.headerName | titlecase }}\n    </th>\n\n    @if(column.type !== 'actions') {\n\n    <td mat-cell *matCellDef=\"let element\">\n      @if( column.editable && rowModesModel()![element[idKey()]] === 'edit') {\n      @defer (when column.editable && rowModesModel()![element[idKey()]] ===\n      'edit') {\n\n      <ng-container\n        *ngTemplateOutlet=\"formCell; context: { $implicit: element }\"\n      ></ng-container>\n\n      } } @else { {{ element[column.field] }}}\n    </td>\n\n    } @else {\n    <td mat-cell *matCellDef=\"let element\">\n      <ng-container\n        *ngTemplateOutlet=\"actionCell; context: { $implicit: element }\"\n      ></ng-container>\n    </td>\n    }\n  </ng-container>\n\n  }\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns()\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns()\"></tr>\n</table>\n\n<ng-template #formCell let-element>\n  @if(formColumn()) {\n  <ng-container\n    *ngTemplateOutlet=\"formColumn()!.template; context: { $implicit: element }\"\n  ></ng-container>\n  }\n</ng-template>\n\n<ng-template #actionCell let-element>\n  @if(actionColumn()){\n\n  <ng-container\n    *ngTemplateOutlet=\"\n      actionColumn()!.template;\n      context: { $implicit: element }\n    \"\n  ></ng-container>\n  }\n</ng-template>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9zcmMvbGliL2RvbS9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvc3JjL2xpYi9kb20vY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBR1QsUUFBUSxFQUNSLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7QUFlaEYsTUFBTSxPQUFPLGNBQWM7SUFiM0I7UUFjUyxpQkFBWSxHQUFHLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRWpELGVBQVUsR0FBRyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVwRCxVQUFLLEdBQUcsS0FBSyxDQUFTLElBQUksQ0FBQyxDQUFDO1FBRTVCLGVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFPLENBQUM7UUFFbkMsWUFBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQW9CLENBQUM7UUFFN0MsWUFBTyxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUVoQyxrQkFBYSxHQUFHLEtBQUssQ0FBa0MsRUFBRSxDQUFDLENBQUM7UUFFM0Qsc0JBQWlCLEdBQXlDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDdEUsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDM0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwRCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0QsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDLEVBQUUsRUFBa0MsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBRWEsaUJBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMxQyxxQkFBZ0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUVoRCxhQUFRLEdBQStDLE1BQU0sQ0FDM0UsRUFBRSxDQUNILENBQUM7S0F1Qkg7SUFyQkMsbUJBQW1CO1FBQ2pCLE9BQU8sUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUNuQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFL0IsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDbkMsQ0FBQyxDQUFDO29CQUNFLEdBQUcsT0FBTztvQkFDVjt3QkFDRSxLQUFLLEVBQUUsU0FBUzt3QkFDaEIsSUFBSSxFQUFFLFNBQVM7cUJBQ0U7aUJBQ3BCO2dCQUNILENBQUMsQ0FBQyxPQUFPLENBQUM7WUFFWixPQUFPLGNBQWMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxQkFBcUI7UUFDbkIsT0FBTyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs4R0FuRFUsY0FBYztrR0FBZCxjQUFjLG93QkFDVSxtQkFBbUIsNkZBRXJCLGlCQUFpQixnRUNyQ3BELGdxREEyREEsMkNEbENJLFlBQVksa1FBQ1osY0FBYyxzZ0NBQ2Qsa0JBQWtCOzsyRkFPVCxjQUFjO2tCQWIxQixTQUFTOytCQUNFLFdBQVcsY0FDVCxJQUFJLFdBQ1A7d0JBQ1AsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsT0FBTzt3QkFDUCxhQUFhO3FCQUNkLG1CQUVnQix1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIFNpZ25hbCxcbiAgV3JpdGFibGVTaWduYWwsXG4gIGNvbXB1dGVkLFxuICBjb250ZW50Q2hpbGQsXG4gIGlucHV0LFxuICBzaWduYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0SWNvbkJ1dHRvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBHcmlkQmFzZUNvbERlZiB9IGZyb20gJy4vbW9kZWxzL2dyaWRDb2xEZWYnO1xuaW1wb3J0IHsgR3JpZFJvd01vZGVzIH0gZnJvbSAnLi9tb2RlbHMvZ3JpZFJvd3MnO1xuaW1wb3J0IHsgQWN0aW9uQ2VsbERpcmVjdGl2ZSB9IGZyb20gJy4vdGFibGUtYWN0aW9uLWNlbGwvdGFibGUtY2VsbC1hY3Rpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IEZvcm1DZWxsRGlyZWN0aXZlIH0gZnJvbSAnLi90YWJsZS1mb3JtLWNlbGwvdGFibGUtY2VsbC1mb3JtLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvbS10YWJsZScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdEljb24sXG4gICAgTWF0SWNvbkJ1dHRvbixcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50PFQ+IHtcbiAgcHVibGljIGFjdGlvbkNvbHVtbiA9IGNvbnRlbnRDaGlsZChBY3Rpb25DZWxsRGlyZWN0aXZlKTtcblxuICBwdWJsaWMgZm9ybUNvbHVtbiA9IGNvbnRlbnRDaGlsZChGb3JtQ2VsbERpcmVjdGl2ZSk7XG5cbiAgaWRLZXkgPSBpbnB1dDxzdHJpbmc+KCdpZCcpO1xuXG4gIGRhdGFTb3VyY2UgPSBpbnB1dC5yZXF1aXJlZDxUW10+KCk7XG5cbiAgY29sdW1ucyA9IGlucHV0LnJlcXVpcmVkPEdyaWRCYXNlQ29sRGVmW10+KCk7XG5cbiAgZWRpdFJvdyA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcblxuICByb3dNb2Rlc01vZGVsID0gaW5wdXQ8eyBba2V5OiBzdHJpbmddOiBHcmlkUm93TW9kZXMgfT4oe30pO1xuXG4gIHJvd0Zvcm1Hcm91cE1vZGVsOiBTaWduYWw8eyBba2V5OiBzdHJpbmddOiBGb3JtR3JvdXAgfT4gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMucm93TW9kZXNNb2RlbCgpKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICBpZiAodGhpcy5yb3dNb2Rlc01vZGVsKClba2V5XSA9PT0gR3JpZFJvd01vZGVzLkVkaXQpIHtcbiAgICAgICAgYWNjW2tleV0gPSBuZXcgRm9ybUdyb3VwKHt9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgeyBba2V5OiBzdHJpbmddOiBGb3JtR3JvdXAgfSk7XG4gIH0pO1xuXG4gIHB1YmxpYyByZWFkb25seSB0YWJsZUNvbHVtbnMgPSB0aGlzLmNvbXB1dGVUYWJsZUNvbHVtbnMoKTtcbiAgcHVibGljIHJlYWRvbmx5IGRpc3BsYXllZENvbHVtbnMgPSB0aGlzLmNvbXB1dGVEaXNwbGF5Q29sdW1ucygpO1xuXG4gIHB1YmxpYyByZWFkb25seSBzaG93RWRpdDogV3JpdGFibGVTaWduYWw8eyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0+ID0gc2lnbmFsKFxuICAgIHt9XG4gICk7XG5cbiAgY29tcHV0ZVRhYmxlQ29sdW1ucygpIHtcbiAgICByZXR1cm4gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY29sdW1ucyA9IHRoaXMuY29sdW1ucygpO1xuXG4gICAgICBjb25zdCB3aXRoRWRpdENvbHVtbiA9IHRoaXMuZWRpdFJvdygpXG4gICAgICAgID8gW1xuICAgICAgICAgICAgLi4uY29sdW1ucyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdhY3Rpb25zJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2FjdGlvbnMnLFxuICAgICAgICAgICAgfSBhcyBHcmlkQmFzZUNvbERlZixcbiAgICAgICAgICBdXG4gICAgICAgIDogY29sdW1ucztcblxuICAgICAgcmV0dXJuIHdpdGhFZGl0Q29sdW1uO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcHV0ZURpc3BsYXlDb2x1bW5zKCkge1xuICAgIHJldHVybiBjb21wdXRlZCgoKSA9PiB0aGlzLnRhYmxlQ29sdW1ucygpLm1hcCgoY29sdW1uKSA9PiBjb2x1bW4uZmllbGQpKTtcbiAgfVxufVxuIiwiPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlKClcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgPCEtLS0gTm90ZSB0aGF0IHRoZXNlIGNvbHVtbnMgY2FuIGJlIGRlZmluZWQgaW4gYW55IG9yZGVyLlxuICAgICAgICAgICAgICBUaGUgYWN0dWFsIHJlbmRlcmVkIGNvbHVtbnMgYXJlIHNldCBhcyBhIHByb3BlcnR5IG9uIHRoZSByb3cgZGVmaW5pdGlvblwiIC0tPlxuXG4gIEBmb3IgKGNvbHVtbiBvZiB0YWJsZUNvbHVtbnMoKTsgdHJhY2sgJGluZGV4KSB7XG5cbiAgPG5nLWNvbnRhaW5lciBbbWF0Q29sdW1uRGVmXT1cImNvbHVtbi5maWVsZFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+XG4gICAgICB7eyBjb2x1bW4uaGVhZGVyTmFtZSB8IHRpdGxlY2FzZSB9fVxuICAgIDwvdGg+XG5cbiAgICBAaWYoY29sdW1uLnR5cGUgIT09ICdhY3Rpb25zJykge1xuXG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj5cbiAgICAgIEBpZiggY29sdW1uLmVkaXRhYmxlICYmIHJvd01vZGVzTW9kZWwoKSFbZWxlbWVudFtpZEtleSgpXV0gPT09ICdlZGl0Jykge1xuICAgICAgQGRlZmVyICh3aGVuIGNvbHVtbi5lZGl0YWJsZSAmJiByb3dNb2Rlc01vZGVsKCkhW2VsZW1lbnRbaWRLZXkoKV1dID09PVxuICAgICAgJ2VkaXQnKSB7XG5cbiAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmb3JtQ2VsbDsgY29udGV4dDogeyAkaW1wbGljaXQ6IGVsZW1lbnQgfVwiXG4gICAgICA+PC9uZy1jb250YWluZXI+XG5cbiAgICAgIH0gfSBAZWxzZSB7IHt7IGVsZW1lbnRbY29sdW1uLmZpZWxkXSB9fX1cbiAgICA8L3RkPlxuXG4gICAgfSBAZWxzZSB7XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj5cbiAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJhY3Rpb25DZWxsOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogZWxlbWVudCB9XCJcbiAgICAgID48L25nLWNvbnRhaW5lcj5cbiAgICA8L3RkPlxuICAgIH1cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgfVxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1ucygpXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnMoKVwiPjwvdHI+XG48L3RhYmxlPlxuXG48bmctdGVtcGxhdGUgI2Zvcm1DZWxsIGxldC1lbGVtZW50PlxuICBAaWYoZm9ybUNvbHVtbigpKSB7XG4gIDxuZy1jb250YWluZXJcbiAgICAqbmdUZW1wbGF0ZU91dGxldD1cImZvcm1Db2x1bW4oKSEudGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBlbGVtZW50IH1cIlxuICA+PC9uZy1jb250YWluZXI+XG4gIH1cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjYWN0aW9uQ2VsbCBsZXQtZWxlbWVudD5cbiAgQGlmKGFjdGlvbkNvbHVtbigpKXtcblxuICA8bmctY29udGFpbmVyXG4gICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJcbiAgICAgIGFjdGlvbkNvbHVtbigpIS50ZW1wbGF0ZTtcbiAgICAgIGNvbnRleHQ6IHsgJGltcGxpY2l0OiBlbGVtZW50IH1cbiAgICBcIlxuICA+PC9uZy1jb250YWluZXI+XG4gIH1cbjwvbmctdGVtcGxhdGU+XG4iXX0=