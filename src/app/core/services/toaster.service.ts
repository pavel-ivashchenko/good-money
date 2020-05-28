
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MAT_SNACKBAR_DURATION, ToastTypes } from '@app/shared/constants';
import { ToastComponent } from '@app/shared/components';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private snackBar: MatSnackBar) { }

  public pop(msg: string, type = ToastTypes.info, duration = MAT_SNACKBAR_DURATION): void {
    this.snackBar.openFromComponent(ToastComponent, { duration, data: { msg, type } });
  }
  
}
