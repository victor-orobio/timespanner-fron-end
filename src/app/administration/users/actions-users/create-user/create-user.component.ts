import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { Profile } from '../../model/profile.model';
import { User } from '../../model/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;
  users:User[] = [];
  profiles:Profile[] = [];

  constructor(
    public ref: DynamicDialogRef,
    private fm: FormBuilder,
    private usersService:UsersService,
    private toastService:ToastService
  ) {
    this.userForm = this.fm.group({
      email: ['', [Validators.required]],
      name: ['', [Validators.required]],
      profileCode: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.usersService.getAllProfiles().subscribe((data:any) => {
      this.profiles = data._embedded['profiles'];
    })
  }

  close(){
    this.ref.close();
  }

  createUser(){
    this.userForm.value.profileCode = this.userForm.value.profileCode.code;

    this.usersService.createUser(this.userForm.value).subscribe((data:User) => {
      this.ref.close(data);
      this.toastService.displayToast('success', 'Registro Creado Correctamente', 'Se ha agregado el Usuario!');
    },(error:any) => {
      this.ref.close();
      this.toastService.displayToast('error', 'Ocurrio un error', 'Ocurrio un error al intentar guardar, por favor vuelva a intentarlo o comuniquise con el administrador.')
    });
  }

}
