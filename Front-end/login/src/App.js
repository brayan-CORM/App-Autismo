import React from 'react';
import './style.css';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//icons
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

function App() {
  //todo lo que va afuera es la logica, no se ve en la app
  //variables:
  const [_identifier, setIdentifier] = React.useState(""); // Cambié el nombre de la variable para reflejar que puede ser el username o el mail
  const [_password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const funcion_login = async(event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        _identifier, // Usamos la variable que puede ser el username o el mail
        _password
      });

      if (response.data.success) {
        console.log(response.data);
        navigate("/home");
      } else {
        console.log(response.data);
        return alert("Correo o contraseña incorrecta");
      }
    } catch (error) {
      setError("Correo o contraseña incorrecta");
    }
  }

  function go_to_recoverpassword() {
    navigate("/recover-password");
  }

  function go_to_register() {
    navigate("/register");
  }

  return (
    <body>
      <div className='login'>
        <img src='../Logo.png' width="150" height="150" />
        <br/>
        <br/>
        <br/>
        <br/>
        
        <form onSubmit={funcion_login}>
          <br/>
          <IoIosMail className='icon_Mail'/>
          <input className='Correo'
            id='user'
            type='text'
            value={_identifier}
            onChange={(event) => setIdentifier(event.target.value)}
            placeholder='Correo o Usuario' // Cambié el texto para reflejar que puede ser correo o usuario
          />
          <br/>
          <br/>

          <RiLockPasswordFill className='icon_password'/>
          <input className='password'
            id='Password'
            type='password'
            value={_password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder='Contraseña'
          />
          <br/>

          <div className='olive_contraseña'>
            <p><a onClick={go_to_recoverpassword}>¿Olvidaste tu contraseña?</a></p>
          </div>
          
          {error && <p className='error'>{error}</p>}
          <br/>

          <button className='b_login' type='submit'>Iniciar sesión</button>
          <br/>
          <br/>
          
          <div className='b_tipo_login'>
            <button className='b_google' type='submit'>
              <div className='l_google'>
                <p className='G'>G
                  <span className='O'>o</span>
                  <span className='o'>o</span>
                  <span className='g'>g</span>
                  <span className='l'>l</span>
                  <span className='e'>e</span>
                </p>
              </div>
            </button>
            <button className='b_faccebook' type='submit'>Facebook</button>
          </div>

          <br/>

          <div className='Registro'>
            <p>¿No tienes cuenta?
              <u>
                <a className='registro' onClick={go_to_register}> Regístrate</a>
              </u>
            </p>
            <br/>
          </div>
        </form>
      </div>
    </body>
  );
}

export default App;
