import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogService } from './dynamic-dialog.service';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import { ToastService } from './toast.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [DynamicDialogService, DialogService, ConfirmationService, MessageService, ToastService]
})
export class TimespannerSharedModule { }
