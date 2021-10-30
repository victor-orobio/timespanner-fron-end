import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogService } from 'src/app/timespanner-shared/services/dynamic-dialog.service';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { EmployeeGroup } from '../../model/employees.model';
import { EmployeesGroupService } from '../../services/employees-group.service';

@Component({
  selector: 'app-edit-employees-group',
  templateUrl: './edit-employees-group.component.html',
  styleUrls: ['./edit-employees-group.component.scss']
})
export class EditEmployeesGroupComponent implements OnInit {

  employeesGroupForm: FormGroup;
  employeeGroup:EmployeeGroup = {};

  constructor(
    public ref: DynamicDialogRef,
    private fm: FormBuilder,
    private employeesGroupService:EmployeesGroupService,
    private toastService:ToastService,
    private dialogService: DynamicDialogConfig
  ) {
    this.employeeGroup = this.dialogService.data;

    this.employeesGroupForm = this.fm.group({
      code: [this.employeeGroup.code, [Validators.required]],
      description: [this.employeeGroup.description, [Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  close(){
    this.ref.close();
  }

  editEmployeeGroup(){
    this.employeeGroup.code = this.employeesGroupForm.value.code;
    this.employeeGroup.description = this.employeesGroupForm.value.description;

    this.employeesGroupService.editEmployeeGroup(this.employeeGroup).subscribe((data:EmployeeGroup) => {
      this.ref.close(data);
      this.toastService.displayToast('success', 'Registro Creado Correctamente', 'Se ha agregado el nuevo grupo de empleados!');
    },(error:any) => {
      this.toastService.displayToast('error', 'Ocurrio un error', 'Ocurrio un error al intentar guardar, por favor vuelva a intentarlo o comuniquise con el administrador.')
    });

  }

}
