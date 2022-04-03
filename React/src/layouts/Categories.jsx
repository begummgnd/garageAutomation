import React from "react";
import { useHistory } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import {GiHomeGarage} from 'react-icons/gi'
import {ImExit} from 'react-icons/im'
import {FaListAlt} from 'react-icons/fa'
export default function Categories() {
  const history = useHistory();

  return (
    <div  className="a border-top-0 shadow-none p-3 mb-5 bg-light rounded ">
      <Menu pointing vertical >
        <div className="c" >
        <Menu.Item className="text-white"
          name="Park To Garage"
          onClick={() => {
            history.push("/car/park");
          }}
        >Park To Garage <GiHomeGarage color="white" className="mx-2 mb-1"/></Menu.Item>
        <Menu.Item className="text-white"
        name="Leave Garage"
         onClick={() => {history.push("/car/leave/{id}");
         }}>Leave Garage <ImExit size="16px" color="white" className="mx-3 mb-2 pl-2 "/></Menu.Item>
        <Menu.Item className="text-white"
         name="Garage Status"
         onClick={() => {history.push("/car/status");
         }}>Garage Status <FaListAlt color="white" className="mx-3 mb-1"/></Menu.Item>
         </div>
      </Menu>
    </div>
  );
}
