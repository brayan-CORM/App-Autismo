const Category = require("../models/Category");
const fs = require("fs");
const path = require("path");

const CategoryService = {
  createCategory: async function (categoryName, categoryImage) {
    try {
      // Obtén el nombre original del archivo desde la ruta proporcionada por Multer
      const originalFileName = categoryImage.originalname;

      // Mueve la imagen al directorio de uploads y usa su nombre original
      const newPath = path.join(__dirname, "..", "uploads", originalFileName);
      fs.renameSync(categoryImage.path, newPath);

      // Crea una nueva instancia de la categoría con los datos proporcionados
      const newCategory = new Category({
        categoryName: categoryName,
        categoryImage: originalFileName, // Utiliza el nombre original de la imagen
      });

      // Guarda el nombre de la categoría y el nombre de la imagen en la base de datos
      await newCategory.save();

      return newCategory;
    } catch (error) {
      throw error;
    }
  },

  addPictogram: async function (categoryId, pictogramName, pictogramImage) {
    try {
      // Obtén la categoría por su ID
      const category = await Category.findById(categoryId);

      // Mueve la imagen al directorio de uploads y usa su nombre original
      const originalFileName = pictogramImage.originalname;
      const newPath = path.join(__dirname, "..", "uploads", originalFileName);
      fs.renameSync(pictogramImage.path, newPath);

      // Agrega el nuevo pictograma a la lista de pictogramas de la categoría
      category.pictograms.push({
        pictogramName: pictogramName,
        pictogramImage: originalFileName, // Utiliza el nombre original de la imagen
      });

      // Guarda los cambios en la categoría
      await category.save();

      // Retorna el nuevo pictograma añadido
      return category.pictograms[category.pictograms.length - 1];
    } catch (error) {
      throw error;
    }
  },

  getAllCategories: async function () {
    try {
      // Busca todas las categorías en la base de datos
      const categories = await Category.find({});
      return categories;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = CategoryService;
