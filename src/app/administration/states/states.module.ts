import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatesRoutingModule } from './states-routing.module';
import { MainStatesComponent } from './main-states.component';
import { ListStatesComponent } from './list-states/list-states.component';
import { CreateStateComponent } from './actions-states/create-state/create-state.component';
import { EditStateComponent } from './actions-states/edit-state/edit-state.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TimespannerSharedModule } from 'src/app/timespanner-shared/services/timespanner-shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    MainStatesComponent,
    ListStatesComponent,
    CreateStateComponent,
    EditStateComponent
  ],
  imports: [
    CommonModule,
    StatesRoutingModule,
    ToolbarModule,
    ButtonModule,
    FileUploadModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    CardModule,
    TimespannerSharedModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    DropdownModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StatesModule { }
