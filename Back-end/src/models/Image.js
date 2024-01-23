// ImageModel.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: String,
  filePath: String, // Nuevo campo para la ruta del archivo en el sistema de archivos
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
