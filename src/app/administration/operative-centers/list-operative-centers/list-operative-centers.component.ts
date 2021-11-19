import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { DynamicDialogService } from 'src/app/timespanner-shared/services/dynamic-dialog.service';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { CreateOperativeCenterComponent } from '../actions-operative-centers/create-operative-center/create-operative-center.component';
import { EditOperativeCenterComponent } from '../actions-operative-centers/edit-operative-center/edit-operative-center.component';
import { OperativeCenter } from '../model/operative-center.model';
import { OperativeCentersService } from '../services/operative-centers.service';

@Component({
  selector: 'app-list-operative-centers',
  templateUrl: './list-operative-centers.component.html',
  styleUrls: ['./list-operative-centers.component.scss']
})
export class ListOperativeCentersComponent implements OnInit {

  operativeCenters:OperativeCenter[] =[]

  selectedOperativeCenter:OperativeCenter[] =[]

  totalRecords: number = 0;

  loading: boolean = true;

  @ViewChild('dt')
  dt!: Table;

  constructor(
    private dinamicDialog:DynamicDialogService,
    private operativeCentersService:OperativeCentersService,
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
    this.dinamicDialog.showDinamicDialog(CreateOperativeCenterComponent,'Crear Centro Operativo').subscribe((operativeCenter:OperativeCenter) => {
      if(operativeCenter){
        this.operativeCenters.push(operativeCenter);
      }
    });
  }

  deleteMultiple(deleteMultiple:OperativeCenter[]){
    console.log(deleteMultiple)
  }

  getAll(){
    this.operativeCentersService.getAllOperativeCenters().subscribe( (data:any) => {
      this.operativeCenters = data._embedded['operative-centers'];
      this.loading = true;      
    })
  }

  editElement(operativeCenter:OperativeCenter){
    this.dinamicDialog.showDinamicDialog(EditOperativeCenterComponent,'Editar Centro Operativo', operativeCenter).subscribe();
  }

  deleteElement(operativeCenter:OperativeCenter){
    this.dinamicDialog.confirm('¿Esta seguro que desea eliminar el registro?', 'Eliminar Registro', 'confirmDeleteOperativeCenter').subscribe(resp => {
      if(resp){
        this.operativeCentersService.deleteOperativeCenter(operativeCenter).subscribe(respt => {
          this.toastService.displayToast('success', 'Registro Eliminado', 'Se ha eliminado el centro operativo seleccionado!');
          this.operativeCenters = this.operativeCenters.filter(val => val.code !== operativeCenter.code);
          operativeCenter = {}
        }, (error:any) => {
          this.toastService.displayToast('success', 'Ocurrio un error ', 'Ha ocurrido un error, por favor vuelva a intentarlo!');
        });
      }
    })
  }

}
