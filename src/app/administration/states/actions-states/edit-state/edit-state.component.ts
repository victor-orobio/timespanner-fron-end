import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Country } from 'src/app/administration/countries/model/country.model';
import { CountriesService } from 'src/app/administration/countries/services/countries.service';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { State } from '../../model/state.model';
import { StatesService } from '../../services/states.service';

@Component({
  selector: 'app-edit-state',
  templateUrl: './edit-state.component.html',
  styleUrls: ['./edit-state.component.scss']
})
export class EditStateComponent implements OnInit {

  stateForm: FormGroup;
  state:State = {};
  countries:Country[] = [];
  countryCode?:string = '';

  constructor(
    public ref: DynamicDialogRef,
    private fm: FormBuilder,
    private statesService:StatesService,
    private countriesService:CountriesService,
    private toastService:ToastService,
    private dialogService: DynamicDialogConfig
  ) {
    this.state = this.dialogService.data;

    this.stateForm = this.fm.group({
      code: [this.state.code, [Validators.required]],
      name: [this.state.name, [Validators.required]],
      countryCode: [this.state.countryCode, [Validators.required]]
    });


  }

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((data:any) => {
      this.countries = data._embedded['countries'];

      this.stateForm.get('countryCode')?.setValue(this.countries.find(country => country.code === this.state.countryCode))
    });
  }

  close(){
    this.ref.close();
  }

  editState(){
    this.state.code = this.stateForm.value.code;
    this.state.name = this.stateForm.value.name;
    this.state.countryCode = this.stateForm.value.countryCode.code;

    this.statesService.editState(this.state).subscribe((data:State) => {
      this.ref.close(data);
      this.toastService.displayToast('success', 'Registro Editado Correctamente', 'Se ha editado el Departamento');
    },(error:any) => {
      this.ref.close();
      this.toastService.displayToast('error', 'Ocurrio un error', 'Ocurrio un error al intentar guardar, por favor vuelve a intentarlo o comuniquese con el administrador')
    })
  }

}
