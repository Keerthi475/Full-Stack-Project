import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { Airline } from './airline'; 
  
@Injectable({ 
  providedIn: 'root' 
}) 
export class AirlineService { 
  
  private baseURL = "http://localhost:8080/api/v1/airlines"; 
  
  constructor(private httpClient: HttpClient) { } 

  findByName(name: any): Observable<Airline[]>{ 
    return this.httpClient.get<Airline[]>(`${this.baseURL}?name=${name}`); 
  } 

  findByInternationalAirline(): Observable<Airline[]> {
    return this.httpClient.get<Airline[]>(`${this.baseURL}/international`);
  }

  findByDomesticAirline(): Observable<Airline[]> {
    return this.httpClient.get<Airline[]>(`${this.baseURL}/domestic`);
  }

    
  getAirlinesList(): Observable<Airline[]>{ 
    return this.httpClient.get<Airline[]>(`${this.baseURL}`); 
  } 
  
  createAirline(airline: Airline): Observable<Object>{ 
    return this.httpClient.post(`${this.baseURL}`, airline); 
  } 
  
  getAirlineById(id: number): Observable<Airline>{ 
    return this.httpClient.get<Airline>(`${this.baseURL}/${id}`); 
  } 
  
  updateAirline(id: number, airline: Airline): Observable<Object>{ 
    return this.httpClient.put(`${this.baseURL}/${id}`, airline); 
  } 
  
  
  deleteAirline(id: number): Observable<Object>{ 
    return this.httpClient.delete(`${this.baseURL}/${id}`); 
  } 

  deleteAll(): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}`); 
  }

  updateBookingDetails(id: number , airline:Airline) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/booking/${id}`, airline); 
}

}