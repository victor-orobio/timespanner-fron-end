import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogService } from './dynamic-dialog.service';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DynamicDialogModule
  ],
  providers: [DynamicDialogService, DialogService]
})
export class TimespannerSharedModule { }
