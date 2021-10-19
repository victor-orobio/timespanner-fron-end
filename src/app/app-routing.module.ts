import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonUrls } from './common-url';

const routes: Routes = [
  {
    path: CommonUrls.NONE,
    redirectTo: CommonUrls.HOME,
    pathMatch: 'full'
  },
  {
    path: CommonUrls.HOME,
    loadChildren: () => import('./home/home.module').then((module) => module.HomeModule),
    //canDeactivate: [SaveFormVerficationGuard],
  },
  {
    path: CommonUrls.EMPLOYEES_GROUP,
    loadChildren: () => import('./administration/employees-group/employees-group.module').then((module) => module.EmployeesGroupModule),
    //canDeactivate: [SaveFormVerficationGuard],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
