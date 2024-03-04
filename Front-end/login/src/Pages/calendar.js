import * as React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";

//icons
import { TiHome } from "react-icons/ti";
import "react-calendar/dist/Calendar.css"; // Importar estilos del calendario

export default function Calendario() {
  const navigate = useNavigate();

  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  function goto_home() {
    navigate("/home");
  }

  return (
    <div className="calendario-container">
      <div className="calendar-wrapper">
        <br />
        <br />
        <h2>Calendario</h2>
        <br />
        <br />
        <Calendar onChange={onChange} value={value} />
      </div>
      <br />
      <br />
      <TiHome className="icon_home" onClick={goto_home} />
      <br />
      <br />
    </div>
  );
}
