
import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.css']
})
export class AirlineListComponent implements OnInit {

  airlines: Airline[] = [];
  airlineName: string = '';
  

  constructor(private airlineService: AirlineService, 
              private router: Router) { 
                this.airlines=[];
              }

    
 searchByName() {
    this.airlineService.findByName(this.airlineName).subscribe(
      (        data: Airline[]) => {
           this.airlines = data;
             console.log(data);
                },
      (       error: any) => {
          console.log(error);
                  }
                );
          }
                      
  removeAllAirs() {
      if (confirm("Are you sure you want to delete all the airline details? This action can delete all the records from database,cannot retrive back.")) {
        this.airlineService.deleteAll().subscribe(
          (data: Airline[]) => {
              this.airlines = data;
                console.log(data);
           },
     (error: any) => {
         console.log(error);
             }
          );
       }
   }
   
   fetchByInternationalAirline() {
    this.airlineService.findByInternationalAirline().subscribe(
      data => {
        this.airlines = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  fetchByDomesticAirline() {
    this.airlineService.findByDomesticAirline().subscribe(
      data => {
        this.airlines = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getAirlines();
  }

  private getAirlines(){
    this.airlineService.getAirlinesList().subscribe(data => {
      this.airlines = data;
    });
  }

  airlineDetails(id: number){
    this.router.navigate(['airline-details', id]);
  }

  updateAirline(id: number){
    this.router.navigate(['update-airline', id]);
  }

  deleteAirline(id: number){
    this.airlineService.deleteAirline(id).subscribe( data => {
      console.log(data);
      this.getAirlines();
    })
  }


  confirmDelete(airline: Airline){
    var status=confirm("You want to delete this record?");
    if(status==true){
        this.deleteAirline(airline.id);
    }
    else{
        this.getAirlines();
    }
}
 
bookTicket(id: number){
  this.router.navigate(['/bookticket',id]);
 }
 
}
