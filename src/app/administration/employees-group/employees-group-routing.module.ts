import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonUrls } from 'src/app/common-url';
import { ActionsEmployeesGroupComponent } from './actions-employees-group/actions-employees-group.component';
import { ListEmployeesGroupComponent } from './list-employees-group/list-employees-group.component';
import { MainEmployeesGroupComponent } from './main-employees-group.component';

const routes: Routes = [
  {
    path: '',
    component: MainEmployeesGroupComponent,
    //pathMatch: 'full',
    children: [
      {
        path: CommonUrls.EMPLOYEES_GROUP_LIST,
        component: ListEmployeesGroupComponent
      },
      {
        path: CommonUrls.EMPLOYEES_GROUP_CREATE,
        component: ActionsEmployeesGroupComponent
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
export class EmployeesGroupRoutingModule { }
