import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/timespanner-shared/services/http.service';
import { CostCenter } from '../model/cost-center.model';

@Injectable({
  providedIn: 'root'
})
export class CostCentersService {

  constructor(private http:HttpService) { }

  getAllCostCenters():Observable<any>{
    return this.http.get('cost-centers');
  }

  createCostCenter(costCenter:CostCenter){
    return this.http.post('cost-centers', costCenter)
  }

  editCostCenter(costCenter:CostCenter){
    return this.http.put(costCenter._links.self.href, costCenter)
  }

  deleteCostCenter(costCenter:CostCenter){
    return this.http.delete(costCenter._links.self.href);
  }
}
