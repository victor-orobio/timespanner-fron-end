import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities-routing.module';
import { MainCitiesComponent } from './main-cities.component';
import { ListCitiesComponent } from './list-cities/list-cities.component';
import { CreateCityComponent } from './actions-cities/create-city/create-city.component';
import { EditCityComponent } from './actions-cities/edit-city/edit-city.component';
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
    MainCitiesComponent,
    ListCitiesComponent,
    CreateCityComponent,
    EditCityComponent
  ],
  imports: [
    CommonModule,
    CitiesRoutingModule,
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
export class CitiesModule { }
