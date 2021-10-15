package code.Application2.business.concretes;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import code.Application2.business.abstracts.IGarage;
import code.Application2.dataAccess.abstracts.GarageDao;
import code.Application2.entites.Car;




@Service
public class GarageManager implements IGarage  {

	

	@Autowired
	private GarageDao garagedao;
	
	@Override
	public String add(Car car) {
		int filledArea ;
	
	    if(car.getType().toString().equals("Car"))
	    	car.setSlot_count(1);
	    
	    if(car.getType().toString().equals("Jeep") )
	    	 car.setSlot_count(2);
	    
	    if(car.getType().toString().equals("Truck") )
	    	 car.setSlot_count(4);
	    
		if(garagedao.getTotal_Slot_Count()==null) {
		     filledArea=0;	
		}
		
		else {
			filledArea =  car.getSlot_count() + garagedao.getTotal_Slot_Count();
		}	
		
	
		if(filledArea > 10)
			return "Garage is full.";
		
			
		
		else {
		 
			 if(car.getType().toString().equals("Car")) {
		    	car.setStatus(true);
		    	garagedao.save(car);
		    	return "Allocated 1 slot."; 
		    }
					     
		    if(car.getType().toString().equals("Jeep") ) {
		    	 car.setStatus(true);
		    	 garagedao.save(car);
		    	 return "Allocated 2 slot.";
		    }
		    
		    if(car.getType().toString().equals("Truck") ) {
		    	 car.setStatus(true);
		    	 garagedao.save(car);
		    	 return "Allocated 4 slot.";
		    }

	  }
		   
	
		return null;
    }

	@Override
	public List<Car> getAll() {
		
		return this.garagedao.findAll();
	}
	
	

}
