import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar'

//icons
import { TiHome } from "react-icons/ti";
import { TiThMenu } from "react-icons/ti";

function Calendar() {

    const navigate = useNavigate();

    function goto_home(){
        navigate("/home");
    }

    return(
        <>
            <div className="calendar">    
                <TiHome className="icon_home" onClick={goto_home}/>
                <h2>Calendario</h2>
                <TiThMenu className="icon_menu"/>
            </div>
            <hr/>
            <br/>

            <Calendar />
        </>
    );
}

export default Calendar;