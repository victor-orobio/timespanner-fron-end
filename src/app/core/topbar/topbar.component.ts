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
         icon:'pi pi-fw pi-users',
         items:[
            {
               label:'Grupo Empleados',
               icon:'pi pi-fw pi-user-plus',
               url: 'administration/employees-group/list'
            },
            {
              label:'Centros Costo',
              icon:'pi pi-fw pi-user-plus',
              url: 'administration/cost-centers/list'
            },
            {
              label:'Centros Operativos',
              icon:'pi pi-fw pi-user-plus',
              url: 'administration/operative-centers/list'
            },

            {
               label:'Tipos Identificacion',
               icon:'pi pi-fw pi-user-minus',
               url: 'administration/identification-types/list'

            },
            {
              label:'Paises',
              icon:'pi pi-fw pi-user-plus',
              url: 'administration/countries/list'
            },
            {
              label:'Ciudades',
              icon:'pi pi-fw pi-user-plus',
              url: 'administration/cities/list'
            },
            {
              label:'Departamentos',
              icon:'pi pi-fw pi-user-plus',
              url: 'administration/estates/list'
            },
            {
               label:'Usuarios',
               icon:'pi pi-fw pi-users',
               url: 'administration/users/list'
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
