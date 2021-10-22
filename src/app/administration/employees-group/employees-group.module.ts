import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';

import { EmployeesGroupRoutingModule } from './employees-group-routing.module';
import { ListEmployeesGroupComponent } from './list-employees-group/list-employees-group.component';
import { MainEmployeesGroupComponent } from './main-employees-group.component';
import { CreateEmployeesGroupComponent } from './actions-employees-group/create-employees-group/create-employees-group.component';
import { EditEmployeesGroupComponent } from './actions-employees-group/edit-employees-group/edit-employees-group.component';
import { TimespannerSharedModule } from 'src/app/timespanner-shared/services/timespanner-shared.module';

@NgModule({
  declarations: [
    ListEmployeesGroupComponent,
    MainEmployeesGroupComponent,
    CreateEmployeesGroupComponent,
    EditEmployeesGroupComponent,

  ],
  imports: [
    CommonModule,
    EmployeesGroupRoutingModule,
    ToolbarModule,
    ButtonModule,
    FileUploadModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    CardModule,
    TimespannerSharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmployeesGroupModule { }
