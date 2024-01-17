import React from "react";
import { useNavigate } from 'react-router-dom';

//icons
import { FaRegUserCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaAngleLeft } from "react-icons/fa";

function People(){

    const navigate = useNavigate();

    return(
        <body>
            <div className="Home">
                <div className="comunicador">
                    <h2>Comunicador</h2>
                    <div className="icon_perfil">
                        <FaRegUserCircle id="icon_perfil"/>
                        <p className="perfil_text">Perfil</p>
                    </div>
                </div>
                <hr width="80%"></hr>
                <br/>

                <div className="contenedor-comunicador">
                    <div className="contorno1">

                    </div>
                    <div className="contorno2">
                        
                    </div>
                    <div className="contorno3">
                        
                    </div>
                    <div className="icons_contenedor">    
                            <div className="icon_speaker">
                                <HiSpeakerWave />
                            </div>
                            <br/>
                            <br/>
                            <div className="icon_delete">
                                <FaDeleteLeft />
                            </div>
                    </div>
                </div>
                <br/>
                <hr width="80%"></hr>
                <div className="icon_back_comunicador">
                    <FaAngleLeft className="icon_back_action"
                    onClick={()=>navigate('/home')}/>
                    <p><b>Personas</b></p>
                </div>
                <br/>

                <div className="pic-category-row1">
                <div className="contorno">
                    <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Personas/yo.svg" width="100" height="100"
                    className="bajar_pic"/>
                    <p>Yo</p>
                </div>
                <div className="contorno">
                    <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Personas/mama.svg" width="100" height="100"
                    className="bajar_pic"/>
                    <p>Mamá</p>
                </div>
                <div className="contorno">
                    <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Personas/papa.svg" width="100" height="100"
                    className="bajar_pic"/>
                    <p>Papá</p>
                </div>
            </div>
            <br/>
            <br/>
            <div className="pic-category-row2">
            <div className="contorno">
                    <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Personas/compañeros.svg" width="100" height="100"
                    className="bajar_pic"/>
                    <p>Compañeros</p>
                </div>
                <div className="contorno">
                    <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Personas/terapeuta.svg" width="100" height="100"
                    className="bajar_pic"/>
                    <p>Terapeuta</p>
                </div>
                <div className="contorno">
                    
                </div>
            </div>

            </div>
        </body>
    )
}

export default People;