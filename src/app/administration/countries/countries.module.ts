import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCountrieComponent } from './actions-countries/edit-countrie/edit-countrie.component';
import { CreateCountrieComponent } from './actions-countries/create-countrie/create-countrie.component';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import { MainCountriesComponent } from './main-countries.component';
import { CountriesRoutingModule } from './countries-routing.module';
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
    EditCountrieComponent,
    CreateCountrieComponent,
    ListCountriesComponent,
    MainCountriesComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
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
export class CountriesModule { }
