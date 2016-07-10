import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {AuthService} from '../services/authService';

@Component({
    selector:'login',
    templateUrl: '../dev/login/login.html',
    styleUrls:[
                'src/css/app.css',
                'src/css/materialize.min.css',
            ],
    providers:[AuthService] 
})
export class LoginComponent implements OnInit {
    localUser = {
        username:'',
        password:''
    }
    constructor(private _service:AuthService,private _router:Router) {
        if(localStorage.getItem('auth_key')){
            this._router.navigate(['/dashboard']);
         }
     }

    ngOnInit() { }

    login(){
        this._service.loginfn(this.localUser).then((res) =>{
            
            if(res){
                try{
                    this._router.navigate(['/dashboard']);
                    console.log("Navigate Excecuted");
                }
                catch(Error){
                    console.log(Error.message);
                    
                }
                
            }
            
            else{
                console.log(res);
            }
            
        })
        
    }

    clearvalues(){
        this.localUser.username = '';
        this.localUser.password = '';
    }


}