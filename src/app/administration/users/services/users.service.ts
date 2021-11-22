import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/timespanner-shared/services/http.service';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpService) { }

  getAllUsers():Observable<any>{
    return this.http.get('users');
  }

  getAllProfiles():Observable<any>{
    return this.http.get('profiles')
  }

  createUser(user:User){
    return this.http.post('users', user)
  }

  editUser(user:User){
    return this.http.put(user._links.self.href, user)
  }

  deleteUser(user:User){
    return this.http.delete(user._links.self.href);
  }
}
