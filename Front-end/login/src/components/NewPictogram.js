import React, { useState } from "react";

function NewPictogram({ onAddPictogram, closePopup }) {
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
    const newPictogram = {
      name: name,
      img: image,
    };

    // Llama a la función onAddPictogram con el nuevo pictograma
    onAddPictogram(newPictogram);
    // Cierra el popup después de agregar el pictograma
    closePopup();
  };

  return (
    <div>
      <h2>Agregar nuevo pictograma</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del pictograma:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Imagen del pictograma:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
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
