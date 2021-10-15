package code.Application2.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import code.Application2.entites.Car;



public interface GarageDao extends JpaRepository<Car,Integer>{

	@Query("Select sum(slot_count) from Car where status=true")
	Integer getTotal_Slot_Count();
	
	
}