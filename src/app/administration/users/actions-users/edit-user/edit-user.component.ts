import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { Profile } from '../../model/profile.model';
import { User } from '../../model/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userForm: FormGroup;
  user:User = {};
  profiles:Profile[] = [];
  countryCode?:string = '';

  constructor(
    public ref: DynamicDialogRef,
    private fm: FormBuilder,
    private usersService:UsersService,
    private toastService:ToastService,
    private dialogService: DynamicDialogConfig
  ) {
    this.user = this.dialogService.data;

    this.userForm = this.fm.group({
      email: [this.user.email, [Validators.required]],
      name: [this.user.name, [Validators.required]],
      profileCode: [this.user.profileCode, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.usersService.getAllProfiles().subscribe((data:any) => {
      this.profiles = data._embedded['profiles'];

      this.userForm.get('profileCode')?.setValue(this.profiles.find(profile => profile.code === this.user.profileCode))
    });
  }

  close(){
    this.ref.close();
  }

  editUser(){
    this.user.email = this.userForm.value.email;
    this.user.name = this.userForm.value.name;
    this.user.profileCode = this.userForm.value.profileCode.code;

    this.usersService.editUser(this.user).subscribe((data:User) => {
      this.ref.close(data);
      this.toastService.displayToast('success', 'Registro Editado Correctamente', 'Se ha editado el Usuario');
    },(error:any) => {
      this.ref.close();
      this.toastService.displayToast('error', 'Ocurrio un error', 'Ocurrio un error al intentar guardar, por favor vuelve a intentarlo o comuniquese con el administrador')
    })
  }

}
