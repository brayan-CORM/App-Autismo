import React, { useState } from "react";

function NewCategory({ onAddCategory, closePopup }) {
  const [categoryName, setcategoryName] = useState("");
  const [categoryImage, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!categoryName.trim()) {
      setError("Por favor ingresa un nombre para la categoría.");
      return;
    }

    if (!categoryImage) {
      setError("Por favor selecciona una imagen para la categoría.");
      return;
    }

    const formData = new FormData();
    formData.append("categoryName", categoryName);
    formData.append("categoryImage", categoryImage);

    try {
      const response = await fetch(
        "http://localhost:3001/api/category/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      onAddCategory(result);
      closePopup();
    } catch (error) {
      setError("Error al guardar la categoría: " + error.message);
    }
  };

  return (
    <div>
      <h2>Agregar nueva categoría</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de la categoría:
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setcategoryName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Imagen de la categoría:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </label>
        <br />
        <button type="submit">Agregar categoría</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default NewCategory;
