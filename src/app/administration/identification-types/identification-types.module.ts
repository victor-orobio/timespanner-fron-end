import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentificationTypesRoutingModule } from './identification-types-routing.module';
import { MainIdentificationTypesComponent } from './main-identification-types.component';
import { CreateIdentificationTypeComponent } from './actions-identification-types/create-identification-type/create-identification-type.component';
import { EditIdentificationTypeComponent } from './actions-identification-types/edit-identification-type/edit-identification-type.component';
import { ListIdentificationTypesComponent } from './list-identification-types/list-identification-types.component';
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
    MainIdentificationTypesComponent,
    CreateIdentificationTypeComponent,
    EditIdentificationTypeComponent,
    ListIdentificationTypesComponent
  ],
  imports: [
    CommonModule,
    IdentificationTypesRoutingModule,
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
export class IdentificationTypesModule { }
