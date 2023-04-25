import { Component , OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Airline } from '../airline';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  airline: Airline = new Airline();
    username: string ='';
    password: string='';
    email: string='';
  
 constructor(
    private router: Router){}

  ngOnInit()
   {
    
  }
   

submitForm() {
  console.log(this.airline);

  if (this.username.toLowerCase().length === 0 || this.password.toLowerCase().length === 0) {
    alert("Please fill all mandatory fields");
  } else {
    alert("Successfully signing up for our Airline Management! We are excited to have you as a part of our airlines");
    this.router.navigate(['/login']);
  }
}



  }
  



