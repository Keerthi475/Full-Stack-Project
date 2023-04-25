
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name: '' = "";
  email: '' = "";
  message: '' = "";

  constructor(private router: Router) {}

  submitForm() {
    if (this.name === '' || this.email === '' || this.message === '') {
      alert('Please fill all mandatory fields');
    } else {
      alert('Thank you for contacting us,we will get back to you as soon as possible.');
      this.router.navigate(['/home']);
    }
    
  }
}
