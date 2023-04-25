import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
   username: '' = "";
   experience: '' = "";
   rating: '' = "";
   comments: '' = "";
    
   constructor(private router: Router){

   }

   submitFeedback(){
    if(this.username==='', this.experience==='',this.rating==='',this.comments===''){
                var status = confirm("It is mandatory to fill all the fields");
              }
              else {
                var status = confirm("Thankyou for the feedback");
               if(status==true){
                  this.router.navigate(['/login']);
                }
  
   }

}
}
