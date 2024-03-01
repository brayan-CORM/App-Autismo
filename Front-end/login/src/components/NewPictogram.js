import React, { useState } from "react";

function NewPictogram({ onAddPictogram, closePopup }) {
  const [pictogramName, setPictogramName] = useState("");
  const [pictogramImage, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!pictogramName.trim()) {
      setError("Por favor ingresa un nombre para el pictograma.");
      return;
    }

    if (!pictogramImage) {
      setError("Por favor selecciona una imagen para el pictograma.");
      return;
    }

    const formData = new FormData();
    formData.append("pictogramName", pictogramName); // Corregido el nombre del campo
    formData.append("pictogramImage", pictogramImage); // Corregido el nombre del campo

    try {
      // Ajusta la URL según la configuración de tu API
      const response = await fetch(
        "http://localhost:3001/api/category/uploadPictograms",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      onAddPictogram(result);
      closePopup();
    } catch (error) {
      setError("Error al guardar pictograma: " + error.message);
    }
  };

  return (
    <div>
      <h2>Agregar nuevo pictograma</h2>
      <form onSubmit={handleSubmit}>
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
            accept="image/*" // Corregido el tipo de archivo aceptado
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
