import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/timespanner-shared/services/http.service';
import { IdentificationType } from '../model/identification-types.model';

@Injectable({
  providedIn: 'root'
})
export class IdentificationsTypesService {

  constructor(private http:HttpService) { }

  getAllIdentificationTypes():Observable<any>{
    return this.http.get('identification-types');
  }

  createIdentificationType(identificationType:IdentificationType){
    return this.http.post('identification-types', identificationType)
  }

  editIdentificationType(identificationType:IdentificationType){
    return this.http.put(identificationType._links.self.href, identificationType)
  }

  deleteIdentificationType(identificationType:IdentificationType){
    return this.http.delete(identificationType._links.self.href);
  }
}
