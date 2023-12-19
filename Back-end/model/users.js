const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"El nombre de usuario es obligatorio"],
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user",
    },
    mail:{
        type:String,
        required:[true,"El mail es obligatorio"],
    },
    password:{
        type:String,
        required:[true,"La contraseña es obligatoria"],
    },
    confirmPassword:{
        type:String,
        required:[true,"La contraseña no coincide"]
    }
});

module.exports = mongoose.model("user", userSchema);