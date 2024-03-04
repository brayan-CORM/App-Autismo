import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import Comunicador from "../components/Comunicador";
import { FaAngleLeft } from "react-icons/fa";
import Actionbar from "../components/actionbar";

function Food() {
  const navigate = useNavigate();
  const [pictograms, setPictograms] = useState([]);
  const { selectedNames, updateSelectedNames } = useAppContext();

  useEffect(() => {
    fetchPictograms();
  }, []); // Load pictograms on initial render

  const fetchPictograms = () => {
    fetch(
      "http://localhost:3001/api/category/pictograms?categoryName=Alimentos"
    )
      .then((response) => response.json())
      .then((pictogramsData) => {
        setPictograms(pictogramsData);
      })
      .catch((error) => {
        console.error("Error fetching pictograms:", error);
      });
  };

  const handlePictogramClick = (pictogram) => {
    // Envía el pictograma al comunicador
    updateSelectedNames((prevSelectedNames) => {
      // Busca el primer índice vacío en selectedNames
      const firstEmptyIndex = prevSelectedNames.findIndex(
        (obj) => Object.keys(obj).length === 0
      );

      if (firstEmptyIndex !== -1) {
        // Si hay un índice vacío, agrega el pictograma seleccionado
        const updatedNames = [...prevSelectedNames];
        updatedNames[firstEmptyIndex] = {
          name: pictogram.pictogramName,
          img: `http://localhost:3001/uploads/${pictogram.pictogramImage}`,
        };
        return updatedNames;
      }

      return prevSelectedNames;
    });
  };

  // Function to handle pictogram added
  const handlePictogramAdded = async () => {
    await fetchPictograms(); // Reload pictograms after adding a new one
  };

  return (
    <div className="Home">
      <br />
      <br />
      <Comunicador selectedNames={selectedNames} />
      <br />
      <br />
      <hr />
      <div className="icon_back_comunicador">
        <FaAngleLeft id="icon_back_action" onClick={() => navigate("/home")} />
        <p>
          <b>Categorías</b>
        </p>
      </div>
      <br />
      <br />
      <div className="pic-category-container">
        {pictograms.map((pictogram, index) => (
          <div
            key={index}
            className="contorno"
            onClick={() => handlePictogramClick(pictogram)}
          >
            <img
              src={`http://localhost:3001/uploads/${pictogram.pictogramImage}`}
              width="120"
              height="100"
              alt={pictogram.pictogramName}
            />
            <p style={{ textAlign: "center" }}>{pictogram.pictogramName}</p>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div>
        <hr />
        <Actionbar onPictogramAdded={handlePictogramAdded} />
      </div>
    </div>
  );
}

export default Food;
