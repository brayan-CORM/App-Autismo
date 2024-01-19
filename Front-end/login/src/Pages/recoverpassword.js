import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

//icons
import { FaAngleLeft } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function RecoverPassword(){

    const [identifier, setIdentifier] = React.useState("");
    const [error, setError] = React.useState("");
    const navigate = useNavigate();

    const funcion_recover = async (event) =>{
        event.preventDefault();
        try{
            const response = await axios.post('http://localhost:3001/api/reset-password',{
                _identifier: identifier
            });
            if (response.data.success) {
                console.log(response.data);
                navigate("/");
                alert("Recuperación exitosa");
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
                    <p className="parrafo">Ingrese el correo electronico o usuario utilizado<br/>
                    en la parte de registro:</p>
                </div>
                <br/>
                <br/>
            <div className="recuperar">
                <IoIosMail className='icon_Mail_2'/>
                <input
                    className="recover_mail"
                    type="Mail"
                    value={identifier}
                    onChange={(event) => setIdentifier(event.target.value)}
                    placeholder="Correo o usuario"
                />
            </div>
            <br/>
            <br/>
            <br/>
            {error && <p className='error'>{error}</p>}
            <div>
                <button className='b_reg_login' type='submit'>Recuperar cuenta</button>
            </div>
            </form>
        </body>
    )
}

export default RecoverPassword;