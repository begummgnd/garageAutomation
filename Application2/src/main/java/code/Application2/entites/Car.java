package code.Application2.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


	@Entity
	@Table(name="car")

	public class Car {

		
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY )
		private int carId;
		
		@Column(name="plate")
		private String plate; 
		
		@Column(name="color") 
		private String color;
		
		@Column(name="type")
		private String type;
		
		@Column(name="status")
		private boolean status;
		
		@Column(name="slot_count")
		private int slot_count;
			
		public Car() {
			 
		}
		
		public Car(String plate, String color, String type,  boolean status, int slotCount ) {
			
			this.plate = plate;
			this.color = color;
			this.type=type;	
			this.status = status;
			this.slot_count=slotCount;	
		}
		
		public void setInfo(String plate, String color, String type) {
			this.plate = plate;
			this.color = color;
			this.type=type;	
		}
		public int getSlot_count() {
			return slot_count;
		}

		public void setSlot_count(int slot_count) {
			this.slot_count = slot_count;
		}


		public int getCarId() {
			return carId;
		}

		public void setCarId(int carId) {
			this.carId = carId;
		}

		public String getPlate() {
			return plate;
		}

		public void setPlate(String plate) {
			this.plate = plate;
		}

		public String getColor() {
			return color;
		}

		public void setColor(String color) {
			this.color = color;
		}

		public String getType() {
			return type;
		}

		public void setType(String type) {
			this.type = type;
		}

		public boolean isStatus() {
			return status;
		}

		public void setStatus(boolean status) {
			this.status = status;
		}
}
