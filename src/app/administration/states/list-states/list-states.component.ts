import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { DynamicDialogService } from 'src/app/timespanner-shared/services/dynamic-dialog.service';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { CreateStateComponent } from '../actions-states/create-state/create-state.component';
import { EditStateComponent } from '../actions-states/edit-state/edit-state.component';
import { State } from '../model/state.model';
import { StatesService } from '../services/states.service';

@Component({
  selector: 'app-list-states',
  templateUrl: './list-states.component.html',
  styleUrls: ['./list-states.component.scss']
})
export class ListStatesComponent implements OnInit {

  states:State[] =[]

  state:State = {};

  selectedState:State[] =[]

  totalRecords: number = 0;

  loading: boolean = true;

  @ViewChild('dt')
  dt!: Table;

  constructor(
    private dinamicDialog:DynamicDialogService,
    private statesService:StatesService,
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
    this.dinamicDialog.showDinamicDialog(CreateStateComponent,'Crear Departamento').subscribe((state:State) => {      
      if(state){
        this.states.push(state);
      }
    });
  }

  deleteMultiple(deleteMultiple:State[]){
    console.log(deleteMultiple)
  }

  getAll(){
    this.statesService.getAllStates().subscribe( (data:any) => {
      this.states = data._embedded['estates'];
      this.loading = true;      
    })
  }

  editElement(state:State){    
    this.dinamicDialog.showDinamicDialog(EditStateComponent,'Editar Departamento', state).subscribe();
  }

  deleteElement(state:State){
    this.dinamicDialog.confirm('¿Esta seguro que desea eliminar el registro?', 'Eliminar Registro', 'confirmDeleteState').subscribe(resp => {
      if(resp){
        this.statesService.deleteState(state).subscribe(respt => {
          this.toastService.displayToast('success', 'Registro Eliminado', 'Se ha eliminado el Departamento!');
          this.states = this.states.filter(val => val.code !== state.code);
          state = {}
        }, (error:any) => {
          this.toastService.displayToast('success', 'Ocurrio un error ', 'Ha ocurrido un error, por favor vuelva a intentarlo!');
        });
      }
    })
  }

}
