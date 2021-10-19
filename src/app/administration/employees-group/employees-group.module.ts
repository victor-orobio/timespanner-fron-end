import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';

import { EmployeesGroupRoutingModule } from './employees-group-routing.module';
import { ListEmployeesGroupComponent } from './list-employees-group/list-employees-group.component';
import { ActionsEmployeesGroupComponent } from './actions-employees-group/actions-employees-group.component';
import { MainEmployeesGroupComponent } from './main-employees-group.component';


@NgModule({
  declarations: [
    ListEmployeesGroupComponent,
    ActionsEmployeesGroupComponent,
    MainEmployeesGroupComponent
  ],
  imports: [
    CommonModule,
    EmployeesGroupRoutingModule,
    ToolbarModule,
    ButtonModule,
    FileUploadModule,
    HttpClientModule,
    TableModule,
    InputTextModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmployeesGroupModule { }
