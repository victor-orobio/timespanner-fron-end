import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { CostCenter } from '../../model/cost-center.model';
import { CostCentersService } from '../../services/cost-centers.service';

@Component({
  selector: 'app-edit-cost-centers',
  templateUrl: './edit-cost-centers.component.html',
  styleUrls: ['./edit-cost-centers.component.scss']
})
export class EditCostCentersComponent implements OnInit {

  costCenterForm: FormGroup;
  costCenter:CostCenter = {};

  constructor(
    public ref: DynamicDialogRef,
    private fm: FormBuilder,
    private costCentersService:CostCentersService,
    private toastService:ToastService,
    private dialogService: DynamicDialogConfig
  )
  {
    this.costCenter = this.dialogService.data;

    this.costCenterForm = this.fm.group({
      code: [this.costCenter.code, [Validators.required]],
      description: [this.costCenter.description, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  close(){
    this.ref.close();
  }

  editCostCenter(){
    this.costCenter.code = this.costCenterForm.value.code;
    this.costCenter.description = this.costCenterForm.value.description;

    this.costCentersService.editCostCenter(this.costCenter).subscribe((data:CostCenter) => {
      this.ref.close(data);
      this.toastService.displayToast('success', 'Registro Editado Correctamente', 'Se ha editado el centro de costo correctamente!');
    },(error:any) => {
      this.toastService.displayToast('error', 'Ocurrio un error', 'Ocurrio un error al intentar guardar, por favor vuelva a intentarlo o comuniquise con el administrador.')
    });

  }

}
