import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "../AppContext";
import NewCategory from "./NewCategory";
import NewPictogram from "./NewPictogram";

//icons
import { TiHome } from "react-icons/ti";
import { FaCalendarAlt } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";

function Actionbar({ onCategoryAdded, onPictogramAdded }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { categories, updateCategories } = useAppContext();
  const { pictograms, updatePictograms } = useAppContext();
  const [popupOpen, setPopupOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [popupType, setPopupType] = useState("");

  function goto_calendar() {
    navigate("/calendar");
  }

  function handleAddButtonClick() {
    setShowButtons(!showButtons);
  }

  const isHomePage = location.pathname === "/home";

  const openPopup = (type) => {
    setPopupType(type);
    setPopupOpen(true);
    const newWindow = window.open(
      "",
      "_blank",
      "width=300,height=300,left=200,top=200"
    );
    newWindow.document.body.innerHTML = `
      <div style="padding: 20px;">
        <span id="closeButton" style="cursor: pointer; float: right;">&times;</span>
        <h2>${
          type === "category"
            ? "Agregar nueva categoria"
            : "Agregar nuevo pictograma"
        }</h2>
        <div id="newItemForm"></div>
      </div>
    `;
    const Component = type === "category" ? NewCategory : NewPictogram;
    if (type === "category") {
      ReactDOM.render(
        <NewCategory
          onAddCategory={async (formData) => {
            await addCategory(formData);
            onCategoryAdded();
          }}
          closePopup={() => {
            closePopup(newWindow);
          }}
        />,
        newWindow.document.getElementById("newItemForm")
      );
    } else {
      ReactDOM.render(
        <NewPictogram
          onAddPictogram={async (formData) => {
            await addPictogram(formData);
            onPictogramAdded();
          }}
          closePopup={() => closePopup(newWindow)}
        />,
        newWindow.document.getElementById("newItemForm")
      );
    }

    const closeButton = newWindow.document.getElementById("closeButton");
    closeButton.addEventListener("click", () => {
      closePopup(newWindow);
    });
  };

  function closePopup(newWindow) {
    if (newWindow) {
      newWindow.close();
    }
    setPopupOpen(false);
  }

  function addCategory(formData) {
    const updatedCategories = [...categories, formData];
    updateCategories(updatedCategories);
    setPopupOpen(false);
  }

  async function addPictogram(formData) {
    const updatedPictograms = [...pictograms, formData];
    updatePictograms(updatedPictograms);
    setPopupOpen(false);
  }

  return (
    <div className="menu_acciones">
      <BsPlusCircleFill className="add_icon" onClick={handleAddButtonClick} />
      <TiHome
        className="icon_home"
        id="home_icon"
        onClick={() => navigate("/home")}
      />
      <FaCalendarAlt className="icon_calendar" onClick={goto_calendar} />

      <div className="add_icon_container">
        {showButtons && (
          <div className="buttons_container">
            {isHomePage && (
              <button
                className={`Add Category b_login b_tipo_login`}
                onClick={() => openPopup("category")}
              >
                Agregar Categoría
              </button>
            )}
            {!isHomePage && (
              <button
                className={`Add Pictogram b_login b_tipo_login`}
                onClick={() => openPopup("pictogram")}
              >
                Agregar Pictograma
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Actionbar;
