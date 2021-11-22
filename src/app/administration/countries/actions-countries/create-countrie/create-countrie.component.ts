import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { Country } from '../../model/country.model';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-create-countrie',
  templateUrl: './create-countrie.component.html',
  styleUrls: ['./create-countrie.component.scss']
})
export class CreateCountrieComponent implements OnInit {

  countriesForm: FormGroup;

  constructor(
    public ref: DynamicDialogRef,
    private fm: FormBuilder,
    private countriesService:CountriesService,
    private toastService:ToastService
  ) {
    this.countriesForm = this.fm.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  close(){
    this.ref.close();
  }

  createCountry(){
    this.countriesService.createCountry(this.countriesForm.value).subscribe((data:Country) => {
      this.ref.close(data);
      this.toastService.displayToast('success', 'Registro Creado Correctamente', 'Se ha agregado el país!');
    },(error:any) => {
      this.ref.close();
      this.toastService.displayToast('error', 'Ocurrio un error', 'Ocurrio un error al intentar guardar, por favor vuelva a intentarlo o comuniquise con el administrador.')
    });
  }

}
