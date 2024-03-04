import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Diary.css"; // Archivo de estilos personalizados

function Diary() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="diary-container">
      <h2>Diary</h2>
      <div className="npm-calendar">
        <Calendar
          className="calendar"
          showWeekNumbers
          onChange={onChange}
          value={date}
        />
      </div>
      <p>Selected date: {date.toDateString()}</p>
    </div>
  );
}

export default Diary;
