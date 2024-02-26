import React from "react";
import { useNavigate } from 'react-router-dom';
import Comunicador from "../components/Comunicador";
import { FaAngleLeft } from "react-icons/fa";
import { useAppContext } from "../AppContext";
import Actionbar from "../components/actionbar";

function Feelings() {
  const navigate = useNavigate();
  const { selectedNames, updateSelectedNames, pictograms } = useAppContext();

  const handleNameClick = (pictogram) => {
    updateSelectedNames((prevSelectedNames) => {
      const firstEmptyIndex = prevSelectedNames.findIndex(obj => Object.keys(obj).length === 0);

      if (firstEmptyIndex !== -1) {
        const updatedNames = [...prevSelectedNames];
        updatedNames[firstEmptyIndex] = pictogram;
        return updatedNames;
      }

      return prevSelectedNames;
    });
  };

  const people = [
    { name: "Estoy bien", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y sentimientos/estoy bien.svg" },
    { name: "Necesito ayuda", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y sentimientos/necesito ayuda.svg" },
    { name: "No", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y sentimientos/no.svg" },
    { name: "Quiero", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y sentimientos/quiero.svg" },
    { name: "Si", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y sentimientos/si.svg" },
    ...pictograms.map((pictogram, index) => ({ name: pictogram.name, img: pictogram.img }))
  ];

  return (
    <div className="Home">
      <Comunicador selectedNames={selectedNames} />

      <br />
      <hr></hr>
      <div className="icon_back_comunicador">
        <FaAngleLeft id="icon_back_action" onClick={() => navigate('/home')} />
        <p><b>Categorías</b></p>
      </div>
      <br />

      <div className="pic-category-container">
        {people.map((person, index) => (
          <div
            key={index}
            className="contorno"
            onClick={() => handleNameClick(person)}
          >
            <img src={person.img} width="120" height="100" alt={person.name} />
            <p style={{ textAlign: "center" }}>{person.name}</p>
          </div>
        ))}
      </div>

      <br />
      <div>
        <hr />
        <Actionbar />
      </div>
    </div>
  );
}

export default Feelings;
