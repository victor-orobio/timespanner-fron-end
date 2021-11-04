import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { DynamicDialogService } from 'src/app/timespanner-shared/services/dynamic-dialog.service';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { CreateCostCentersComponent } from '../actions-cost-centers/create-cost-centers/create-cost-centers.component';
import { EditCostCentersComponent } from '../actions-cost-centers/edit-cost-centers/edit-cost-centers.component';
import { CostCenter } from '../model/cost-center.model';
import { CostCentersService } from '../services/cost-centers.service';

@Component({
  selector: 'app-list-cost-centers',
  templateUrl: './list-cost-centers.component.html',
  styleUrls: ['./list-cost-centers.component.scss']
})
export class ListCostCentersComponent implements OnInit {

  costCenters:CostCenter[] =[]

  selectedCostCenters:CostCenter[] =[]

  totalRecords: number = 0;

  loading: boolean = true;

  @ViewChild('dt')
  dt!: Table;

  constructor(
    private dinamicDialog:DynamicDialogService,
    private costCentersService:CostCentersService,
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
    this.dinamicDialog.showDinamicDialog(CreateCostCentersComponent,'Crear Centro de Costo').subscribe((costCenter:CostCenter) => {
      if(costCenter){
        this.costCenters.push(costCenter);
      }
    });
  }

  deleteMultiple(deleteMultiple:CostCenter[]){
    console.log(deleteMultiple)
  }

  getAll(){
    this.costCentersService.getAllCostCenters().subscribe( (data:any) => {
      this.costCenters = data._embedded['cost-centers'];
      this.loading = true;
    })
  }

  editElement(costCenter:CostCenter){
    this.dinamicDialog.showDinamicDialog(EditCostCentersComponent,'Editar Centro de Costo', costCenter).subscribe();
  }

  deleteElement(costCenter:CostCenter){
    this.dinamicDialog.confirm('¿Esta seguro que desea eliminar el registro?', 'Eliminar Registro', 'confirmDeleteCostCenter').subscribe(resp => {
      if(resp){
        this.costCentersService.deleteCostCenter(costCenter).subscribe(respt => {
          this.toastService.displayToast('success', 'Registro Eliminado', 'Se ha eliminado el centro de costos seleccionado!');
          this.costCenters = this.costCenters.filter(val => val.code !== costCenter.code);
          costCenter = {}
        }, (error:any) => {
          this.toastService.displayToast('success', 'Ocurrio un error ', 'Ha ocurrido un error, por favor vuelva a intentarlo!');
        });
      }
    })
  }

}
