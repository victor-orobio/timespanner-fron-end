import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Country } from 'src/app/administration/countries/model/country.model';
import { CountriesService } from 'src/app/administration/countries/services/countries.service';
import { State } from 'src/app/administration/states/model/state.model';
import { StatesService } from 'src/app/administration/states/services/states.service';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { City } from '../../model/city.model';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.scss']
})
export class CreateCityComponent implements OnInit {

  cityForm: FormGroup;
  countries:Country[] = [];
  states:State[] = [];
  disableState:boolean = true;

  constructor(
    public ref: DynamicDialogRef,
    private fm: FormBuilder,
    private statesService:StatesService,
    private countriesService:CountriesService,
    private citiesService:CitiesService,
    private toastService:ToastService
  ) {
    this.cityForm = this.fm.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      estateCode: [{value:'', disabled: true}, Validators.required],
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

  loadStates(){
    this.statesService.getStateByCountry(this.cityForm.value.countryCode.code).subscribe((data:any) => {
      this.states = data._embedded['estates'];
      this.cityForm.get('estateCode')?.enable();
    })
  }

  createCity(){
    this.cityForm.value.countryCode = this.cityForm.value.countryCode.code;
    this.cityForm.value.estateCode = this.cityForm.value.estateCode.code;

    this.citiesService.createCity(this.cityForm.value).subscribe((data:State) => {
      this.ref.close(data);
      this.toastService.displayToast('success', 'Registro Creado Correctamente', 'Se ha agregado la Ciudad!');
    },(error:any) => {
      this.toastService.displayToast('error', 'Ocurrio un error', 'Ocurrio un error al intentar guardar, por favor vuelva a intentarlo o comuniquise con el administrador.')
    });
  }

}
