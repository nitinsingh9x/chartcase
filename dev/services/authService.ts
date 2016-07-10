import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AuthService {
    
    isLoggedin:boolean;
    constructor(private _http:Http) { }

    loginfn(usercreds:any){
        this.isLoggedin = false;
        
        var headers = new Headers();
        var creds = 'grant_type=password&username='+usercreds.username+'&password='+usercreds.password;
        headers.append('Content-Type','application/x-www-form-urlencoded');
        
        return new Promise((resolve)=>
        {
            this._http.post('http://localhost:50917/Token',creds,{headers:headers}).subscribe((data)=>
            {
                if(data)
                {
                    window.localStorage.setItem('auth_key','Bearer '+data.json().access_token);
                    this.isLoggedin = true;

                }
                    resolve(this.isLoggedin)
            }
        )
            
        })

        
    }
}