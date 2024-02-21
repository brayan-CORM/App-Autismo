import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from "../AppContext";
import NewCategory from "../components/NewCategory";
import Comunicador from "../components/Comunicador";
import Actionbar from "../components/actionbar";

function Home() {
  const navigate = useNavigate();
  const { selectedNames, categories, updateCategories } = useAppContext();
  const [isPopupOpen, setPopupOpen] = useState(false);

  function goto_actions() {
    navigate("/actions");
  }
  function goto_food() {
    navigate("/food");
  }
  function goto_feelings() {
    navigate('/feelings');
  }
  function goto_Hygiene() {
    navigate('/hygiene');
  }
  function goto_people() {
    navigate('/people');
  }

  const openPopup = () => {
    setPopupOpen(true);
    const newWindow = window.open("", "_blank", "width=300,height=300,left=200,top=200");
    newWindow.document.body.innerHTML = `
      <div style="padding: 20px;">
        <span id="closeButton" style="cursor: pointer; float: right;">&times;</span>
        <h2>Add New Category</h2>
        <div id="newCategoryForm"></div>
      </div>
    `;
    ReactDOM.render(<NewCategory onAddCategory={addCategory} closePopup={() => closePopup(newWindow)} />, newWindow.document.getElementById('newCategoryForm'));

    // Agregar evento de clic al botón de cierre en la nueva ventana
    const closeButton = newWindow.document.getElementById('closeButton');
    closeButton.addEventListener('click', () => {
      closePopup(newWindow);
    });
  };

  function closePopup(newWindow) {
    // Cerrar la ventana emergente si existe
    if (newWindow) {
      newWindow.close();
    }
    setPopupOpen(false);
  }

  function addCategory(formData) {
    const updatedCategories = [...categories, formData];
    updateCategories(updatedCategories);
    setPopupOpen(false); // Cerrar el popup después de agregar la categoría
  }

  return (
    <>
      <div className="Home">
        <Comunicador selectedNames={selectedNames} />

        <br />
        <hr />
        <p className="category"><b>Categorías</b></p>
        <br />

        <div className="pic-category-row1">
          <div className="contorno" onClick={goto_people}>
            <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Lugares y personas.svg" width="100" height="100" />
            <p className="lugares-y-personas">Personas</p>
          </div>
          <div className="contorno" onClick={goto_actions}>
            <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Acciones.svg" width="100" height="100" />
            <p>Acciones</p>
          </div>
          <div className="contorno" onClick={goto_food}>
            <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Alimentos.svg" width="100" height="100" />
            <p>Alimentos</p>
          </div>
        </div>
        <br />
        <br />
        <div className="pic-category-row2">
          {/* Categorías obligatorias */}
          <div className="contorno" onClick={goto_feelings}>
            <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y Sentimientos/Sentimientos.svg" width="100" height="100" />
            <p className="lugares-y-personas">Deseos y sentimientos</p>
          </div>
          <div className="contorno" onClick={goto_Hygiene}>
            <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Higiene.svg" width="100" height="100" />
            <p>Higiene</p>
          </div>
          {/* Mostrar categorías adicionales */}
          {categories.map((category, index) => (
            <div key={index} className="contorno" onClick={() => navigate(`/${category.name}`)}>
              <img src={category.image} alt={category.name} width="100" height="100" />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
        {/* Renderizar el botón "Agregar" al final */}
        <div className="pic-category-row2">
          <div className="contorno" onClick={openPopup}>
            <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/mas.svg" width="100" height="100" />
            <p>Agregar</p>
          </div>
        </div>
      </div>
      <br />

      <div>
        <hr />
        <Actionbar />
      </div>
    </>
  );
}

export default Home;
