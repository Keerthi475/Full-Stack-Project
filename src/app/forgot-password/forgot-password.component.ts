import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  
  username!: string;
  email!: string;
  newpassword!: string;
  constructor(private router: Router) {}

  submitForm() {
    
    this.router.navigate(['/login']);
  }
}
