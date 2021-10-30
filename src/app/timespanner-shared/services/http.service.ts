import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/timespanner-shared/models/constants.model';

@Injectable({
providedIn: 'root'
})
export class HttpService {
constructor(private http: HttpClient) {}

  post(serviceName: string, data: any): Observable<any> {
    const url = Constants.URL_BASE + serviceName;
    return this.http.post(url, JSON.stringify(data));
  }

  get(serviceName: string): Observable<any>{
    const url = Constants.URL_BASE + serviceName;
    return this.http.get(url);
  }

  put(serviceName:string, data:any, ){
    const url = serviceName;
    return this.http.put(url, data)
  }

  delete(urlService:string): Observable<any>{
    const url = urlService;
    return this.http.delete(url)
  }
}
