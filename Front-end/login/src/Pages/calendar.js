import * as React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";

//icons
import { TiHome } from "react-icons/ti";
import { TiThMenu } from "react-icons/ti";

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
    <div>
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
      <TiHome className="icon_home" onClick={goto_home} />
      <TiThMenu className="icon_menu" />
    </div>
  );
}
