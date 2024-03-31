import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef
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
