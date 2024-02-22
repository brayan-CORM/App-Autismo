import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Calendar from '../components/calenda';

//icons
import { TiHome } from "react-icons/ti";
import { TiThMenu } from "react-icons/ti";

function Calendario() {

    const navigate = useNavigate();

    function goto_home(){
        navigate("/home");
    }

    return(
        <>
            <div className="calendario">    
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
 
export default Calendario;