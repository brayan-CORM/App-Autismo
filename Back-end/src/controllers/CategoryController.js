const express = require("express");
const router = express.Router();
const CategoryService = require("../services/CategoryService");

// Importa el middleware de Multer para la carga de archivos
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("categoryImage"), async (req, res) => {
  try {
    const { categoryName } = req.body;
    const originalImageName = req.file.originalname; // Obtener el nombre original de la imagen

    // Llama al servicio para crear la categoría
    const newCategory = await CategoryService.createCategory(
      categoryName,
      req.file // Pasa el objeto de la imagen completo
    );

    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post(
  "/uploadPictograms",
  upload.single("pictogramImage"),
  async (req, res) => {
    try {
      const { categoryId, pictogramName } = req.body;
      const originalImageName = req.file.originalname; // Obtener el nombre original de la imagen

      // Llama al servicio para agregar un pictograma a la categoría
      const newPictogram = await CategoryService.addPictogram(
        categoryId,
        pictogramName,
        req.file // Pasa el objeto de la imagen completo
      );

      res.status(201).json(newPictogram);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
