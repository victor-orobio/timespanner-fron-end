import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/timespanner-shared/services/http.service';
import { EmployeeGroup } from '../model/employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesGroupService {

  employeesGroup:any;

  constructor(private http:HttpService) { }


  getAllEmployeesGroup():Observable<any>{
    return this.http.get('employees-groups');
  }

  createEmployeeGroup(employeeGroup:EmployeeGroup){
    return this.http.post('employees-groups', employeeGroup)
  }

  editEmployeeGroup(employeeGroup:EmployeeGroup){
    return this.http.put(employeeGroup._links.self.href, employeeGroup)
  }

  deleteEmployeeGroup(employeeGroup:EmployeeGroup){
    return this.http.delete(employeeGroup._links.self.href);
  }
}
