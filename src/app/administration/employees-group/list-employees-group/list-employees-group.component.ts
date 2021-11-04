import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeGroup } from '../model/employees.model';
import { Table } from 'primeng/table'
import { DynamicDialogService } from 'src/app/timespanner-shared/services/dynamic-dialog.service';
import { CreateEmployeesGroupComponent } from 'src/app/administration/employees-group/actions-employees-group/create-employees-group/create-employees-group.component';
import { EmployeesGroupService } from '../services/employees-group.service';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { EditEmployeesGroupComponent } from '../actions-employees-group/edit-employees-group/edit-employees-group.component';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-list-employees-group',
  templateUrl: './list-employees-group.component.html',
  styleUrls: ['./list-employees-group.component.scss']
})
export class ListEmployeesGroupComponent implements OnInit {

  employeesGroups:EmployeeGroup[] =[]

  selectedEmployeesGroups:EmployeeGroup[] =[]

  totalRecords: number = 0;

  loading: boolean = true;

  @ViewChild('dt')
  dt!: Table;

  constructor(
    private dinamicDialog:DynamicDialogService,
    private employeesGroupService:EmployeesGroupService,
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
    this.dinamicDialog.showDinamicDialog(CreateEmployeesGroupComponent,'Crear Grupo Empleados').subscribe((employeeGroup:EmployeeGroup) => {
      if(employeeGroup){
        this.employeesGroups.push(employeeGroup);
      }
    });
  }

  deleteMultiple(deleteMultiple:EmployeeGroup[]){
    console.log(deleteMultiple)
  }

  getAll(){
    this.employeesGroupService.getAllEmployeesGroup().subscribe( (data:any) => {
      this.employeesGroups = data._embedded['employees-groups'];
      this.loading = true;
    })
  }

  editElement(employeeGroup:EmployeeGroup){
    this.dinamicDialog.showDinamicDialog(EditEmployeesGroupComponent,'Editar Grupo Empleado', employeeGroup).subscribe();
  }

  deleteElement(employeeGroup:EmployeeGroup){
    console.log(employeeGroup)
    this.dinamicDialog.confirm('¿Esta seguro que desea eliminar el registro?', 'Eliminar Registro', 'confirmDeleteEmployeeGroup').subscribe(resp => {
      if(resp){
        this.employeesGroupService.deleteEmployeeGroup(employeeGroup).subscribe(respt => {
          this.toastService.displayToast('success', 'Registro Eliminado', 'Se ha eliminado el grupo de empleados seleccionado!');
          this.employeesGroups = this.employeesGroups.filter(val => val.code !== employeeGroup.code);
          employeeGroup = {}
        }, (error:any) => {
          this.toastService.displayToast('success', 'Ocurrio un error ', 'Ha ocurrido un error, por favor vuelva a intentarlo!');
        });
      }
    })
  }

}
