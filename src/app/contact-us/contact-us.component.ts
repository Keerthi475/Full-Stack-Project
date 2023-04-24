
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name!: string;
  email!: string;
  message!: string;

  constructor(private router: Router) {}

  submitForm() {
    
    this.router.navigate(['/home']);
  }
}
