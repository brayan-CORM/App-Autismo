import React from "react";
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable'; // The default
import {DraggableCore} from 'react-draggable'; // <DraggableCore>
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time


//icons
import { FaRegUserCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaAngleLeft } from "react-icons/fa";

function Food(){

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
                <FaAngleLeft id="icon_back_action"
                onClick={()=>navigate('/home')}/>
                <p><b>Alimentos</b></p>
            </div>
            <br/>
            <div className="pic-category-row1">
                <Draggable>
                    <div className="contorno">
                        <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/alimentos/agua.svg" width="100" height="100"
                        className="pic_agua"/>
                        <p>Agua</p>
                    </div>
                </Draggable>
                <Draggable>
                    <div className="contorno">
                        <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/alimentos/carne.svg" width="100" height="100"
                        className="pic_carne"/>
                        <p>Carne</p>
                    </div>
                </Draggable>
                <Draggable>
                    <div className="contorno">
                        <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/alimentos/leche.svg" width="100" height="100"
                        className="pic_leche"/>
                        <p>Leche</p>
                    </div>
                </Draggable>
            </div>
            <br/>
            <br/>
            <div className="pic-category-row2">
                <Draggable>
                    <div className="contorno">
                        <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/alimentos/sopa.svg" width="100" height="100"
                        className="pic_sopa"/>
                        <p>Sopa</p>
                    </div>
                </Draggable>
                <Draggable>
                    <div className="contorno">
                        <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/alimentos/verduras.svg" width="100" height="100"
                        className="pic_verduras"/>
                        <p>Verduras</p>
                    </div>
                </Draggable>
                <div className="contorno">
                    
                </div>
            </div>

        </div>
    </body>
    )
}

export default Food;