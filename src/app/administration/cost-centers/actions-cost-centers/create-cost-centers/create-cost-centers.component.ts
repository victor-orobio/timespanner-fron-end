import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { CostCenter } from '../../model/cost-center.model';
import { CostCentersService } from '../../services/cost-centers.service';

@Component({
  selector: 'app-create-cost-centers',
  templateUrl: './create-cost-centers.component.html',
  styleUrls: ['./create-cost-centers.component.scss']
})
export class CreateCostCentersComponent implements OnInit {

  costCenterForm: FormGroup;

  constructor(
    public ref: DynamicDialogRef,
    private fm: FormBuilder,
    private costCentersService:CostCentersService,
    private toastService:ToastService
  ) {
    this.costCenterForm = this.fm.group({
      code: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  close(){
    this.ref.close();
  }

  createCostCenter(){
    this.costCentersService.createCostCenter(this.costCenterForm.value).subscribe((data:CostCenter) => {
      this.ref.close(data);
      this.toastService.displayToast('success', 'Registro Creado Correctamente', 'Se ha agregado el centro de costos!');
    },(error:any) => {
      this.ref.close();
      this.toastService.displayToast('error', 'Ocurrio un error', 'Ocurrio un error al intentar guardar, por favor vuelva a intentarlo o comuniquise con el administrador.')
    });
  }

}
