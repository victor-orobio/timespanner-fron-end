import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { OperativeCenter } from '../../model/operative-center.model';
import { OperativeCentersService } from '../../services/operative-centers.service';

@Component({
  selector: 'app-create-operative-center',
  templateUrl: './create-operative-center.component.html',
  styleUrls: ['./create-operative-center.component.scss']
})
export class CreateOperativeCenterComponent implements OnInit {

  operativeCentersForm: FormGroup;

  constructor(
    public ref: DynamicDialogRef,
    private fm: FormBuilder,
    private operativeCentersService:OperativeCentersService,    
    private toastService:ToastService
  ) { 
    this.operativeCentersForm = this.fm.group({
      code: ['', [Validators.required]],
      description: ['', [Validators.required]]      
    });
  }

  ngOnInit(): void {
  }

  close(){
    this.ref.close();
  }

  createOperativeCenter(){        
    this.operativeCentersService.createOperativeCenter(this.operativeCentersForm.value).subscribe((data:OperativeCenter) => {
      this.ref.close(data);
      this.toastService.displayToast('success', 'Registro Creado Correctamente', 'Se ha agregado el centro operativo!');
    },(error:any) => {
      this.toastService.displayToast('error', 'Ocurrio un error', 'Ocurrio un error al intentar guardar, por favor vuelva a intentarlo o comuniquise con el administrador.')
    });
  }

}
