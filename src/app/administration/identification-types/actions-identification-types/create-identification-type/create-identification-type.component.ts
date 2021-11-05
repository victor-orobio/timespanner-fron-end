import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Country } from 'src/app/administration/countries/model/country.model';
import { CountriesService } from 'src/app/administration/countries/services/countries.service';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { IdentificationType } from '../../model/identification-types.model';
import { IdentificationsTypesService } from '../../services/identifications-types.service';

@Component({
  selector: 'app-create-identification-type',
  templateUrl: './create-identification-type.component.html',
  styleUrls: ['./create-identification-type.component.scss']
})
export class CreateIdentificationTypeComponent implements OnInit {

  identificationTypesForm: FormGroup;
  countries:Country[] = [];
  //countrySelected:Country;

  constructor(
    public ref: DynamicDialogRef,
    private fm: FormBuilder,
    private identificationTypesService:IdentificationsTypesService,
    private countriesService:CountriesService,
    private toastService:ToastService
  ) {
    this.identificationTypesForm = this.fm.group({
      code: ['', [Validators.required]],
      description: ['', [Validators.required]],
      countryCode: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((data:any) => {
      this.countries = data._embedded['countries'];
    })
  }

  close(){
    this.ref.close();
  }

  createIdentificationType(){
    this.identificationTypesService.createIdentificationType(this.identificationTypesForm.value).subscribe((data:IdentificationType) => {
      this.ref.close(data);
      this.toastService.displayToast('success', 'Registro Creado Correctamente', 'Se ha agregado el tipo de Identificacion!');
    },(error:any) => {
      this.toastService.displayToast('error', 'Ocurrio un error', 'Ocurrio un error al intentar guardar, por favor vuelva a intentarlo o comuniquise con el administrador.')
    });
  }

}
