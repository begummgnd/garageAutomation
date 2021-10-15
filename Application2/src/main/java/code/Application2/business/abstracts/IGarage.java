package code.Application2.business.abstracts;

import java.util.List;

import code.Application2.entites.Car;


public interface IGarage {
	public String add(Car car);
	public List<Car> getAll();
}
