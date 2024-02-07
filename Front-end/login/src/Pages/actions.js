import React from "react";
import { useNavigate } from 'react-router-dom';
import Comunicador from "./Comunicador";
import { FaAngleLeft } from "react-icons/fa";
import { useAppContext } from "../AppContext";
import Actionbar from "./actionbar";

function Actions() {
  const navigate = useNavigate();
  const { selectedNames, updateSelectedNames } = useAppContext();

  const people = [
    { name: "Comer", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Acciones/comer.svg" },
    { name: "Ir al baño", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Acciones/ir al baño.svg" },
    { name: "Bañar", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Acciones/bañar.svg" },
  ];
  const people2 = [
    { name: "Jugar", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Acciones/jugar.svg" },
    { name: "Lavarse las manos", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Acciones/lavarse las manos.svg" },
    { name: "Agregar", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Acciones/mas.svg" },
  ];

  const handleNameClick = (person) => {
    updateSelectedNames((prevSelectedNames) => {
      const firstEmptyIndex = prevSelectedNames.findIndex(obj => Object.keys(obj).length === 0);

      if (firstEmptyIndex !== -1) {
        const updatedNames = [...prevSelectedNames];
        updatedNames[firstEmptyIndex] = person;
        return updatedNames;
      }

      return prevSelectedNames;
    });
  };

  return (
    <div className="Home">
      <Comunicador selectedNames={selectedNames} />

      <br/>
      <hr></hr>
      <div className="icon_back_comunicador">
        <FaAngleLeft id="icon_back_action" onClick={() => navigate('/home')} />
        <p><b>Categorías</b></p>
      </div>
      <br />

      <div className="pic-category-row1">
        {people.map((person, index) => (
          <div
            key={index}
            className="contorno"
            onClick={() => handleNameClick(person)}
          >
            <img src={person.img} width="120" height="100" alt={person.name} />
            {person.name}
          </div>
        ))}
      </div>
      <br/>
      <br/>
      <div className="pic-category-row2">
        {people2.map((person, index) => (
          <div
            key={index}
            className="contorno"
            onClick={() => handleNameClick(person)}
          >
            <img src={person.img} width="100" height="100" alt={person.name} />
            {person.name}
          </div>
        ))}
      </div>

      <br/>
      <div>    
        <hr/>
        <Actionbar />
      </div>
    </div>  
  );
}

export default Actions;
