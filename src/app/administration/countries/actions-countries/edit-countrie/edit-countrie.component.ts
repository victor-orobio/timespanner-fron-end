import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { Country } from '../../model/country.model';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-edit-countrie',
  templateUrl: './edit-countrie.component.html',
  styleUrls: ['./edit-countrie.component.scss']
})
export class EditCountrieComponent implements OnInit {

  countriesForm: FormGroup;
  country:Country = {};

  constructor(
    public ref: DynamicDialogRef,
    private fm: FormBuilder,
    private countriesService:CountriesService,
    private toastService:ToastService,
    private dialogService: DynamicDialogConfig
  )
  {
    this.country = this.dialogService.data;

    this.countriesForm = this.fm.group({
      code: [this.country.code, [Validators.required]],
      name: [this.country.name, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  close(){
    this.ref.close();
  }

  editCountry(){
    this.country.code = this.countriesForm.value.code;
    this.country.name = this.countriesForm.value.name;

    this.countriesService.editCountry(this.country).subscribe((data:Country) => {
      this.ref.close(data);
      this.toastService.displayToast('success', 'Registro Editado Correctamente', 'Se ha editado el país correctamente!');
    },(error:any) => {
      this.toastService.displayToast('error', 'Ocurrio un error', 'Ocurrio un error al intentar guardar, por favor vuelva a intentarlo o comuniquise con el administrador.')
    });

  }

}
