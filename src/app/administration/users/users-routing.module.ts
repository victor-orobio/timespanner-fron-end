import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonUrls } from 'src/app/common-url';
import { ListUsersComponent } from './list-users/list-users.component';
import { MainUsersComponent } from './main-users.component';

const routes: Routes = [
  {
    path: '',
    component: MainUsersComponent,
    //pathMatch: 'full',
    children: [
      {
        path: CommonUrls.USERS_LIST,
        component: ListUsersComponent
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
export class UsersRoutingModule { }
