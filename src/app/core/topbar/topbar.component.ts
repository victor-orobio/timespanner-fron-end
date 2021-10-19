import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent{

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
         label:'Administracion',
         icon:'pi pi-fw pi-user',
         items:[
            {
               label:'Grupo Empleados',
               icon:'pi pi-fw pi-user-plus',

            },
            {
              label:'Centros Operativos',
              icon:'pi pi-fw pi-user-plus',
            },
            {
              label:'Centros Costo',
              icon:'pi pi-fw pi-user-plus',
            },

            {
               label:'Tipos Identificacion',
               icon:'pi pi-fw pi-user-minus',

            },
            {
              label:'Paises',
              icon:'pi pi-fw pi-user-plus',
            },
            {
              label:'Ciudades',
              icon:'pi pi-fw pi-user-plus',
            },
            {
              label:'Departamentos',
              icon:'pi pi-fw pi-user-plus',
            },
            {
               label:'Usuarios',
               icon:'pi pi-fw pi-users'
            }
         ]
      },
      {
         label:'Events',
         icon:'pi pi-fw pi-calendar',
         items:[
            {
               label:'Edit',
               icon:'pi pi-fw pi-pencil',
               items:[
                  {
                     label:'Save',
                     icon:'pi pi-fw pi-calendar-plus'
                  },
                  {
                     label:'Delete',
                     icon:'pi pi-fw pi-calendar-minus'
                  },

               ]
            },
            {
               label:'Archieve',
               icon:'pi pi-fw pi-calendar-times',
               items:[
                  {
                     label:'Remove',
                     icon:'pi pi-fw pi-calendar-minus'
                  }
               ]
            }
         ]
      },
      {
         label:'Quit',
         icon:'pi pi-fw pi-power-off'
      }
  ];
  }

}