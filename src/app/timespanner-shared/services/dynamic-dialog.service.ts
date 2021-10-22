import { Injectable } from '@angular/core';
import {DialogService} from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root'
})
export class DynamicDialogService {

  constructor(public dialogService: DialogService) { }

  public showDinamicDialog(component:any, header:string = '', dataComponent:any = {}, widthDisplay:string = '70%'){
    return this.dialogService.open(component, {
      data: dataComponent,
      header: header,
      width: widthDisplay
    }).onClose;

  }
}
