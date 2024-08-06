import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{constant} from '../../constant/constant'
import { Iregisterresponse, Iregisteruser } from '../../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 registerapi=constant.apiEndPoint
  constructor(private http:HttpClient) { }

   signup(registerData:any):Observable<Iregisterresponse>{
    return  this.http.post<Iregisterresponse>(`${this.registerapi.register}`,registerData);
  }
  emailconfirm(token:string,email:string):Observable<Iregisterresponse>{
    return this.http.get<Iregisterresponse>(`${this.registerapi.confirmemail}?token=${token}&email=${email}`)
  }
  login(registerData:any):Observable<Iregisterresponse>{
    return  this.http.post<Iregisterresponse>(`${this.registerapi.login}`,registerData);
  }
}
