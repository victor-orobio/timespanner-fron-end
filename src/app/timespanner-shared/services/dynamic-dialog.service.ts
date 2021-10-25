import { Injectable } from '@angular/core';
import {DialogService} from 'primeng/dynamicdialog';
import { ConfirmationService} from 'primeng/api';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicDialogService {

  constructor(public dialogService: DialogService, private confirmationService: ConfirmationService,) { }

  public showDinamicDialog(component:any, header:string = '', dataComponent:any = {}, widthDisplay:string = '70%'){
    return this.dialogService.open(component, {
      data: dataComponent,
      header: header,
      width: widthDisplay
    }).onClose;
  }

  public confirm(content: string, title: string = ''): Subject<boolean> {
    const dialogResponse: Subject<boolean> = new Subject<boolean>();

    this.confirmationService.confirm({
      key: 'confirm',
      message: content,
      header: title,
      accept: () => {
        dialogResponse.next(true);
      },
      reject: () => {
        dialogResponse.next(false);
      },
    });

    return dialogResponse;
  }

}
