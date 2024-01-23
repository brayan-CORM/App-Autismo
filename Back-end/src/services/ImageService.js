// ImageService.js
const Image = require('../models/Image');
const path = require('path');
const fs = require('fs/promises');

class ImageService {
  static async uploadImage(file) {
    try {
      // Genera un nombre de archivo único
      const filename = Date.now().toString() + path.extname(file.originalname);
      // Define la ruta del archivo en el sistema de archivos
      const filePath = path.join(__dirname, '../public/uploads/', filename);

      // Guarda el archivo en el sistema de archivos
      await fs.writeFile(filePath, file.buffer);

      // Guarda la información de la imagen en la base de datos
      const newImage = new Image({ filename, filePath });
      await newImage.save();

      return newImage;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ImageService;
