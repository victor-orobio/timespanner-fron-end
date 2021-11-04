import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonUrls } from 'src/app/common-url';
import { ListCostCentersComponent } from './list-cost-centers/list-cost-centers.component';
import { MainCostCentersComponent } from './main-cost-centers.component';

const routes: Routes = [{
  path: '',
    component: MainCostCentersComponent,
    //pathMatch: 'full',
    children: [
      {
        path: CommonUrls.COST_CENTERS_LIST,
        component: ListCostCentersComponent
      },
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostCentersRoutingModule { }
