import { Component , OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Airline Management';
  constructor(public loginService:AuthenticationService) { }
  ngOnInit() {
    
  }
}

