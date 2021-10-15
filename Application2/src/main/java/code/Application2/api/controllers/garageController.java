package code.Application2.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import code.Application2.business.abstracts.IGarage;
import code.Application2.dataAccess.abstracts.GarageDao;
import code.Application2.entites.Car;
import javassist.NotFoundException;

@CrossOrigin
@RestController
@RequestMapping("/api/car")
public class garageController {

	private IGarage igarage;
	
	@Autowired
	public garageController(IGarage igarage) {
		super();
		this.igarage = igarage;
	}
	
	@Autowired
	private GarageDao garageDao;
	
	@GetMapping("/getall")
	public List<Car> status() {
		return this.igarage.getAll();
	}
	
	@PostMapping("/park")
	public String park(@Validated @RequestBody Car car) {
		
			return this.igarage.add(car);
			
	}

	
	@DeleteMapping("/leave/")
	public String leave(@RequestParam int carId) throws NotFoundException {
		
		 
			return garageDao.findById(carId)
					.map( car -> {
						  garageDao.delete(car);
						  return "Success";
					}).orElseThrow(() -> new NotFoundException ("Car is not found!"));
	}
	
	
}
