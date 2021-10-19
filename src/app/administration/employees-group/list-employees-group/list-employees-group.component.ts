import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeGroup } from '../model/employees.model';
import { Table } from 'primeng/table'


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

  constructor() { }

  ngOnInit(): void {
    this.employeesGroups = [
      {
        id: 1,
        code: 22,
        description: "Prueba"
      },
      {
        id: 2,
        code: 23,
        description: "Testing"
      },
      {
        id: 3,
        code: 24,
        description: "Uno"
      },
      {
        id: 4,
        code: 25,
        description: "Quince"
      }
    ]
  }

  applyFilterGlobal($event:any, stringVal:any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

}
