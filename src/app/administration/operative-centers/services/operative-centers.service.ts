import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/timespanner-shared/services/http.service';
import { OperativeCenter } from '../model/operative-center.model';

@Injectable({
  providedIn: 'root'
})
export class OperativeCentersService {

  constructor(private http:HttpService) { }

  getAllOperativeCenters():Observable<any>{
    return this.http.get('operative-centers');
  }

  createOperativeCenter(operativeCenter:OperativeCenter){
    return this.http.post('operative-centers', operativeCenter)
  }

  editOperativeCenter(operativeCenter:OperativeCenter){
    return this.http.put(operativeCenter._links.self.href, operativeCenter)
  }

  deleteOperativeCenter(operativeCenter:OperativeCenter){
    return this.http.delete(operativeCenter._links.self.href);
  }
}
