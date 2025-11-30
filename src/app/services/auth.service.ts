import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {authenticationRequest} from "../models/authenticatoin-request";
import {authenticationResponsee} from "../models/authentication-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  private jwtHelper:JwtHelperService=new JwtHelperService();
  private baseUrl:string= 'http://localhost:8082/api/auth/login'
  login( authRequest:authenticationRequest){
    return this.http.post<authenticationResponsee>(`${this.baseUrl}`,authRequest);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  decodeToken(){
    const token=this.getToken()!;
    return this.jwtHelper.decodeToken(token);
  }
  createAuthorization(){
   const token = this.getToken();
   return{
     headers:new HttpHeaders({
       'Authorization': `Bearer ${token}`
     })
   }
  }
}
