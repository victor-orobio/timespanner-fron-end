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
  },
  {
    path: CommonUrls.COUNTRIES,
    loadChildren: () => import('./administration/countries/countries.module').then((module) => module.CountriesModule),
    //canDeactivate: [SaveFormVerficationGuard],
  },
  {
    path: CommonUrls.COST_CENTERS,
    loadChildren: () => import('./administration/cost-centers/cost-centers.module').then((module) => module.CostCentersModule),
    //canDeactivate: [SaveFormVerficationGuard],
  },
  {
    path: CommonUrls.IDENTIFICATION_TYPES,
    loadChildren: () => import('./administration/identification-types/identification-types.module').then((module) => module.IdentificationTypesModule),
    //canDeactivate: [SaveFormVerficationGuard],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
