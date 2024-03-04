import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import Comunicador from "../components/Comunicador";
import Actionbar from "../components/actionbar";

function Home() {
  const navigate = useNavigate();
  const { selectedNames } = useAppContext();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/category/categories"
      );
      if (!response.ok) {
        throw new Error("Error fetching categories");
      }
      const categoriesData = await response.json();
      setCategories(categoriesData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryAdded = async () => {
    await fetchCategories();
  };

  const gotoCategory = (categoryName) => {
    // Guardar el nombre de la categoría en localStorage
    localStorage.setItem("selectedCategory", categoryName);
    // Navegar a la página de la categoría correspondiente
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
          {/* Aquí puedes agregar las categorías adicionales */}
          {categories.map((category, index) => (
            <div
              key={index}
              className="contorno"
              onClick={() => gotoCategory(category.categoryName)}
            >
              <img
                src={`http://localhost:3001/uploads/${category.categoryImage}`}
                alt={category.categoryName}
                width="100"
                height="100"
              />
              <p>{category.categoryName}</p>
            </div>
          ))}
        </div>
        <br />
        <br />
        <div>
          <hr />
          <Actionbar onCategoryAdded={handleCategoryAdded} />
        </div>
      </div>
    </>
  );
}

export default Home;
