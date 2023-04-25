
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airline-details',
  templateUrl: './airline-details.component.html',
  styleUrls: ['./airline-details.component.css']
})
export class AirlineDetailsComponent implements OnInit {

  id: number = 0;
  airline: Airline = new Airline();
  router: any;

  constructor(private route: ActivatedRoute, private airlineService: AirlineService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.airlineService.getAirlineById(this.id).subscribe(data => {
      this.airline = data;
    });
  }
  goBack(): void{
    this.router.navigate(['/airlines']);
  }

}
