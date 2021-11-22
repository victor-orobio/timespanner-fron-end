import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { DynamicDialogService } from 'src/app/timespanner-shared/services/dynamic-dialog.service';
import { ToastService } from 'src/app/timespanner-shared/services/toast.service';
import { CreateUserComponent } from '../actions-users/create-user/create-user.component';
import { EditUserComponent } from '../actions-users/edit-user/edit-user.component';
import { User } from '../model/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users:User[] =[]

  user:User = {};

  selectedUser:User[] =[]

  totalRecords: number = 0;

  loading: boolean = true;

  @ViewChild('dt')
  dt!: Table;

  constructor(
    private dinamicDialog:DynamicDialogService,
    private usersService:UsersService,
    private toastService:ToastService,
    private confirmationService:ConfirmationService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  applyFilterGlobal($event:any, stringVal:any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  create(){
    this.dinamicDialog.showDinamicDialog(CreateUserComponent,'Crear Usuario').subscribe((user:User) => {
      if(user){
        this.users.push(user);
      }
    });
  }

  deleteMultiple(deleteMultiple:User[]){
    console.log(deleteMultiple)
  }

  getAll(){
    this.usersService.getAllUsers().subscribe( (data:any) => {
      this.users = data._embedded['users'];
      this.loading = true;
    })
  }

  editElement(user:User){
    this.dinamicDialog.showDinamicDialog(EditUserComponent,'Editar Usuario', user).subscribe();
  }

  deleteElement(user:User){
    this.dinamicDialog.confirm('¿Esta seguro que desea eliminar el registro?', 'Eliminar Registro', 'confirmDeleteUser').subscribe(resp => {
      if(resp){
        this.usersService.deleteUser(user).subscribe(respt => {
          this.toastService.displayToast('success', 'Registro Eliminado', 'Se ha eliminado el Usuario!');
          this.users = this.users.filter(val => val.email !== user.email);
          user = {}
        }, (error:any) => {
          this.toastService.displayToast('error', 'Ocurrio un error ', 'Ha ocurrido un error, por favor vuelva a intentarlo!');
        });
      }
    })
  }

}
