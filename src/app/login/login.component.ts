import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {authenticationRequest} from "../models/authenticatoin-request";
import {authenticationResponsee} from "../models/authentication-response";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
authForm:FormGroup;
authRequest:authenticationRequest={};
authResponse:authenticationResponsee={};
constructor(private authService:AuthService,private router:Router,private  formbuilder:FormBuilder) {
  this.authForm=this.formbuilder.group({
    username:['', Validators.required],
    password:['', Validators.required]
  })
}
authenticate(){
  this.authRequest.username=this.authForm.get('username')?.value;
  this.authRequest.password=this.authForm.get('password')?.value;
  this.authService.login(this.authRequest).subscribe({
    next:(response)=>{
      this.authResponse=response;
      localStorage.setItem('token', response.accessToken as string);
      const tokenPayload=this.authService.decodeToken();
      console.log();
      const role=this.authResponse.user.userRole.userRoleName;
      localStorage.setItem("role",this.authResponse.user.userRole.userRoleName);
      if(role=="ADMIN"){
this.router.navigate(['admin'])
      }else{
        this.router.navigate(['acceuil'])
      }
    }
  })
}

}
