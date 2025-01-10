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
import { StacksPageComponent } from './stacks-page/stacks-page.component';
import { ViewStacksComponent } from './dailog/view-stacks/view-stacks.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ViewLogsComponent } from './dailog/view-logs/view-logs.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfirmationPopupComponent } from './dailog/confirmation-popup/confirmation-popup.component';
import { ProjectsLandingComponent } from './projects-landing/projects-landing.component';
import { CreateProjectComponent } from './dailog/create-project/create-project.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeLandingComponent,
    LaunchInstanceComponent,
    NavbarComponent,
    StacksPageComponent,
    ViewStacksComponent,
    ViewLogsComponent,
    ConfirmationPopupComponent,
    ProjectsLandingComponent,
    CreateProjectComponent
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
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ]
})
export class HomeModule { }
