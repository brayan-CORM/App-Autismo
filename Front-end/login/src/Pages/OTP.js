import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

//icons
import { FaAngleLeft } from "react-icons/fa";

import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { RecoveryContext } from "../App";

export default function () {
  const { email, otp, setPage } = useContext(RecoveryContext);
  const [timerCount, setTimer] = React.useState(60);
  const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
  const [disable, setDisable] = useState(true);

  function resendOTP() {
    if (disable) return;
    axios
      .post("http://localhost:5000/send_recovery_email", {
        OTP: otp,
        recipient_email: email,
      })
      .then(() => setDisable(true))
      .then(() => alert("Un nuevo código a sido enviado a tu correo"))
      .then(() => setTimer(60))
      .catch(console.log);
  }

  function verfiyOTP() {
    if (parseInt(OTPinput.join("")) === otp) {
      setPage("reset");
      return;
    }
    alert(
      "El código que escribiste es incorrecto, reintentalo o vuelve a reenvía el correo"
    );
    return;
  }
    return(
      <>
            <div className="RecoverPassword">
                <FaAngleLeft className="icon_back" 
                onClick={() => navigate('/')}/>
                <h2>Un código ha sido enviado a tu correo electrónico</h2>
            </div>
                <hr width="80%"></hr>
                <br/>
                <br/>
                <br/>
                <br/>
                

            <form onSubmit={funcion_recover}>
                <div className="Parrafo">
                    <p className="parrafo">Ingrese el Código</p>
                </div>
                <br/>
                <br/>
                <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  <div className="w-16 h-16 ">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                      onChange={(e) =>
                        setOTPinput([
                          e.target.value,
                          OTPinput[1],
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }
                    ></input>
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          e.target.value,
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }
                    ></input>
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          e.target.value,
                          OTPinput[3],
                        ])
                      }
                    ></input>
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          OTPinput[2],
                          e.target.value,
                        ])
                      }
                    ></input>
                  </div>
                </div>
              </div>
            {error && <p className='error'>{error}</p>}
            <div>
                <button className='b_reg_login' type='submit'>Ingresar</button>
            </div>
            <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-balck-500">
                    <p>¿No reciviste el correo?</p>{" "}
                    <a
                      className="flex flex-row items-center"
                      style={{
                        color: disable ? "gray" : "blue",
                        cursor: disable ? "none" : "pointer",
                      }}
                      onClick={() => resendOTP()}
                    >
                      {disable ? `Reenviar código en ${timerCount}s` : "Reenviar código"}
                    </a>
                  </div>
            </form>
    </>        
    )
}

