import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeGroup } from '../model/employees.model';
import { Table } from 'primeng/table'
import { DynamicDialogService } from 'src/app/timespanner-shared/services/dynamic-dialog.service';
import { CreateEmployeesGroupComponent } from 'src/app/administration/employees-group/actions-employees-group/create-employees-group/create-employees-group.component';
import { EmployeesGroupService } from '../services/employees-group.service';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { EditEmployeesGroupComponent } from '../actions-employees-group/edit-employees-group/edit-employees-group.component';

@Component({
  selector: 'app-list-employees-group',
  templateUrl: './list-employees-group.component.html',
  styleUrls: ['./list-employees-group.component.scss']
})
export class ListEmployeesGroupComponent implements OnInit {

  employeesGroups:EmployeeGroup[] =[]

  selectedEmployeesGroups:EmployeeGroup[] =[]

  @ViewChild('dt')
  dt!: Table;

  constructor(
    private dinamicDialog:DynamicDialogService,
    private employeesGroupService:EmployeesGroupService,
    private toastService:ToastService
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
    })
  }

  editElement(employeeGroup:EmployeeGroup){
    this.dinamicDialog.showDinamicDialog(EditEmployeesGroupComponent,'Editar Grupo Empleado', employeeGroup).subscribe();
  }

  deleteElement(employeeGroup:EmployeeGroup){

    this.dinamicDialog.confirm('prueba', 'titulo').subscribe()
  }

}
