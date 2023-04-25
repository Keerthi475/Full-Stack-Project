
 import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../airline.service';
import { Airline } from '../airline';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {
 
  airline: Airline = {
    source: '',
    destination: '',
    seatingcapacity: 0,
    noofseats: 0,
    id: 0,
    airlineName: '',
    calculatedPrice: 0,
    isInternationalAirline: false,
    cost: 0
  };
  id: number=0;

  constructor(private airlineService: AirlineService,
    private route: ActivatedRoute,
    private router: Router) { }
   
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.airlineService.getAirlineById(this.id).subscribe(data => {
      this.airline = data;
    }, error => console.log(error));

  }

  goToAirlineList() {
    this.router.navigate(['/airline']);
  }

  onSubmit() {
   var status=confirm("Thankyou for booking");
   if(status==true){
   this.airlineService.updateBookingDetails(this.id,this.airline)
   .subscribe(data => {
    this.router.navigate(['/airlines']);
  }, error => console.log(error));
     }
     else{
      this.router.navigate(['/airlines']);
     }
  }
   
  myFunction(){
    this.airline.seatingcapacity-=this.airline.noofseats;
   this.airline.calculatedPrice=this.airline.noofseats*(this.airline.cost);
  }

    }
  




  





