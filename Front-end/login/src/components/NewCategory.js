import React, { useState } from 'react';

function NewCategory({ onAddCategory, closePopup }) {
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState(null);
  const [error, setError] = useState('');

  const handleCategoryNameChange = (e) => {
    setError(''); // Reset error message when the user starts typing
    setCategoryName(e.target.value);
  };

  const handleCategoryImageChange = (e) => {
    setError(''); // Reset error message when the user selects a file
    setCategoryImage(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!categoryName.trim()) {
      setError('Por favor ingresa un nombre para la categoría.');
      return;
    }

    if (!categoryImage) {
      setError('Por favor selecciona una imagen para la categoría.');
      return;
    }

    const formData = new FormData();
    formData.append('categoryName', categoryName);
    formData.append('categoryImage', categoryImage);

    try {
      const response = await fetch('http://localhost:3001/api/category/upload', {
        method: 'POST',
        body: formData,
        // No need to set Content-Type header, as FormData will set it for you
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      onAddCategory(result);
      closePopup(); // Close the popup only if the category is successfully added
    } catch (error) {
      setError(`Error al guardar la categoría: ${error.message}`);
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
            onChange={handleCategoryNameChange}
          />
        </label>
        <br />
      <label>
      Imagen de la categoría:
      <input
         type="file"
         accept="image/*"
         onChange={handleCategoryImageChange}
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