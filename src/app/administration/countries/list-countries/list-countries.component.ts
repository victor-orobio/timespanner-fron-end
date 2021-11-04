import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { DynamicDialogService } from 'src/app/timespanner-shared/services/dynamic-dialog.service';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { CreateCountrieComponent } from '../actions-countries/create-countrie/create-countrie.component';
import { EditCountrieComponent } from '../actions-countries/edit-countrie/edit-countrie.component';
import { Country } from '../model/country.model';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.scss']
})
export class ListCountriesComponent implements OnInit {

  countries:Country[] =[]

  selectedCountries:Country[] =[]

  totalRecords: number = 0;

  loading: boolean = true;

  @ViewChild('dt')
  dt!: Table;

  constructor(
    private dinamicDialog:DynamicDialogService,
    private countriesService:CountriesService,
    private toastService:ToastService,
    private confirmationService:ConfirmationService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  applyFilterGlobal($event:any, stringVal:any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  create(){
    this.dinamicDialog.showDinamicDialog(CreateCountrieComponent,'Crear País').subscribe((country:Country) => {
      if(country){
        this.countries.push(country);
      }
    });
  }

  deleteMultiple(deleteMultiple:Country[]){
    console.log(deleteMultiple)
  }

  getAll(){
    this.countriesService.getAllCountries().subscribe( (data:any) => {
      this.countries = data._embedded['countries'];
      this.loading = true;
    })
  }

  editElement(country:Country){
    this.dinamicDialog.showDinamicDialog(EditCountrieComponent,'Editar Perfil', country).subscribe();
  }

  deleteElement(country:Country){
    this.dinamicDialog.confirm('¿Esta seguro que desea eliminar el registro?', 'Eliminar Registro', 'confirmDeleteCountry').subscribe(resp => {
      if(resp){
        this.countriesService.deleteCountry(country).subscribe(respt => {
          this.toastService.displayToast('success', 'Registro Eliminado', 'Se ha eliminado el grupo de empleados seleccionado!');
          this.countries = this.countries.filter(val => val.code !== country.code);
          country = {}
        }, (error:any) => {
          this.toastService.displayToast('success', 'Ocurrio un error ', 'Ha ocurrido un error, por favor vuelva a intentarlo!');
        });
      }
    })
  }

}
