const Category = require("../models/Category");
const fs = require("fs");
const path = require("path");

const CategoryService = {
  createCategories: async function (categoryNames, categoryImages) {
    try {
      const newCategories = [];

      for (let i = 0; i < categoryNames.length; i++) {
        const categoryName = categoryNames[i];
        const categoryImage = categoryImages[i];

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

        newCategories.push(newCategory);
      }

      return newCategories;
    } catch (error) {
      throw error;
    }
  },

  addPictograms: async function (categoryId, pictogramNames, pictogramImages) {
    try {
      // Obtén la categoría por su ID
      const category = await Category.findById(categoryId);

      const newPictograms = [];

      for (let i = 0; i < pictogramNames.length; i++) {
        const pictogramName = pictogramNames[i];
        const pictogramImage = pictogramImages[i];

        // Mueve la imagen al directorio de uploads y usa su nombre original
        const originalFileName = pictogramImage.originalname;
        const newPath = path.join(__dirname, "..", "uploads", originalFileName);
        fs.renameSync(pictogramImage.path, newPath);

        // Agrega el nuevo pictograma a la lista de pictogramas de la categoría
        category.pictograms.push({
          pictogramName: pictogramName,
          pictogramImage: originalFileName, // Utiliza el nombre original de la imagen
        });

        newPictograms.push(category.pictograms[category.pictograms.length - 1]);
      }

      // Guarda los cambios en la categoría
      await category.save();

      return newPictograms;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = CategoryService;
