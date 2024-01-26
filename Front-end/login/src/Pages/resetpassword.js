import React from "react";
import axios from "axios";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

//icons
import { FaAngleLeft } from "react-icons/fa";

function ResetPassword(){

    const [_newPassword, setNewpassword] = React.useState("");
    const [_confirmPassword, setconfirmPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const navigate = useNavigate();

    const funcion_recover = async (event) =>{
        event.preventDefault();
        try{
            const response = await axios.post('http://localhost:3001/api/reset-password',{
                _newPassword: _newPassword,
                _confirmPassword:  _confirmPassword

            });
            if (response.data.success) {
                console.log(response.data);
                navigate("/");
                alert("Contraseña cambiada con exito");
            } else {
                console.log(response.data);
                alert("Recuperación fallida");
            }
        }
        catch (error){
            setError("Error de recuperación");
        }
    }

    return(
        <body>
            <div className="RecoverPassword">
                <FaAngleLeft className="icon_back" 
                onClick={() => navigate('/')}/>
                <h2>Recuperar contraseña</h2>
            </div>
                <hr width="80%"></hr>
                <br/>
                <br/>
                <br/>
                <br/>

            <form onSubmit={funcion_recover}>
            <div className="Parrafo">
                <p htmlFor="inputPassword">Ingrese la nueva contraseña<br/>
                </p>
            </div>
            <br/>
            <label htmlFor="inputConPassword">Contraseña</label>
            <br/>
            <RiLockPasswordFill className='icon_password'/>
            <input
                className="regis_password"
                id="inputPassword"
                type="password"
                value={_newPassword}
                onChange={(event) => setNewpassword(event.target.value)}
                placeholder="Contraseña"
            />
            <br/>
            <br/>
            <br/>
            <label htmlFor="inputConPassword">Confirmar contraseña</label>
            <br/>
            <RiLockPasswordFill className='icon_password'/>
            <input
                className="confi_password"
                id="inputConPassword"
                type="password"
                value={_confirmPassword}
                onChange={(event) => setconfirmPassword(event.target.value)}
                placeholder="Confirmar contraseña"
            />
            <br/>
            <br/>
            <br/>
            {error && <p className='error'>{error}</p>}
            <div>
                <button className='b_reg_login' type='submit'>Cambiar contraseña</button>
            </div>
            </form>
        </body>
    )
}

export default ResetPassword;