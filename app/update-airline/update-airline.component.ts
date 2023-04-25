
import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../airline.service';
import { Airline } from '../airline';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-airline',
  templateUrl: './update-airline.component.html',
  styleUrls: ['./update-airline.component.css']
})
export class UpdateAirlineComponent implements OnInit {

  id: number = 0;
  airline: Airline = new Airline();

  constructor(private airlineService: AirlineService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.airlineService.getAirlineById(this.id).subscribe(data => {
      this.airline = data;
    }, error => console.log(error));
  }

  saveAirline() {
    this.airlineService.updateAirline(this.id, this.airline).subscribe(data =>{
      this.goToAirlineList();
    }
    , error => console.log(error));
  }

  goToAirlineList() {
    this.router.navigate(['/airline']);
  }
   
  goBack(): void{
    this.router.navigate(['/airlines']);
  }
  
  onSubmit(){
    console.log(this.airline);
    this.saveAirline();
    var status=confirm("Updated Successfully");
    if(status==true){
      this.router.navigate(['/airlines']);
    }
    else{
      this.router.navigate(['/update-airline']);
     }
  }
  
}
