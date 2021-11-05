import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonUrls } from 'src/app/common-url';
import { ListIdentificationTypesComponent } from './list-identification-types/list-identification-types.component';
import { MainIdentificationTypesComponent } from './main-identification-types.component';

const routes: Routes = [
  {
    path: '',
    component: MainIdentificationTypesComponent,
    //pathMatch: 'full',
    children: [
      {
        path: CommonUrls.COUNTRIES_LIST,
        component: ListIdentificationTypesComponent
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
export class IdentificationTypesRoutingModule { }
