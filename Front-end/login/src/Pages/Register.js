import React, { useEffect } from "react";
import "../style.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//icons
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { PiScrollFill } from "react-icons/pi";
import { FaAngleLeft } from "react-icons/fa";

function Register() {
  const [regFullName, setRegistrarNombre] = React.useState("");
  const [regUsername, setRegistrarUsername] = React.useState("");
  const [regRole, setRegistrarRole] = useState("");
  const [regMail, setRegistrarCorreo] = React.useState("");
  const [regPassword, setRegistrarContraseña] = React.useState("");
  const [ConfirmPassword, setConfirmarContraseña] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setRegistrarRole(event.target.value);
  };

  useEffect(() => {
    window.particlesJS.load("particles-js", "particlesjs-config.json");

    return () => {
      window.particlesJS && window.particlesJS("particles-js", {});
    };
  }, []);

  const funcion_register = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/register", {
        regFullName: regFullName,
        regUsername: regUsername,
        regRole: regRole,
        regMail: regMail,
        regPassword: regPassword,
        ConfirmPassword: ConfirmPassword,
      });

      if (response.data.success) {
        console.log(response.data);
        navigate("/");
        alert("Registro exitoso");
      } else {
        console.log(response.data);
        alert("Registro fallido");
      }
    } catch (error) {
      setError("Registro fallido");
    }
  };

  return (
    <>
      <div className="Register">
        <FaAngleLeft className="icon_back" onClick={() => navigate("/")} />
        <h2>Registro</h2>
      </div>
      <hr width="80%"></hr>
      <br />
      <br />

      <form onSubmit={funcion_register}>
        <FaUserCircle className="icon_user" />
        <br />
        <br />
        <br />

        <label htmlFor="inputNombre">Nombre completo</label>
        <br />
        <FaUser className="icon_name" />
        <input
          className="regis_name"
          id="inputNombre"
          type="text"
          value={regFullName}
          onChange={(event) => setRegistrarNombre(event.target.value)}
          placeholder="Nombre completo"
        />
        <br />

        <label htmlFor="inputUsername">Nombre de usuario</label>
        <br />
        <FaUser className="icon_name" />
        <input
          className="regis_username"
          id="inputUsername"
          type="text"
          value={regUsername}
          onChange={(event) => setRegistrarUsername(event.target.value)}
          placeholder="Nombre de usuario"
        />
        <br />

        <label htmlFor="inputRole">Rol</label>
        <br />
        <PiScrollFill className="icon_role" />
        <select className="ComboBox" value={regRole} onChange={handleChange}>
          <option value="Seleccione una opción">Seleccione...</option>
          <option value="admin">Administrador</option>
          <option value="user">Usuario</option>
        </select>
        <br />

        <label htmlFor="inputCorreo">Correo</label>
        <br />
        <IoIosMail className="icon_Mail" />
        <input
          className="regis_mail"
          id="inputCorreo"
          type="Mail"
          value={regMail}
          onChange={(event) => setRegistrarCorreo(event.target.value)}
          placeholder="Correo"
        />
        <br />

        <label htmlFor="inputPassword">Contraseña</label>
        <br />
        <RiLockPasswordFill className="icon_password" />
        <input
          className="regis_password"
          id="inputPassword"
          type="password"
          value={regPassword}
          onChange={(event) => setRegistrarContraseña(event.target.value)}
          placeholder="Contraseña"
        />
        <br />

        <label htmlFor="inputConPassword">Confirmar contraseña</label>
        <br />
        <RiLockPasswordFill className="icon_password" />
        <input
          className="confi_password"
          id="inputConPassword"
          type="password"
          value={ConfirmPassword}
          onChange={(event) => setConfirmarContraseña(event.target.value)}
          placeholder="Confirmar contraseña"
        />
        <br />
        <br />
        {error && <p className="error">{error}</p>}
        <br />

        <button className="b_reg_login" type="submit">
          Crear cuenta
        </button>
      </form>
    </>
  );
}

export default Register;
