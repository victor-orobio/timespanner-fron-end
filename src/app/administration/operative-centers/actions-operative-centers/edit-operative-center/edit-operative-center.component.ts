import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { OperativeCenter } from '../../model/operative-center.model';
import { OperativeCentersService } from '../../services/operative-centers.service';

@Component({
  selector: 'app-edit-operative-center',
  templateUrl: './edit-operative-center.component.html',
  styleUrls: ['./edit-operative-center.component.scss']
})
export class EditOperativeCenterComponent implements OnInit {

  operativeCentersForm: FormGroup;
  operativeCenter:OperativeCenter = {};

  constructor(
    public ref: DynamicDialogRef,
    private fm: FormBuilder,
    private operativeCentersService:OperativeCentersService,
    private toastService:ToastService,
    private dialogService: DynamicDialogConfig
  ) {
    this.operativeCenter = this.dialogService.data;

    this.operativeCentersForm = this.fm.group({
      code: [this.operativeCenter.code, [Validators.required]],
      description: [this.operativeCenter.description, [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  close(){
    this.ref.close();
  }

  editOperativeCenter(){
    this.operativeCenter.code = this.operativeCentersForm.value.code;
    this.operativeCenter.description = this.operativeCentersForm.value.description;

    this.operativeCentersService.editOperativeCenter(this.operativeCenter).subscribe((data:OperativeCenter) => {
      this.ref.close(data);
      this.toastService.displayToast('success', 'Registro Editado Correctamente', 'Se ha editado el centro operativo correctamente');
    },(error:any) => {
      this.ref.close();
      this.toastService.displayToast('error', 'Ocurrio un error', 'Ocurrio un error al intentar guardar, por favor vuelve a intentarlo o comuniquese con el administrador')
    })
  }

}
