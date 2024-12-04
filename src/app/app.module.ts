import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProbeplusModule } from './probeplus/probeplus.module';
import { TranslateStore } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './home/navbar/navbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarComponent } from './shared/components/snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [TranslateStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
