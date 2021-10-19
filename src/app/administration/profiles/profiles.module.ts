import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';


@NgModule({
  declarations: [
    ListProfilesComponent
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule
  ]
})
export class ProfilesModule { }
