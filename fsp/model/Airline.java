package com.example.fsp.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "airlines")
@DynamicUpdate
public class Airline {
	    
	/*@Entity(default)- A Class can be mapped to a table
	 * @Table- Specifies the table name
	 * @Dynamic Update- Updates the particular value to the attribute which we want to change instead of checking all the attributes.
	 * @Id-Considers as a primary key
	 * @Generated value(strategy=GenerationType.IDENTITY)- automatically generates the primary key values.
	 * @Column-Specifies the column name*/

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id;

		@Column(name = "airline_name")
		private String airlineName;

		@Column(name = "source")
		private String source;
		
		@Column(name = "destination")
		private String destination;
		 
		@Column(name="seating_capacity")
		private int seatingcapacity;
		
		@Column(name="Cost")
		private int cost;
		
		@Column(name="noofseats")
		private int noofseats;
		
		@Column(name="calculatedPrice")
		private int calculatedPrice; 
		
		@Column(name="is_International_Airline")
    	private boolean isInternationalAirline;
		 
		
        // default constructor
		public Airline() {

		}
		

		//parameterized constructor
		public Airline(String airlineName, String source, int seatingcapacity, String destination,int cost,int noofseats,int calculatedPrice,boolean isInternationalAirline) {
			super();
			this.airlineName = airlineName;
			this.source = source;
			this.seatingcapacity = seatingcapacity;
			this.destination=destination;
			this.cost=cost;
			this.noofseats=noofseats;
			this.calculatedPrice=calculatedPrice; 
			this.isInternationalAirline=isInternationalAirline;
		}
		
		
		// getters and setters to access the private attributes
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public String getAirlineName() {
			return airlineName;
		}
		public void setAirlineName(String airlineName) {
			this.airlineName = airlineName;
		}
		public String getSource() {
			return source;
		}
		public void setSource(String source) {
			this.source = source;
		}
		public String getdestination() {
			return destination;
		}
		public void setdestination(String destination) {
			this.destination = destination;
		}	
		public int getseatingcapacity() {
			return seatingcapacity;
		}
		public void setseatingcapacity(int seatingcapacity) {
			this.seatingcapacity = seatingcapacity;
		}
		public int getcost() {
			return cost;
		}
		public void setcost(int cost) {
			this.cost = cost;
		}
		public int getnoofseats() {
			return noofseats;
		}
		public void setnoofseats(int noofseats) {
			this.noofseats = noofseats;
		}
		public int getcalulatedPrice() {
			return calculatedPrice;
		}
		public void setcalculatedPrice(int calculatedPrice) {
			this.calculatedPrice = calculatedPrice;
		}
		
		public boolean getisInternationalAirline() {
        	return isInternationalAirline;
        }
		public void setisInternationalAirline(boolean isInternationalAirline) {
		    this.isInternationalAirline=isInternationalAirline;
		}

		
			
	}


