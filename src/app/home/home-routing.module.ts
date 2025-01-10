import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { LoginComponent } from './login/login.component';
import { StacksPageComponent } from './stacks-page/stacks-page.component';
import { ProjectsLandingComponent } from './projects-landing/projects-landing.component';

const routes: Routes = [
  {
    path: 'instances',
    component: HomeLandingComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'stacks',
    component: StacksPageComponent
  },
  {
    path: 'projects',
    component: ProjectsLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
