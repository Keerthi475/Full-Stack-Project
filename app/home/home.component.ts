
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  source: string | undefined;
  destination: string | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    
    this.router.navigate(['/airlines']);
  }


}

