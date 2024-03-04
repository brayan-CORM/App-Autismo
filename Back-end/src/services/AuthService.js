const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { auth, googleProvider } = require("../../config/firebaseConfig");
const User = require("../models/users");
const SessionToken = require("../models/SessionToken");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "villevalleemm@gmail.com",
    pass: "leht bnvb wazr wjoy",
  },
});

const jwtkey = "ao4m$o919des2e1";

const login = async ({ _identifier, _password }) => {
  try {
    const usuario_encontrado = await User.findOne({
      $or: [{ username: _identifier }, { mail: _identifier }],
    });

    if (!usuario_encontrado) {
      return { msg: "Usuario no encontrado", success: false };
    } else {
      const match = await bcrypt.compare(
        _password,
        usuario_encontrado.password
      );

      if (match) {
        const payload = {
          id: usuario_encontrado._id,
          name: usuario_encontrado.fullName,
        };
        const token = jwt.sign(payload, jwtkey);

        const sessionToken = new SessionToken({
          token: token,
          userId: usuario_encontrado._id,
        });
        await sessionToken.save();

        return { msg: "Login exitoso", token, success: true };
      } else {
        return { msg: "Contraseña incorrecta", success: false };
      }
    }
  } catch (error) {
    console.error(error);
    return { msg: "Error en el inicio de sesión", success: false };
  }
};

const logout = async (token) => {
  try {
    if (!token) {
      return { success: false, message: "Token no proporcionado" };
    }

    await SessionToken.findOneAndDelete({ token: token });

    return { success: true, message: "Cierre de sesión exitoso" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error durante el cierre de sesión" };
  }
};

const loginWithGoogle = async (_googleIdToken) => {
  try {
    const googleUserCredential = await auth.signInWithCredential(
      googleProvider.credential(_googleIdToken)
    );
    const user = googleUserCredential.user;

    const payload = {
      id: user.uid,
      name: user.displayName,
    };
    const token = jwt.sign(payload, jwtkey);

    return { msg: "Login exitoso con Google", token, success: true };
  } catch (error) {
    console.error(error);
    return { msg: "Error en el inicio de sesión con Google", success: false };
  }
};

const register = async ({
  regFullName,
  regUsername,
  regRole,
  regMail,
  regPassword,
}) => {
  try {
    const mailexists = await User.exists({ mail: regMail });
    if (mailexists) {
      return { msg: "El correo ya existe", success: false };
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

      return { msg: "Usuario creado", user: createUser._id, success: true };
    }
  } catch (error) {
    console.error(error);
    return { msg: "Error interno del servidor", success: false };
  }
};

const registerWithGoogle = async (_googleIdToken) => {
  try {
    const googleUserCredential = await auth.signInWithCredential(
      googleProvider.credential(_googleIdToken)
    );
    const user = googleUserCredential.user;

    const payload = {
      id: user.uid,
      name: user.displayName,
    };
    const token = jwt.sign(payload, jwtkey);

    return { msg: "Usuario creado con Google", token, success: true };
  } catch (error) {
    console.error(error);
    return { msg: "Error en el registro con Google", success: false };
  }
};

const resetPassword = async (_identifier) => {
  try {
    const usuario_encontrado = await User.findOne({
      $or: [{ username: _identifier }, { mail: _identifier }],
    });

    if (!usuario_encontrado) {
      return { msg: "Usuario no encontrado", success: false };
    }

    const resetId = usuario_encontrado._id.toString();
    const resetToken = jwt.sign({ userId: resetId }, jwtkey, {
      expiresIn: "5m",
    }); // Token expira en 5 minutos
    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;

    const mailOptions = {
      from: "villevalleemm@gmail.com",
      to: usuario_encontrado.mail,
      subject: "Recuperación de Contraseña",
      text: `Haga clic en el siguiente enlace para restablecer su contraseña: ${resetLink}`,
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Correo electrónico enviado: " + info.response);
          resolve();
        }
      });
    });

    return {
      msg: "Se ha enviado un correo electrónico con instrucciones para restablecer la contraseña",
      success: true,
    };
  } catch (error) {
    console.log(error);
    return { msg: "Error interno del servidor", success: false };
  }
};

const resetPasswordWithToken = async (
  _resetToken,
  _newPassword,
  _confirmPassword
) => {
  try {
    const decodedToken = jwt.verify(_resetToken, jwtkey);

    const usuario_encontrado = await User.findById(decodedToken.userId);

    if (!usuario_encontrado) {
      return { msg: "Usuario no encontrado", success: false };
    }

    if (_newPassword !== _confirmPassword) {
      return { msg: "Las contraseñas no coinciden", success: false };
    }

    const hashedPassword = await bcrypt.hash(_newPassword, 10);
    usuario_encontrado.password = hashedPassword;
    await usuario_encontrado.save();

    return { msg: "Contraseña restablecida exitosamente", success: true };
  } catch (error) {
    console.log(error);
    return {
      msg: "El enlace para restablecer la contraseña no es válido o ha expirado",
      success: false,
    };
  }
};

module.exports = {
  login,
  logout,
  loginWithGoogle,
  register,
  registerWithGoogle,
  resetPassword,
  resetPasswordWithToken,
};
