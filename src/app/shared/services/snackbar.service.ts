import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(data: {
    message: string;
    type: 'error' | 'info' | 'warn' | 'success';
  }) {

    if (data.message && data.type === 'error') {
      if (data.message.includes('User already exists')) { }
      else data.message = 'Something went wrong'
    }

    this.snackBar.openFromComponent(SnackbarComponent, {
      data: data,
      duration: 3000,
    });
  }
}
