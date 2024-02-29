// mongooseConfig.js
const mongoose = require("mongoose");

// Definir directamente la cadena de conexión
const DB =
  "mongodb+srv://bcordero869:ComunicacionEmocional@cluster0.igrndt0.mongodb.net/ComunicacionEmocional?retryWrites=true&w=majority";

console.log("Database URL:", DB);

mongoose.set("strictQuery", false);

const connect = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Connected to the database");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = { connect };
