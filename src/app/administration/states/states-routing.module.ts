import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonUrls } from 'src/app/common-url';
import { ListStatesComponent } from './list-states/list-states.component';
import { MainStatesComponent } from './main-states.component';

const routes: Routes = [
  {
    path: '',
    component: MainStatesComponent,
    //pathMatch: 'full',
    children: [
      {
        path: CommonUrls.ESTATES_LIST,
        component: ListStatesComponent
      },
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatesRoutingModule { }
