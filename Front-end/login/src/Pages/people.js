import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import Comunicador from "../components/Comunicador";
import { FaAngleLeft } from "react-icons/fa";
import Actionbar from "../components/actionbar";

function People() {
  const navigate = useNavigate();
  const [pictograms, setPictograms] = useState([]);
  const { selectedNames, updateSelectedNames } = useAppContext();

  useEffect(() => {
    fetchPictograms();
  }, []);

  const fetchPictograms = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/category/pictograms?categoryName=Personas"
      );
      if (!response.ok) {
        throw new Error("Error fetching pictograms");
      }
      const pictogramsData = await response.json();
      setPictograms(pictogramsData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNameClick = (pictogram) => {
    updateSelectedNames((prevSelectedNames) => {
      const firstEmptyIndex = prevSelectedNames.findIndex(
        (obj) => Object.keys(obj).length === 0
      );

      if (firstEmptyIndex !== -1) {
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

  const handlePictogramAdded = async () => {
    await fetchPictograms();
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

export default People;
