import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { EmployeeGroup } from '../../model/employees.model';
import { EmployeesGroupService } from '../../services/employees-group.service';

@Component({
  selector: 'app-create-employees-group',
  templateUrl: './create-employees-group.component.html',
  styleUrls: ['./create-employees-group.component.scss']
})
export class CreateEmployeesGroupComponent implements OnInit {

  employeesGroupForm: FormGroup;

  constructor(
    public ref: DynamicDialogRef,
    private fm: FormBuilder,
    private employeesGroupService:EmployeesGroupService,
    private toastService:ToastService
  ) {
    this.employeesGroupForm = this.fm.group({
      code: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  close(){
    this.ref.close();
  }

  createEmployeeGroup(){
    this.employeesGroupService.createEmployeeGroup(this.employeesGroupForm.value).subscribe((data:EmployeeGroup) => {
      this.ref.close(data);
      this.toastService.displayToast('success', 'Registro Creado Correctamente', 'Se ha agregado el nuevo grupo de empleados!');
    },(error:any) => {
      this.ref.close();
      this.toastService.displayToast('error', 'Ocurrio un error', 'Ocurrio un error al intentar guardar, por favor vuelva a intentarlo o comuniquise con el administrador.')
    });
  }

}
