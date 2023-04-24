import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
   username: string | undefined;
   experience: string | undefined;
   rating: Number | undefined;
   comments: Comment | undefined;
    
   constructor(private router: Router){

   }

   submitFeedback(){
   
    this.router.navigate(['/login']);
   }

}
