import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import Comunicador from "../components/Comunicador";
import Actionbar from "../components/actionbar";

function Home() {
  const navigate = useNavigate();
  const { selectedNames, categories } = useAppContext();

  useEffect(() => {
    // Guardar las categorías en el localStorage al cargar la página
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  function goto_actions() {
    navigate("/actions");
  }

  function goto_food() {
    navigate("/food");
  }

  function goto_feelings() {
    navigate("/feelings");
  }

  function goto_Hygiene() {
    navigate("/hygiene");
  }

  function goto_people() {
    navigate("/people");
  }

  // Función para ir a la página de una categoría seleccionada
  const gotoCategory = (categoryName) => {
    navigate(`/${categoryName}`);
  };

  return (
    <>
      <div className="Home">
        <Comunicador selectedNames={selectedNames} />

        <br />
        <hr />
        <p className="category">
          <b>Categorías</b>
        </p>
        <br />

        <div className="pic-category-container">
          <div className="contorno" onClick={goto_actions}>
            <img
              src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Acciones.svg"
              width="100"
              height="100"
            />
            <p>Acciones</p>
          </div>
          <div className="contorno" onClick={goto_food}>
            <img
              src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Alimentos.svg"
              width="100"
              height="100"
            />
            <p>Alimentos</p>
          </div>
          <div className="contorno" onClick={goto_feelings}>
            <img
              src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y Sentimientos/Sentimientos.svg"
              width="100"
              height="100"
            />
            <p className="lugares-y-personas">Deseos y sentimientos</p>
          </div>
          <div className="contorno" onClick={goto_Hygiene}>
            <img
              src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Higiene.svg"
              width="100"
              height="100"
            />
            <p>Higiene</p>
          </div>
          <div className="contorno" onClick={goto_people}>
            <img
              src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Lugares y personas.svg"
              width="100"
              height="100"
            />
            <p className="lugares-y-personas">Personas</p>
          </div>
          {/* Aquí puedes agregar las categorías adicionales */}
          {categories.map((category, index) => (
            <div
              key={index}
              className="contorno"
              onClick={() => gotoCategory(category.name)}
            >
              <img
                src={category.image}
                alt={category.name}
                width="100"
                height="100"
              />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
        <br />
        <br />
        <div>
          <hr />
          <Actionbar />
        </div>
      </div>
    </>
  );
}

export default Home;
