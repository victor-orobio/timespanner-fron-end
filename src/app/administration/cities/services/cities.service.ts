import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/timespanner-shared/services/http.service';
import { City } from '../model/city.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http:HttpService) { }

  getAllCities():Observable<any>{
    return this.http.get('cities');
  }

  createCity(City:City){
    return this.http.post('cities', City)
  }

  editCity(City:City){
    return this.http.put(City._links.self.href, City)
  }

  deleteCity(City:City){
    return this.http.delete(City._links.self.href);
  }
}
