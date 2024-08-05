import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{constant} from '../../constant/constant'
import { Iregisterresponse, Iregisteruser } from '../../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 registerapi=constant.apiEndPoint.register
  constructor(private http:HttpClient) { }

   signup(registerData:any):Observable<Iregisterresponse>{
    return  this.http.post<Iregisterresponse>(`${this.registerapi}`,registerData);
  }

  //  signup(registerData:any){
  //   return this.http.post(this.registerapi,registerData);
  //  }
}
