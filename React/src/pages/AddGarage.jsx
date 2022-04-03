import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { GiTrafficLightsReadyToGo } from 'react-icons/gi'
import { useHistory } from "react-router";


const AddGarage = () => {

    const [color, setColor] = useState("")
    const [plate, setPlate] = useState("")
    const [type, setType] = useState("")
    const history = useHistory();

    const AddGarageInfo =() => { 

        const data = {

            "color": color,
            "plate": plate,
            "type": type

        }

        axios.post('http://localhost:8080/api/car/park', data).then((data) => { 
            console.log(data);
            history.push("/car/status");
        })

    }

    return (
        <div className="d container" >
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4 text-success">Add to Garage<GiTrafficLightsReadyToGo color="red" className="mx-2" /></h2>

                    <div className="form-group mb-2">

                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Car Color"
                            name="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </div>

                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Car Plate"
                            name="plate"
                            value={plate}
                            onChange={(e) => setPlate(e.target.value)}
                        />
                    </div>

                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Car Type"
                            name="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-success btn-block mt-1" onClick={AddGarageInfo}>Add to Garage</button>
                </div>
            </div>
        </div>

    )
}

export default AddGarage;