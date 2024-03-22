import { ComponentType } from '@angular/cdk/portal';
import { Inject, Injectable, inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  // open spinner dialog
  public openDialog<T>(
    component: ComponentType<T>,
    data: unknown
  ): MatDialogRef<T, unknown> {
    return this.dialog.open<T>(component, this.setConfig(data));
  }

  private setConfig(data?: unknown): MatDialogConfig {
    return {
      data,
      autoFocus: true,
      hasBackdrop: true,
      disableClose: true,
      panelClass: 'dialog',
    };
  }
}
