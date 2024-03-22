import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogComponent } from './dialog.component';
import { DialogType } from './message';

@Injectable({ providedIn: 'root' })
export class MessageService {
  #dialog = inject(MatDialog);

  info(message: string) {
    return this.openDialog(message, DialogType.INFO);
  }

  error(message: string) {
    return this.openDialog(message, DialogType.ERROR);
  }

  confirm(message: string): Observable<boolean> {
    return this.openDialog(message, DialogType.CONFIRM);
  }

  private openDialog(message: string, type: string, deniable = false) {
    return this.#dialog
      .open(DialogComponent, {
        disableClose: true,
        hasBackdrop: true,
        panelClass: type,
        data: {
          type,
          message,
          deniable,
        },
      })
      .afterClosed();
  }
}
