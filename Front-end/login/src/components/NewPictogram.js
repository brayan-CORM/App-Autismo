import React, { useState } from "react";

function NewPictogram({ onAddPictogram, closePopup }) {
  const [categoryName, setCategoryName] = useState("");
  const [pictogramName, setPictogramName] = useState("");
  const [pictogramImage, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!categoryName.trim()) {
      setError("Por favor ingresa un nombre para la categoría.");
      return;
    }

    if (!pictogramName.trim()) {
      setError("Por favor ingresa un nombre para el pictograma.");
      return;
    }

    if (!pictogramImage) {
      setError("Por favor selecciona una imagen para el pictograma.");
      return;
    }

    try {
      // Buscar el categoryId por el nombre de la categoría
      const response = await fetch(
        `http://localhost:3001/api/category/categories?categoryName=${encodeURIComponent(
          categoryName
        )}`
      );
      if (!response.ok) {
        throw new Error("Error al buscar la categoría");
      }
      const categories = await response.json();
      if (categories.length === 0) {
        throw new Error("La categoría especificada no existe.");
      }
      const categoryId = categories[0]._id;

      // Preparar los datos para enviar al servidor
      const formData = new FormData();
      formData.append("categoryId", categoryId);
      formData.append("pictogramName", pictogramName);
      formData.append("pictogramImage", pictogramImage);

      // Enviar los datos al servidor
      const uploadResponse = await fetch(
        "http://localhost:3001/api/category/uploadPictograms",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!uploadResponse.ok) {
        throw new Error("Error al subir el pictograma");
      }

      // Obtener el nuevo pictograma creado
      const result = await uploadResponse.json();
      onAddPictogram(result);
      closePopup();
    } catch (error) {
      setError("Error al guardar el pictograma: " + error.message);
    }
  };

  return (
    <div>
      <h2>Agregar nuevo pictograma</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de la categoría:
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Nombre del pictograma:
          <input
            type="text"
            value={pictogramName}
            onChange={(e) => setPictogramName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Imagen del pictograma:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </label>
        <br />
        <button type="submit">Agregar pictograma</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default NewPictogram;
