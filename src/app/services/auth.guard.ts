import { CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";

export const authGuard:CanActivateFn=(route,state)=>{

  const router=inject(Router);
  const role= localStorage.getItem('role');
  const token=localStorage.getItem('token');
  if(!token){
    router.navigate(['login'])
    return false;}
    if(role==='USER'){
      return true;
    }else{
      router.navigate(['unauthorized']);
      return false;
    }
  }

export const authGuardadmin:CanActivateFn=(route,state)=>{

  const router=inject(Router);
  const role= localStorage.getItem('role');
  const token=localStorage.getItem('token');
  if(!token){
    router.navigate(['login'])
    return false;}
  if(role==='ADMIN'){
    return true;
  }else{
    router.navigate(['unauthorized']);
    return false;
  }
}
