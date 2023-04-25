import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  
  username: '' = "";
  email: '' = "";
  newpassword: '' = "";
  constructor(private router: Router) {}

  submitForm() {
      if(this.username.trim() === '' || this.newpassword.trim() === '' || this.email.trim() === ''){
        alert("Please fill all mandatory fields");
      } else {
        alert("Successfully changed password");
        this.router.navigate(['/login']);
      }
  }  

}

