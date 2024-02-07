import React from "react";
import { useNavigate } from 'react-router-dom';

//icons
import { TiHome } from "react-icons/ti";
import { IoIosChatboxes } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";

function Actionbar() {

    const navigate = useNavigate();

    function goto_calendar(){
        navigate("/calendar");
    }

    return(
        <div className="menu_acciones">
          <IoIosChatboxes className="icon_chat"/>
          <TiHome  id="home_icon"/>
          <FaCalendarAlt className="icon_calendar" onClick={goto_calendar}/>
      </div>
    );
}

export default Actionbar;