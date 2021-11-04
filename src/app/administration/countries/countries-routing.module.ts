import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonUrls } from 'src/app/common-url';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import { MainCountriesComponent } from './main-countries.component';

const routes: Routes = [
  {
    path: '',
    component: MainCountriesComponent,
    //pathMatch: 'full',
    children: [
      {
        path: CommonUrls.COUNTRIES_LIST,
        component: ListCountriesComponent
      },
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
