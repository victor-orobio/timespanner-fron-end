import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonUrls } from 'src/app/common-url';
import { ListCitiesComponent } from './list-cities/list-cities.component';
import { MainCitiesComponent } from './main-cities.component';

const routes: Routes = [
  {
    path: '',
    component: MainCitiesComponent,
    //pathMatch: 'full',
    children: [
      {
        path: CommonUrls.CITIES_LIST,
        component: ListCitiesComponent
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
export class CitiesRoutingModule { }
