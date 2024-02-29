// CategoryModel.js
const mongoose = require("mongoose");

const pictogramSchema = new mongoose.Schema({
  pictogramName: String,
  pictogramImage: String,
});

const categorySchema = new mongoose.Schema({
  categoryName: String,
  categoryImage: String,
  pictograms: [pictogramSchema], // Lista de pictogramas
});

module.exports = mongoose.model("Category", categorySchema);
