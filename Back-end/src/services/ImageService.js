// ImageService.js
const Image = require('../models/Image');
const path = require('path');
const fs = require('fs/promises');

class ImageService {
  static async uploadImage(file) {
    try {
      // Obtiene el nombre original del archivo
      const filename = file.originalname;
      // Define la ruta del archivo en el sistema de archivos
      const newPath = 'C:\\Users\\ville\\source\\repos\\App-Autismo\\Front-end\\login\\public\\pictogramas_KeetNah-20240110T205802Z-001\\uploads';
      const filePath = path.join(newPath, filename);

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
