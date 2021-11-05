import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { DynamicDialogService } from 'src/app/timespanner-shared/services/dynamic-dialog.service';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { CreateIdentificationTypeComponent } from '../actions-identification-types/create-identification-type/create-identification-type.component';
import { EditIdentificationTypeComponent } from '../actions-identification-types/edit-identification-type/edit-identification-type.component';
import { IdentificationType } from '../model/identification-types.model';
import { IdentificationsTypesService } from '../services/identifications-types.service';

@Component({
  selector: 'app-list-identification-types',
  templateUrl: './list-identification-types.component.html',
  styleUrls: ['./list-identification-types.component.scss']
})
export class ListIdentificationTypesComponent implements OnInit {

  identificationTypes:IdentificationType[] =[]

  selectedIdentificationTypes:IdentificationType[] =[]

  totalRecords: number = 0;

  loading: boolean = true;

  @ViewChild('dt')
  dt!: Table;

  constructor(
    private dinamicDialog:DynamicDialogService,
    private identificationTypesService:IdentificationsTypesService,
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
    this.dinamicDialog.showDinamicDialog(CreateIdentificationTypeComponent,'Crear Tipo Identificacion').subscribe((identificationType:IdentificationType) => {
      if(identificationType){
        this.identificationTypes.push(identificationType);
      }
    });
  }

  deleteMultiple(deleteMultiple:IdentificationType[]){
    console.log(deleteMultiple)
  }

  getAll(){
    this.identificationTypesService.getAllIdentificationTypes().subscribe( (data:any) => {
      this.identificationTypes = data._embedded['identification-types'];
      this.loading = true;
    })
  }

  editElement(identificationType:IdentificationType){
    this.dinamicDialog.showDinamicDialog(EditIdentificationTypeComponent,'Editar Perfil', identificationType).subscribe();
  }

  deleteElement(identificationType:IdentificationType){
    this.dinamicDialog.confirm('¿Esta seguro que desea eliminar el registro?', 'Eliminar Registro', 'confirmDeleteIdenticationType').subscribe(resp => {
      if(resp){
        this.identificationTypesService.deleteIdentificationType(identificationType).subscribe(respt => {
          this.toastService.displayToast('success', 'Registro Eliminado', 'Se ha eliminado el tipo de identificacion seleccionado!');
          this.identificationTypes = this.identificationTypes.filter(val => val.code !== identificationType.code);
          identificationType = {}
        }, (error:any) => {
          this.toastService.displayToast('success', 'Ocurrio un error ', 'Ha ocurrido un error, por favor vuelva a intentarlo!');
        });
      }
    })
  }

}
