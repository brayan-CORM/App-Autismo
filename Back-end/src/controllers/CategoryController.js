const express = require("express");
const router = express.Router();
const CategoryService = require("../services/CategoryService");

// Importa el middleware de Multer para la carga de archivos
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// Ruta para agregar una o varias categorías
router.post("/upload", upload.array("categoryImages"), async (req, res) => {
  try {
    const { categoryNames } = req.body;
    const categoryImages = req.files; // Obtener la lista de imágenes de categorías

    // Llama al servicio para crear las categorías
    const newCategories = await CategoryService.createCategories(
      categoryNames,
      categoryImages // Pasa la lista de objetos de imágenes completos
    );

    res.status(201).json(newCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Ruta para agregar una o varias pictogramas a una categoría específica
router.post(
  "/uploadPictograms",
  upload.array("pictogramImages"),
  async (req, res) => {
    try {
      const { categoryId, pictogramNames } = req.body;
      const pictogramImages = req.files; // Obtener la lista de imágenes de pictogramas

      // Llama al servicio para agregar los pictogramas a la categoría
      const newPictograms = await CategoryService.addPictograms(
        categoryId,
        pictogramNames,
        pictogramImages // Pasa la lista de objetos de imágenes completos
      );

      res.status(201).json(newPictograms);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
