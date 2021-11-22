import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Country } from 'src/app/administration/countries/model/country.model';
import { CountriesService } from 'src/app/administration/countries/services/countries.service';
import { State } from 'src/app/administration/states/model/state.model';
import { StatesService } from 'src/app/administration/states/services/states.service';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { City } from '../../model/city.model';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.scss']
})
export class EditCityComponent implements OnInit {

  cityForm: FormGroup;
  countries:Country[] = [];
  states:State[] = [];
  disableState:boolean = true;
  city:City = {};

  constructor(
    public ref: DynamicDialogRef,
    private fm: FormBuilder,
    private statesService:StatesService,
    private countriesService:CountriesService,
    private citiesService:CitiesService,
    private toastService:ToastService,
    private dialogService: DynamicDialogConfig
  ) {
    this.city = this.dialogService.data;

    this.cityForm = this.fm.group({
      code: [this.city.code, [Validators.required]],
      name: [this.city.name, [Validators.required]],
      countryCode: [this.city.countryCode, [Validators.required]],
      estateCode: [this.city.estateCode, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((data:any) => {
      this.countries = data._embedded['countries'];

      this.cityForm.get('countryCode')?.setValue(this.countries.find(country => country.code === this.city.countryCode))
    });

    this.statesService.getStateByCountry(this.dialogService.data.countryCode).subscribe((data:any) => {
      this.states = data._embedded['estates'];

      this.cityForm.get('estateCode')?.setValue(this.states.find(estate => estate.countryCode === this.city.countryCode))
    });
  }

  loadStates(){
    this.statesService.getStateByCountry(this.cityForm.value.countryCode.code).subscribe((data:any) => {
      this.states = data._embedded['estates'];
      this.cityForm.get('estateCode')?.enable();
    })
  }

  close(){
    this.ref.close();
  }

  editCity(){
    this.city.code = this.cityForm.value.code;
    this.city.name = this.cityForm.value.name;
    this.city.countryCode = this.cityForm.value.countryCode.code;
    this.city.estateCode = this.cityForm.value.estateCode.code;

    this.citiesService.editCity(this.city).subscribe((data:City) => {
      this.ref.close(data);
      this.toastService.displayToast('success', 'Registro Editado Correctamente', 'Se ha editado la Ciudad');
    },(error:any) => {
      this.ref.close();
      this.toastService.displayToast('error', 'Ocurrio un error', 'Ocurrio un error al intentar guardar, por favor vuelve a intentarlo o comuniquese con el administrador')
    })
  }

}
