const express = require ("express"); //sirve para utilizar un puerto para las aplicaciones
const cors = require ("cors"); //son para las reglas de los servidores
const bodyParser = require("body-parser"); //es para leer el cuerpo de la solicitud
const db = require("./db");
const User = require("./model/users");
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
//login
app.post("/api/login", async function(req, res){
    let mail_resivido  = req.body._mail;
    
    let password_resivido = req.body._password;

    try {
        const usuario_encontrado = await User.findOne({mail:mail_resivido});
        if(!usuario_encontrado){
            return res.status(404).json({
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
                    token:token,
                    success:true
                });
            }
        }
    }   
    catch(error){
        console.log(error);
    }
});

//registro
const createUser = async(req,res)=>{
    const {
        regName,
        regRole,
        regMail,
        regPassword,
    }= req.body;
    try {
        const mailexists = await User.exists({mail:regMail});
        if(mailexists){
            return res.status(400).json({
                msg:"El correo ya existe"
            });
        }
        else{
            const password_cifrado = await bcrypt.hash(regPassword,10);
            const newUser = new User({
                username: regName,
                role: regRole,
                mail: regMail,
                password: password_cifrado,
            });
            const createUser = await newUser.save();//para guardar
            return res.status(201).json({
                msg:"Usuario creado",
                user: createUser._id,
                success: true
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


db.connect();

//reglas del servidor, siempre van al final del codigo
const port = 3001;
app.listen(port,()=>{
    console.log(`app running on port ${port}`)
})