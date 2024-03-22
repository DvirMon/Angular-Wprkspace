export enum DialogType {
  ERROR = 'error',
  INFO = 'info',
  CONFIRM = 'confirm',
}


export interface DialogData {
  type: DialogType;
  message: string;
  deniable: boolean;
}

