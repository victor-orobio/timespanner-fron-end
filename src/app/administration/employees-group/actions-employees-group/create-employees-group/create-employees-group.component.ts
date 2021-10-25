import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-employees-group',
  templateUrl: './create-employees-group.component.html',
  styleUrls: ['./create-employees-group.component.scss']
})
export class CreateEmployeesGroupComponent implements OnInit {

  constructor(public ref: DynamicDialogRef) { }

  ngOnInit(): void {
  }

  close(){
    this.ref.close();
  }

}
