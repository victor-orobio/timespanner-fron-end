import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';
import { MainProfilesComponent } from './main-profiles/main-profiles.component';
import { CreateProfileComponent } from './actions-profiles/create-profile/create-profile.component';
import { EditProfileComponent } from './actions-profiles/edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    ListProfilesComponent,
    MainProfilesComponent,
    CreateProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule
  ]
})
export class ProfilesModule { }
