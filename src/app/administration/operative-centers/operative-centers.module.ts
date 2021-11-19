import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainOperativeCentersComponent } from './main-operative-centers.component';
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
import { CreateOperativeCenterComponent } from './actions-operative-centers/create-operative-center/create-operative-center.component';
import { EditOperativeCenterComponent } from './actions-operative-centers/edit-operative-center/edit-operative-center.component';
import { ListOperativeCentersComponent } from './list-operative-centers/list-operative-centers.component';
import { OperativeCentersRoutingModule } from './operative-centers-routing.module';



@NgModule({
  declarations: [
    MainOperativeCentersComponent,
    ListOperativeCentersComponent,    
    CreateOperativeCenterComponent,
    EditOperativeCenterComponent
  ],
  imports: [
    CommonModule,
    OperativeCentersRoutingModule,
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OperativeCentersModule { }
