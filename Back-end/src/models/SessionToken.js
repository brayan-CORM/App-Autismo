const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionTokenSchema = new Schema({
  token: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now, expires: 60 * 60 * 12 }, // Expira después de 24 horas (en segundos)
});

module.exports = mongoose.model("SessionToken", sessionTokenSchema);
