import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import Comunicador from "../components/Comunicador";
import { FaAngleLeft } from "react-icons/fa";
import Actionbar from "../components/actionbar";

function Feelings() {
  const navigate = useNavigate();
  const [pictograms, setPictograms] = useState([]);
  const { selectedNames, updateSelectedNames } = useAppContext();

  useEffect(() => {
    fetchPictograms();
  }, []); // Load pictograms on initial render

  const fetchPictograms = () => {
    fetch(
      "http://localhost:3001/api/category/pictograms?categoryName=Deseos%20y%20sentimientos"
    )
      .then((response) => response.json())
      .then((pictogramsData) => {
        setPictograms(pictogramsData);
      })
      .catch((error) => {
        console.error("Error fetching pictograms:", error);
      });
  };

  const handleNameClick = (pictogram) => {
    updateSelectedNames((prevSelectedNames) => {
      const firstEmptyIndex = prevSelectedNames.findIndex(
        (obj) => Object.keys(obj).length === 0
      );

      if (firstEmptyIndex !== -1) {
        const updatedNames = [...prevSelectedNames];
        updatedNames[firstEmptyIndex] = pictogram;
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
            onClick={() => handleNameClick(pictogram)}
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

export default Feelings;
