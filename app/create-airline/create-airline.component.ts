
import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline'; 
import { AirlineService } from '../airline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-airline', 
  templateUrl: './create-airline.component.html', 
  styleUrls: ['./create-airline.component.css']
})
export class CreateAirlineComponent implements OnInit {

  airline: Airline = new Airline(); 
  
  constructor(private airlineService: AirlineService, private router: Router) { }

  ngOnInit(): void {
  }

  saveAirline(){ 
    this.airlineService.createAirline(this.airline).subscribe(data =>{
      console.log(data);
      this.goToAirlineList(); 
    },
    error => console.log(error));
  }

  goToAirlineList(){ 
    this.router.navigate(['/airlines']); 
  }
   goBack(): void{
    this.router.navigate(['/airlines']);
  } 
   
  onSubmit(){
    console.log(this.airline);
    this.saveAirline();
    var status=confirm("Created Successfully");
    if(status==true){
      this.router.navigate(['/airlines']);
    }
    else{
      this.router.navigate(['/create-airline']);
     }
  }
 }

