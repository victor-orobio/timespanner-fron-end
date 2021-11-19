import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { DynamicDialogService } from 'src/app/timespanner-shared/services/dynamic-dialog.service';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { CreateCityComponent } from '../actions-cities/create-city/create-city.component';
import { EditCityComponent } from '../actions-cities/edit-city/edit-city.component';
import { City } from '../model/city.model';
import { CitiesService } from '../services/cities.service';

@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.scss']
})
export class ListCitiesComponent implements OnInit {

  cities:City[] =[]

  selectedCities:City[] =[]

  totalRecords: number = 0;

  loading: boolean = true;

  @ViewChild('dt')
  dt!: Table;

  constructor(
    private dinamicDialog:DynamicDialogService,
    private citiesService:CitiesService,
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
    this.dinamicDialog.showDinamicDialog(CreateCityComponent,'Crear Ciudad').subscribe((city:City) => {
      if(city){
        this.cities.push(city);
      }
    });
  }

  deleteMultiple(deleteMultiple:City[]){
    console.log(deleteMultiple)
  }

  getAll(){
    this.citiesService.getAllCities().subscribe( (data:any) => {
      this.cities = data._embedded['cities'];
      this.loading = true;
    })
  }

  editElement(city:City){
    this.dinamicDialog.showDinamicDialog(EditCityComponent,'Editar Ciudad', city).subscribe();
  }

  deleteElement(city:City){
    this.dinamicDialog.confirm('¿Esta seguro que desea eliminar el registro?', 'Eliminar Registro', 'confirmDeleteCity').subscribe(resp => {
      if(resp){
        this.citiesService.deleteCity(city).subscribe(respt => {
          this.toastService.displayToast('success', 'Registro Eliminado', 'Se ha eliminado la ciudad seleccionado!');
          this.cities = this.cities.filter(val => val.code !== city.code);
          city = {}
        }, (error:any) => {
          this.toastService.displayToast('success', 'Ocurrio un error ', 'Ha ocurrido un error, por favor vuelva a intentarlo!');
        });
      }
    })
  }

}
