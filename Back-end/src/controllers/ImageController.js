// ImageController.js
const express = require('express');
const router = express.Router();
const ImageService = require('../services/ImageService');

const multer = require('multer');
const upload = multer();

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // Verifica si se recibió un archivo
    if (!req.file) {
      return res.status(400).json({ error: 'No se ha proporcionado ningún archivo' });
    }

    // Llama al servicio para subir la imagen y almacenar la información en la base de datos
    const uploadedImage = await ImageService.uploadImage(req.file);

    // Puedes enviar la respuesta al cliente, por ejemplo, con el ID de la imagen
    res.status(201).json({ imageId: uploadedImage._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
