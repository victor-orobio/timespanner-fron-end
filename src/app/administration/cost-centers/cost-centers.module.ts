import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostCentersRoutingModule } from './cost-centers-routing.module';
import { MainCostCentersComponent } from './main-cost-centers.component';
import { ListCostCentersComponent } from './list-cost-centers/list-cost-centers.component';
import { CreateCostCentersComponent } from './actions-cost-centers/create-cost-centers/create-cost-centers.component';
import { EditCostCentersComponent } from './actions-cost-centers/edit-cost-centers/edit-cost-centers.component';
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


@NgModule({
  declarations: [
    MainCostCentersComponent,
    ListCostCentersComponent,
    CreateCostCentersComponent,
    EditCostCentersComponent
  ],
  imports: [
    CommonModule,
    CostCentersRoutingModule,
    ToolbarModule,
    ButtonModule,
    FileUploadModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    CardModule,
    TimespannerSharedModule,
    ReactiveFormsModule,
    ConfirmDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CostCentersModule { }
