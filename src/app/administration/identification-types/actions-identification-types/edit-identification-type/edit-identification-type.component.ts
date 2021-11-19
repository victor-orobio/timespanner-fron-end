import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Country } from 'src/app/administration/countries/model/country.model';
import { CountriesService } from 'src/app/administration/countries/services/countries.service';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { IdentificationType } from '../../model/identification-types.model';
import { IdentificationsTypesService } from '../../services/identifications-types.service';

@Component({
  selector: 'app-edit-identification-type',
  templateUrl: './edit-identification-type.component.html',
  styleUrls: ['./edit-identification-type.component.scss']
})
export class EditIdentificationTypeComponent implements OnInit {

  identificationTypesForm: FormGroup;
  identificationType:IdentificationType = {};
  countries:Country[] = [];
  countryCode?:string = '';

  constructor(
    public ref: DynamicDialogRef,
    private fm: FormBuilder,
    private identificationTypesService:IdentificationsTypesService,
    private countriesService:CountriesService,
    private toastService:ToastService,
    private dialogService: DynamicDialogConfig
  ) {
    this.identificationType = this.dialogService.data;
    this.countryCode = this.identificationType.countryCode;

    this.identificationTypesForm = this.fm.group({
      code: [this.identificationType.code, [Validators.required]],
      description: [this.identificationType.description, [Validators.required]],
      countryCode: [this.identificationType.countryCode, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((data:any) => {
      this.countries = data._embedded['countries'];

      this.identificationTypesForm.get('countryCode')?.setValue(this.countries.find(country => country.code === this.identificationType.countryCode))
    });
  }

  close(){
    this.ref.close();
  }

  editIdentificacionType(){
    this.identificationType.code = this.identificationTypesForm.value.code;
    this.identificationType.description = this.identificationTypesForm.value.description;
    this.identificationType.countryCode = this.identificationTypesForm.value.countryCode.code;
    
    this.identificationTypesService.editIdentificationType(this.identificationType).subscribe((data:IdentificationType) => {
      this.ref.close(data);
      this.toastService.displayToast('success', 'Registro Editado Correctamente', 'Se ha editado el tipo de identificacion correctamente');
    },(error:any) => {
      this.toastService.displayToast('error', 'Ocurrio un error', 'Ocurrio un error al intentar guardar, por favor vuelve a intentarlo o comuniquese con el administrador')
    })
  }

}
