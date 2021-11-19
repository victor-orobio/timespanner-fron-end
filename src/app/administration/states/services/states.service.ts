import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/timespanner-shared/services/http.service';
import { State } from '../model/state.model';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private http:HttpService) { }

  getAllStates():Observable<any>{
    return this.http.get('estates');
  }

  getStateByCountry(countryCode:string):Observable<any>{
    return this.http.get('estates/search/findAllByCountryCode?code='+countryCode)
  }

  createState(state:State){
    return this.http.post('estates', state)
  }

  editState(state:State){
    return this.http.put(state._links.self.href, state)
  }

  deleteState(state:State){
    return this.http.delete(state._links.self.href);
  }
}
