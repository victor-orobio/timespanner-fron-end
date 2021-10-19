import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import {MenubarModule} from 'primeng/menubar';



@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
  ],
  exports: [
    TopbarComponent
  ]
})
export class CoreModule { }
