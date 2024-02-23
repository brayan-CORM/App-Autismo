import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from "../AppContext";
import NewCategory from "./NewCategory";

//icons
import { TiHome } from "react-icons/ti";
import { FaCalendarAlt } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";

function Actionbar() {

    const navigate = useNavigate();
    const { categories, updateCategories } = useAppContext();
    const [popupOpen, setPopupOpen] = useState(false);
    const [showButtons, setShowButtons] = useState(false);

    function goto_calendar() {
        navigate("/calendar");
    }

    function handleAddButtonClick() {
        setShowButtons(!showButtons);
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
        <div className="menu_acciones">
            <div className="add_icon_container">
                <BsPlusCircleFill className="add_icon" onClick={handleAddButtonClick} />
                {showButtons && (
                    <div className="buttons_container">
                        <button className="Agregar Categoría" onClick={openPopup}>Agregar Categoría</button>
                        <button className="Agregar Pictograma" onClick={() => {}}>Agregar Pictograma</button>
                    </div>
                )}
            </div>
            <TiHome className="icon_home" id="home_icon" onClick={() => navigate('/home')} />
            <FaCalendarAlt className="icon_calendar" onClick={goto_calendar} />
        </div>
    );
}

export default Actionbar;
