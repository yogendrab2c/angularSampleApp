import { ConfigService } from './ConfigService.service';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class CrudService {
  customerToken:any;
  customer:any;
  authToken: any;
  user: any;
  isDev:any;

  constructor(
      private http: Http,
      private config: ConfigService
      ) {
      this.isDev = false;
      }

    add(data,url) : Observable <any>{
    return this.http.post(this.config.backendUrl+url, data)
    .pipe(map(res => res.json()));
  }
  list(data,url) : Observable <any>{
    const params = data;
    return this.http.get(this.config.backendUrl+url,{params})
            .pipe(map(res => res.json()));
  }

  delete(url) : Observable <any>{
    return this.http.delete(this.config.backendUrl+url)
    .pipe(map(res => res.json()));
  }
  update(data,url) : Observable <any>{
    return this.http.patch(this.config.backendUrl+url, data)
    .pipe(map(res => res.json()));
  }
  withOutImage(data,url) : Observable <any>{
    return this.http.patch(this.config.backendUrl+url, data)
    .pipe(map(res => res.json()));
  }
}
