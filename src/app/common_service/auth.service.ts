import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {
  customerToken:any;
  customer:any;
  authToken: any;
  user: any;
  isDev:any;

  constructor(private http: Http) {
      this.isDev = false;
      }

  registerUser(user): Observable <any>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteById(form_data): Observable <any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/deleteById', form_data, {headers: headers})
    .pipe(map(res => res.json()));
  }

  catSts(form_data) : Observable <any>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/catSts', form_data, {headers: headers})
    .pipe(map(res => res.json()));
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
    .pipe(map(res => res.json()));
  }

  addCat(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/addcat', data, {headers: headers})
    .pipe(map(res => res.json()));
  }
  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
    .pipe(map(res => res.json()));
  }

  getCategories(query) : Observable <any> {
    const params = {'page':query.page,
                      'search':query.search };
    return this.http.get('http://localhost:3000/users/allcat',{params})
            .pipe(map(res => res.json()));
   
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  storeAdminData(token, user) {
    localStorage.setItem('admin_id_token', token);
    localStorage.setItem('admin', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  loadToken() {
    const token = localStorage.getItem('admin_id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('admin_id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
  adminlogout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
