import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot,
         RouterStateSnapshot, Router} from '@angular/router'

@Injectable()
export class AuthCheckService implements CanActivate {

    
    constructor(private router:Router) { }
    
    canActivate(next: ActivatedRouteSnapshot,state:RouterStateSnapshot){
        if(!localStorage.getItem('auth_key')){
            this.router.navigate(['']);
             return false;
         }
         else{
             return true;
         }
        
    }
}