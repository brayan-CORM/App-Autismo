import React from "react";
import { useNavigate } from 'react-router-dom';

//icons
import { TiHome } from "react-icons/ti";
import { FaCalendarAlt } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";

function Actionbar() {

    const navigate = useNavigate();

    function goto_calendar(){
        navigate("/calendar");
    }

    return(
        <div className="menu_acciones">
          <BsPlusCircleFill className="add_icon"/>
          <TiHome className="icon_home" id="home_icon" onClick={()=>navigate('/home')}/>
          <FaCalendarAlt className="icon_calendar" onClick={goto_calendar}/>
      </div>
    );
}

export default Actionbar;