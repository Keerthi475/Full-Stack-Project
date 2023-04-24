package com.example.fsp.controller;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.fsp.repository.AirlineRepository;
import com.example.fsp.model.Airline;
import com.example.fsp.exceptionalhandling.ResourceNotFoundException;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class AirlineController {
	
        @Autowired
		private AirlineRepository airlineRepository;
        
        
        /* @GetMapping-Display all the details of the airlines by using http  get request
		 get airline by airlineName */
		@GetMapping("/airlines")
        public ResponseEntity<List<Airline>> getAllAirlines (@RequestParam(required = false) String name) {
        try {
		List<Airline> airList = new ArrayList<Airline>(); 
		if(name !=null) {
			airlineRepository.findByAirlineNameContaining (name).forEach(airList::add); 
			return new ResponseEntity<>(airList, HttpStatus.OK);
       }
        else {
         airList = airlineRepository.findAll(); 
        return new ResponseEntity<>(airList, HttpStatus.OK);
         }
		  }
		catch (Exception e) {
           return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
          }
       }
       

		/* @GetMapping-Display all the details of the airlines by using http  get request
		 get airline by international */
	    @GetMapping("/airlines/international")
	    public ResponseEntity<List<Airline>> findByAirline() {
	        try {
	            List<Airline> airlineList = airlineRepository.findByisInternationalAirline(true);
	            if (airlineList.isEmpty()) {
	                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	            }
	            return new ResponseEntity<>(airlineList, HttpStatus.OK);
	        } catch (Exception e) {
	            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	    }
	    
        
		/* @GetMapping-Display all the details of the airlines by using http  get request
		 get airline by domestic */
	    @GetMapping("/airlines/domestic")
	    public ResponseEntity<List<Airline>> findByDomesticAirline() {
	        try {
	        	List<Airline> airlineList = airlineRepository.findByisInternationalAirline(false);
	            if (airlineList.isEmpty()) {
	                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	            }
	            return new ResponseEntity<>(airlineList, HttpStatus.OK);
	        } catch (Exception e) {
	            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	    }
	    

		/* create airline 
	     * @PostMapping- method handles the Http POST requests matched with the specified URL
		 * @RequestBody- Objects are passed as a parameter to airline model table
		 * In this Mapping ,we get all the airline details in the form of Airline model object   */
		@PostMapping("/airlines")
		public Airline createAirline(@RequestBody Airline airline) {
			return airlineRepository.save(airline);
		}

		
		/* @GetMapping-Display all the details of the airlines by using http  get request
		 get airline by id */
		@GetMapping("/airlines/{id}")
		public ResponseEntity<Airline> getAirlineById(@PathVariable Long id) {
			Airline airline= airlineRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Airline not exist with id :" + id));
			return ResponseEntity.ok(airline);
		}

		
		/*@PutMapping- Update the airline details of the particular id. By using @DynamicUpdate we change the 
		 * particular attribute by using http put request */ 
        @PutMapping("/airlines/{id}")
		public ResponseEntity<Airline> updateAirline(@PathVariable Long id, @RequestBody Airline airlineDetails){
			Airline airline= airlineRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Airline not exist with id :" + id));

		    airline.setAirlineName(airlineDetails.getAirlineName());
			airline.setseatingcapacity(airlineDetails.getseatingcapacity());
			airline.setSource(airlineDetails.getSource());
			airline.setdestination(airlineDetails.getdestination());
		    airline.setcost(airlineDetails.getcost());

			Airline updatedairline = airlineRepository.save(airline);
			return ResponseEntity.ok(updatedairline);
		}
        
       @PutMapping("/airlines/booking/{id}")
        public ResponseEntity<Airline> updateBookingDetails(@PathVariable Long id, @RequestBody Airline airlineDetails){
			Airline airline= airlineRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Airline not exist with id :" + id));
			airline.setseatingcapacity(airlineDetails.getseatingcapacity());
			airline.setnoofseats(airlineDetails.getnoofseats());
		    airline.setcalculatedPrice(airlineDetails.getcalulatedPrice());

			Airline updatedairline = airlineRepository.save(airline);
			return ResponseEntity.ok(updatedairline);
		}

        /*@DeleteMapping-Delete all the airline detail by using http delete request*/
        @DeleteMapping("/airlines")
        public ResponseEntity<HttpStatus> deleteAllAirs(){
        	try {
        		airlineRepository.deleteAll();
        		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        		} catch(Exception e) {
        			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        		}
        }

        
        /*@DeleteMapping-Delete the particular id of the airline detail by using http delete request*/
		@DeleteMapping("/airlines/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteAirline(@PathVariable Long id){
			Airline airline= airlineRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Airline not exist with id :" + id));

			airlineRepository.delete(airline);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	}


