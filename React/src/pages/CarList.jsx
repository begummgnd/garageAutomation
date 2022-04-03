import { useState, useEffect } from "react";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { Button } from "react-bootstrap";
import { FaParking } from "react-icons/fa";
import { FcPlus } from "react-icons/fc";
import { FaCarAlt } from "react-icons/fa";
import { useHistory } from "react-router";

export default function CarList() { //function component
  const [car, setCar] = useState([]);
  const history = useHistory();

  useEffect(() => {
    
    axios
      .get("http://localhost:8080/api/car/getall")
      .then((result) => setCar(result.data));
  }); //ikinci parametrenin boş geçilmesi state de değişiklik olduğunda sayfanın tekrar render edilmesini sağlar 

  const deleteCar = (carId) => {
    axios
      .delete("http://localhost:8080/api/car/leave/?carId=" + carId)
      .then((response) => {
        if (response.data != null) {
          alert("Car deleted succeesfully.");
        }
      });
  };
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="text-success mt-4">
              <FaParking color="blue" className="mx-2" /> Garage{" "}
              <b>
                Status <FaCarAlt color="blue" className="mx-2" />{" "}
              </b>
            </h2>
          </div>
          <div className="col-sm-6 mt-5 my-2 px-2">
            <Button
              className="btn btn-success text-white"
              onClick={() => history.push("/car/park")}
            >
              <span>
                Add New Car <FcPlus size="25px" className="mb-1" />
              </span>
            </Button>
          </div>
        </div>
      </div>
      <table className="d table table-striped table-hover mt-4 border-top-0 border border-2 " style={{ top: "10%" }}>
        <thead>
          <tr className="table-primary"  >
            <th>Plate</th>
            <th>Color</th>
            <th>Type</th>
            <th>Slot Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {car.map((s) => (
            <tr key={s.id}>
              <td>{s.plate}</td>
              <td>{s.color}</td>
              <td>{s.type}</td>
              <td>{s.slot_count}</td>
              <td>
                <Button
                  style={{ width: "60px" }}
                  variant="outline-white"
                  onClick={deleteCar.bind(this, s.carId)}
                >
                  <AiFillDelete color="red" size="17" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
