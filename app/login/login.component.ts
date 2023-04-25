import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username = '';
  password='';
  invalidLogin=false;
  loggedIn=false;
//  emessage: '' = "";

   constructor(private router: Router,
     private loginservice: AuthenticationService){
//      this.loggedIn=false;
     }
      
     ngOnInit() {
       }
        
    checkLogin(){
        if(this.loginservice.authenticate(this.username, this.password))
         {
           this.router.navigate(['home']);
           console.log("navigate..");
           this.invalidLogin= false;
           this.loggedIn=true;
           console.log('User is logged in:' ,this.loggedIn);
    
         }else
         this.invalidLogin= true;
         this.loggedIn= false;
     }

}          

