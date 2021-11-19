import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Country } from 'src/app/administration/countries/model/country.model';
import { CountriesService } from 'src/app/administration/countries/services/countries.service';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { State } from '../../model/state.model';
import { StatesService } from '../../services/states.service';

@Component({
  selector: 'app-create-state',
  templateUrl: './create-state.component.html',
  styleUrls: ['./create-state.component.scss']
})
export class CreateStateComponent implements OnInit {

  stateForm: FormGroup;
  countries:Country[] = [];

  constructor(
    public ref: DynamicDialogRef,
    private fm: FormBuilder,
    private statesService:StatesService,
    private countriesService:CountriesService,
    private toastService:ToastService
  ) { 
    this.stateForm = this.fm.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
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

  createState(){
    this.stateForm.value.countryCode = this.stateForm.value.countryCode.code;
    
    this.statesService.createState(this.stateForm.value).subscribe((data:State) => {
      this.ref.close(data);
      this.toastService.displayToast('success', 'Registro Creado Correctamente', 'Se ha agregado el Departamento!');
    },(error:any) => {
      this.toastService.displayToast('error', 'Ocurrio un error', 'Ocurrio un error al intentar guardar, por favor vuelva a intentarlo o comuniquise con el administrador.')
    });
  }

}
