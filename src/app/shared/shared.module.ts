import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarComponent } from './components/snackbar/snackbar.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: []
})
export class SharedModule { }
