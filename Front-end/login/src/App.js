import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, auth, provider } from './appAuth';  // Ajustar la ruta a appAuth.js

//icons
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

function App({ handleLogin }) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const funcion_login = async (event) => {
    event.preventDefault();
    try {
      const success = await handleLogin({ _identifier: identifier, _password: password });

      if (success) {
        navigate("/home");
      } else {
        alert("Correo o contraseña incorrecta");
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      alert("Correo o contraseña incorrecta");
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const googleToken = result.credential.idToken;

      const response = await axios.post('http://localhost:3001/api/login-google', {
        _googleIdToken: googleToken,
      });

      if (response.data.success) {
        console.log(response.data);
        alert('Sesión iniciada con éxito');
        navigate('/home');
      } else {
        console.log(response.data);
        alert('Error al iniciar sesión con Google');
      }
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
      alert('Error al iniciar sesión con Google');
    }
  };

  const facebookLogin = () => {
    if (!window.FB) return;
    //hacer login
    window.FB.getLoginStatus(response => {
      if (response.status === "connected") {
        //leer los datos del usuario 
        facebookLoginHandler(response);
      }
      else {
        // intentar iniciar sesión
        window.FB.login(facebookLoginHandler, { scope: 'public_profile,email' });
      }
    });
  };

  const facebookLoginHandler = (response) => {
    console.log(response);

    if (response.status === "connected") {
      //leer datos del usuario
      window.FB.api('/me?fields=id,name,email,picture', userData => {
        console.log(userData);

        //almacenar la sesión del usuario en nuestra app
      });
    }
  };

  function go_to_recoverpassword() {
    navigate("/recover-password");
  }

  function go_to_register() {
    navigate("/register");
  }

  return (
    <div className='login'>
      <img src='../logo.svg' width="150" height="150" />
      <br />
      <br />
      <br />
      <br />

      <form onSubmit={funcion_login}>
        <br />
        <IoIosMail className='icon_Mail' />
        <input className='Correo'
          id='user'
          type='text'
          value={identifier}
          onChange={(event) => setIdentifier(event.target.value)}
          placeholder='Correo o Usuario'
        />
        <br />
        <br />

        <RiLockPasswordFill className='icon_password' />
        <input className='password'
          id='Password'
          type='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder='Contraseña'
        />
        <br />

        <div className='olive_contraseña'>
          <p><a onClick={go_to_recoverpassword}>¿Olvidaste tu contraseña?</a></p>
        </div>

        {error && <p className='error'>{error}</p>}
        <br />

        <button className='b_login' type='submit'>Iniciar sesión</button>
        <br />
        <br />

        <div className='b_tipo_login'>
          <button className='b_google' type='button'
            onClick={loginWithGoogle}>
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
          <button className='b_faccebook'
            type='submit'
            onClick={facebookLogin}
          >facebook</button>
        </div>

        <br />

        <div className='Registro'>
          <p>¿No tienes cuenta?
            <u>
              <a id='registro' onClick={go_to_register}> Regístrate</a>
            </u>
          </p>
          <br />
        </div>
      </form>
    </div>
  );
}

export default App;
