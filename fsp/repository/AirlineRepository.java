package com.example.fsp.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.fsp.model.Airline;


/*Repository is used to indicate that the class provides the mechanism for 
 * storage,retrieval,search,update and delete operations on objects*/
@Repository
public interface AirlineRepository extends JpaRepository<Airline, Long>{
	List<Airline> findByAirlineNameContaining( String airlineName);
	List<Airline> findByisInternationalAirline(boolean isInternationalAirline);

	
}
