import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { ProbeplusModule } from '../probeplus/probeplus.module';
import { MatIconModule } from '@angular/material/icon';
import { LaunchInstanceComponent } from './dailog/launch-instance/launch-instance.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    LoginComponent,
    HomeLandingComponent,
    LaunchInstanceComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    ProbeplusModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatSnackBarModule
  ]
})
export class HomeModule { }
