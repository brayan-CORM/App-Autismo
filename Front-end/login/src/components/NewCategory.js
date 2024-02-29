import React, { useState } from "react";

function NewCategory({ onAddCategory, closePopup }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar que se haya ingresado un nombre y una imagen
    if (!name.trim()) {
      setError("Por favor ingresa un nombre para la categoría.");
      return;
    }

    if (!image) {
      setError("Por favor selecciona una imagen para la categoría.");
      return;
    }

    // Crear un objeto formData con los datos del formulario
    const formData = {
      name: name,
      image: image,
    };

    // Llama a la función onAddCategory con formData
    onAddCategory(formData);
    // Cierra el popup después de agregar la categoría
    closePopup();
  };

  return (
    <div>
      <h2>Agregar nueva categoría</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de la categoría:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Imagen de la categoría:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
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
