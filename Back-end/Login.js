const express = require ("express"); //sirve para utilizar un puerto para las aplicaciones
const cors = require ("cors"); //son para las reglas de los servidores
const bodyParser = require("body-parser"); //es para leer el cuerpo de la solicitud
const db = require("./db");
const User = require("./model/users");
const users = require("./model/users");
const bcrypt = require("bcrypt");   //modulo de incriptacion para textos
const jwt = require("jsonwebtoken");

const jwtkey = "ao4m$o919des2e1";

const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.static(`${__dirname}/public`));

//app.set('jwtkey', process.env.JWT_KEY);
app.use(cors());
app.use(bodyParser.json());
app.all('*', function (req, res, next) {    //req=request, res=response
    res.header('Access-Control-Allow-Origin', '*'); //el * es para que cualquier computadora del mundo pueda conectarse a nuestra app. 
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE,PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin', 'X-Api-Key', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization');
    next();
});

app.post("/api/login", async function(req, res){
    let mail_resivido  = req.body._mail;
    
    let password_resivido = req.body._password;

    try {
        const usuario_encontrado = await User.findOne({mail:mail_resivido});
        if(!usuario_encontrado){
            return res.status(401).json({
                msg:"Usuario no encontrado"
            });
        }
        else{
            const match = await bcrypt.compare(password_resivido,usuario_encontrado.password);
            if(!match){
                return res.status(401).json({
                    msg:"Usuario no coincide"
                });
            }
            else{
                const payload = {
                    id:usuario_encontrado._id,
                    name:usuario_encontrado.username
                }
                const token = jwt.sign(payload, jwtkey, {expiresIn:60});
                return res.status(200).json({
                    msg:"Login exitoso",
                    token:token
                });
            }
        }
    }   
    catch(error){
        console.log(error);
    }
});

//users
const createUser = async(req,res)=>{
    const {
        _username,
        _role,
        _mail,
        _password,
    }= req.body;
    try {
        const mailexists = await User.exists({mail:_mail});
        if(mailexists){
            return res.status(400).json({
                msg:"El correo ya existe"
            });
        }
        else{
            const password_cifrado = await bcrypt.hash(_password,10);
            const newUser = new User({
                username: _username,
                role: _role,
                mail: _mail,
                password: password_cifrado,
            });
            const createUser = await newUser.save();//para guardar
            return res.status(201).json({
                msg:"Usuario creado",
                user: createUser._id,
            });
        }
    }
    catch(error){
        console.log(error);
    }
}

app.post("/api/register", function(req,res){
    createUser(req,res);    
});

app.get("/api/traerusers", async(req,res)=>{    //async es para que esepre a que lleguen los datos y siempre debe de tener un awair
    try{
        const traer_users = await User.find();
        res.send(traer_users);
    }
    catch(error){
        console.log(error);
    }
});
//Encontrar un solo usuario
app.get("/api/oneuser/:mail", async(req,res)=>{
    try{
        const _mail = req.params.mail;
        const oneuser = await User.findOne({mail:_mail});
        res.status(200).json({
            msg:"Usuario encontrado",
            resultado: oneuser
        });
    }
    catch(error){
        console.log(error);
    }
});
//Borrar usuario
app.delete("/api/deleteuser/:id", async(req,res)=>{
    try {
        const _id = req.params.id; //el.id es de la url de la linea 99
        const deleteuser = await User.findOneAndDelete({_id:_id});
        res.status(200).json({
            msg:"Usuario borrado",
            resultado: deleteuser
        });
    }
    catch (error) {
        console.log(error);
    }
});
//Actualizar usuario
app.put("/api/updateuser", async(req,res)=>{
    const {
        _id,
        _username,
        _role,
        _mail,
        _password,
        _confirmPassword,
    }= req.body;
    try{
        return User.updateOne({_id:_id},{
            $set:{
                username: _username,
                role: _role,
                mail: _mail,
                password: _password,
                confirmPassword: _confirmPassword
            },
        })
        .then(resultado => {
            res.status(200).json({
                msg:"Usuario actualizado"
            });
        });
    }
    catch(error){
        console.log(error);
    }
});

db.connect();

//reglas del servidor, siempre van al final del codigo
const port = 3001;
app.listen(port,()=>{
    console.log(`app running on port ${port}`)
})