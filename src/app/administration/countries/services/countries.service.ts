import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/timespanner-shared/services/http.service';
import { Country } from '../model/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http:HttpService) { }


  getAllCountries():Observable<any>{
    return this.http.get('countries');
  }

  createCountry(country:Country){
    return this.http.post('countries', country)
  }

  editCountry(country:Country){
    return this.http.put(country._links.self.href, country)
  }

  deleteCountry(country:Country){
    return this.http.delete(country._links.self.href);
  }
}
