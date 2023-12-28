import React from "react";
import './style_register.css';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//icons
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { PiScrollFill } from "react-icons/pi";

function Register(){
 
    const [regName, setRegistrar_nombre] = React.useState("");
    const [regRole, setregRole] = useState("")
    const [regMail, setRegistrar_correo] = React.useState("");
    const [regPassword, setRegistrar_contraseña] = React.useState("");
    const [ConfirmPassword, setConfirmar_contraseña] = React.useState("");
    const [error, setError] = React.useState("");
    const navigate = useNavigate();


    const handleChange = (event) => {
      setregRole(event.target.value)
    }



    const funcion_register = async(event)=>{
      console.log("regRole", regRole)
      console.log("regName", regName)

        event.preventDefault(); //evita errores
        try{
          const response = await axios.post('http://localhost:3001/api/register',{
            regName,
            regRole,
            regMail,
            regPassword,
            ConfirmPassword
          })
          if(response.data.success){
            console.log(response.data);
            navigate("/home");
          }
          else{
            console.log(response.data);
            alert("Registro fallido");
          }
        }  
        catch (error){
          setError ("Registro fallido");
        }
      }

    return(
        <body>
            <div className="Registro">
                <h2>Registro</h2>
        </div>

        <form onSubmit={funcion_register}>
            <FaUserCircle className="icon_user"/>
            <br/>
            <br/>
            <br/>

            <label for="inputNombre">Nombre completo</label>
            <br/>
            <FaUser className="icon_name"/>
            <input className="regis_name"
            id="inputNombre"
            type="text"
            value={regName}
            onChange={(event) => setRegistrar_nombre(event.target.value)}
            placeholder="Nombre completo" 
            />
            <br/>
            <br/>

            <label for="inputRole">Rol</label>
            <br/>
            <PiScrollFill className="icon_role"/>
            <select className="ComboBox" 
            value={regRole} onChange={handleChange}>
              <option value="Seleccione una opción">Seleccione...</option>
              <option value='admin'>Administrador</option>
              <option value='user'>Usuario</option>
            </select>
            <br/>
            <br/>

            <label for="inputCorreo">Correo</label>
            <br/>
            <IoIosMail className='icon_Mail'/>
            <input className="regis_mail"
            id="inputCorreo"
            type="Mail"
            value={regMail}
            onChange={(event) => setRegistrar_correo(event.target.value)}
            placeholder="Correo"
            />
            <br/>
            <br/>

            <label for="inputPassword">Contraseña</label>
            <br/>
            <RiLockPasswordFill className='icon_password'/>
            <input className="regis_password"
            id="inputPassword"
            type="password"
            value={regPassword}
            onChange={(event) => setRegistrar_contraseña(event.target.value)}
            placeholder="Contraseña"
            />
            <br/>
            <br/>

            <label for="inputConPassword">Confirmar contraseña</label>
            <br/>
            <RiLockPasswordFill className='icon_password'/>
            <input className="confi_password"
            id="inputConPassword"
            type="password"
            value={ConfirmPassword}
            onChange={(event) => setConfirmar_contraseña(event.target.value)}
            placeholder="Confirmar contraseña"
            />
            <br/>
            <br/>
            <br/>

            <button className='b_reg_login' type='submit'>Crear cuenta</button>
        </form>

        </body>
    );

}

export default Register;