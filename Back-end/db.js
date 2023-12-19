const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path:".config.env"});

const DB = "mongodb+srv://bcordero869:ComunicacionEmocional@cluster0.igrndt0.mongodb.net/ComunicacionEmocional?retryWrites=true&w=majority";
  mongoose.set("strictQuery", false);

  const connect = async () => {
    try {
      await mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to the database");
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

  module.exports = {connect};