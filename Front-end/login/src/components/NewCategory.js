import React, { useState } from "react";

function NewCategory({ onAddCategory, closePopup }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Crear un objeto formData con los datos del formulario
    const formData = {
      name: name,
      image: image
    };
    // Llama a la función onAddCategory con formData
    onAddCategory(formData);
    // Cierra el popup después de agregar la categoría
    closePopup();
  };

  return (
    <div>
      <h2>Add New Category</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />
        </label>
        <br />
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
}

export default NewCategory;
