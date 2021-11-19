import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonUrls } from 'src/app/common-url';
import { ListOperativeCentersComponent } from './list-operative-centers/list-operative-centers.component';
import { MainOperativeCentersComponent } from './main-operative-centers.component';

const routes: Routes = [
  {
    path: '',
    component: MainOperativeCentersComponent,
    //pathMatch: 'full',
    children: [
      {
        path: CommonUrls.OPERATIVE_CENTER_LIST,
        component: ListOperativeCentersComponent
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
export class OperativeCentersRoutingModule { }
