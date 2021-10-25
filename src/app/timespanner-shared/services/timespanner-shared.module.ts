import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogService } from './dynamic-dialog.service';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DynamicDialogModule
  ],
  providers: [DynamicDialogService, DialogService, ConfirmationService]
})
export class TimespannerSharedModule { }
