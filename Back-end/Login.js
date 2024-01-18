const express = require ("express"); //sirve para utilizar un puerto para las aplicaciones
const cors = require ("cors"); //son para las reglas de los servidores
const bodyParser = require("body-parser"); //es para leer el cuerpo de la solicitud
const db = require("./db");
const User = require("./model/users");
const bcrypt = require("bcrypt");   //modulo de incriptacion para textos
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'villevalleemm@gmail.com', // Tu dirección de correo electrónico
        pass: 'leht bnvb wazr wjoy',       // Tu contraseña
    },
});

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
app.post("/api/login", async function(req, res) {
    let identifier = req.body._identifier; // Puede ser el username o el mail
    let password_received = req.body._password;

    try {
        const usuario_encontrado = await User.findOne({
            $or: [{ username: identifier }, { mail: identifier }],
        });

        if (!usuario_encontrado) {
            return res.status(404).json({
                msg: "Usuario no encontrado",
            });
        } else {
            const match = await bcrypt.compare(
                password_received,
                usuario_encontrado.password
            );

            if (!match) {
                return res.status(401).json({
                    msg: "Usuario y contraseña no coinciden",
                });
            } else {
                const payload = {
                    id: usuario_encontrado._id,
                    name: usuario_encontrado.fullName,
                };
                const token = jwt.sign(payload, jwtkey, { expiresIn: 60 });
                return res.status(200).json({
                    msg: "Login exitoso",
                    token: token,
                    success: true,
                });
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error interno del servidor",
        });
    }
});

//registro
//const createUser = async(req,res)=>{
    
//}

app.post("/api/register", async function(req, res) {
    const {
        regFullName,
        regUsername,
        regRole,
        regMail,
        regPassword,
    } = req.body;

    try {
        const mailexists = await User.exists({ mail: regMail });
        if (mailexists) {
            return res.status(400).json({
                msg: "El correo ya existe",
                success: false
            });
        } else {
            const password_cifrado = await bcrypt.hash(regPassword, 10);
            const newUser = new User({
                fullName: regFullName,
                username: regUsername,
                role: regRole,
                mail: regMail,
                password: password_cifrado,
            });

            const createUser = await newUser.save();

            return res.status(201).json({
                msg: "Usuario creado",
                user: createUser._id,
                success: true
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: "Error interno del servidor",
            success: false
        });
    }
});

//reset-password
app.post("/api/reset-password", async function (req, res) {
    let identifier = req.body._identifier; // Puede ser el username o el mail

    try {
        // Lógica para buscar el usuario por username o mail
        const usuario_encontrado = await User.findOne({
            $or: [{ username: identifier }, { mail: identifier }],
        });

        if (!usuario_encontrado) {
            return res.status(404).json({
                msg: "Usuario no encontrado",
            });
        
        } else {
            const resetLink = `http://www.google.com/`;
        const mailOptions = {
            from: 'KeetNah',
            to: usuario_encontrado.mail,
            subject: 'Recuperación de Contraseña',
            text: `Haga clic en el siguiente enlace para restablecer su contraseña: ${resetLink}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    msg: "Error al enviar el correo electrónico",
                });
            } else { // Enviar un correo electrónico al usuario con el enlace de restablecimiento
                console.log('Correo electrónico enviado: ' + info.response);
                return res.status(200).json({
                    msg: "Se ha enviado un correo electrónico con instrucciones para restablecer la contraseña",
                    success: true,
                });
            }
        });
        }
        // Generar y almacenar un token de restablecimiento de contraseña en la base de datos
        //const resetToken = jwt.sign({ userId: usuario_encontrado._id }, jwtkey, { expiresIn: '1h' });
        //usuario_encontrado.resetToken = resetToken;
        //await usuario_encontrado.save(); no se que hice

        
            
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error interno del servidor",
        });
    }
});

app.post("/api/reset-password/:token", async function (req, res) {
    const resetToken = req.params.token;
    const newPassword = req.body.newPassword; // Asegúrate de que el cliente envíe la nueva contraseña en el cuerpo de la solicitud

    try {
        // Verificar el token de restablecimiento
        const decodedToken = jwt.verify(resetToken, jwtkey);

        // Obtener el usuario asociado con el token
        const usuario_encontrado = await User.findById(decodedToken.userId);

        if (!usuario_encontrado) {
            return res.status(404).json({
                msg: "Usuario no encontrado",
            });
        }

        // Actualizar la contraseña del usuario
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        usuario_encontrado.password = hashedPassword;
        usuario_encontrado.resetToken = undefined; // Limpiar el token de restablecimiento
        await usuario_encontrado.save();

        return res.status(200).json({
            msg: "Contraseña restablecida exitosamente",
            success: true,
        });
    } catch (error) {
        console.log(error);
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                msg: "El token ha expirado",
            });
        } else {
            return res.status(401).json({
                msg: "Token no válido",
            });
        }
    }
});

db.connect();

//reglas del servidor, siempre van al final del codigo
const port = 3001;
app.listen(port,()=>{
    console.log(`app running on port ${port}`)
})