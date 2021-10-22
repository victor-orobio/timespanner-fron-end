import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonUrls } from 'src/app/common-url';
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
