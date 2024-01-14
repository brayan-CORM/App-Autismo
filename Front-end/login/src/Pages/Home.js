import React from "react";
import { useNavigate } from 'react-router-dom';

//icons
import { FaRegUserCircle } from "react-icons/fa";

function Home(){

    const navigate = useNavigate();

    function goto_places_people(){
        navigate("/places-people");
    }
    function goto_actions(){
        navigate("/actions");
    }
    function goto_food(){
        navigate("/food");
    }
    function goto_animals(){
        navigate('/animals');
    }
    function goto_school(){
        navigate('/school');
    }
    function goto_bathroom(){
        navigate('/bathroom')
    }
    function goto_house(){
        navigate('/house')
    }

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
                <p className="category"><b>Categorías</b></p>
                <br/>

            <div className="pic-category-row1">
                <div className="contorno" onClick={goto_places_people}>
                    <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Lugares y personas.svg" width="100" height="100"/>
                    <p className="lugares-y-personas">Lugares y personas</p>
                </div>
                <div className="contorno" onClick={goto_actions}>
                    <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Acciones.svg" width="100" height="100"/>
                    <p>Acciones</p>
                </div>
                <div className="contorno" onClick={goto_food}>
                    <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Alimentos.svg" width="100" height="100"/>
                    <p>Alimentos</p>
                </div>
            </div>
            <br/>
            <br/>
            <div className="pic-category-row2">
            <div className="contorno" onClick={goto_animals}>
                    <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Animales.svg" width="100" height="100"/>
                    <p>Animales</p>
                </div>
                <div className="contorno" onClick={goto_school}>
                    <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Escuela.svg" width="100" height="100"/>
                    <p>Escuela</p>
                </div>
                <div className="contorno" onClick={goto_bathroom}>
                    <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Higiene.svg" width="100" height="100"/>
                    <p>Baño</p>
                </div>
            </div>
            <br/>
            <br/>
            <div className="pic-category-row3">
                <div className="contorno" onClick={goto_house}>
                    <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Hogar.svg" width="100" height="100"/>
                    <p>Hogar</p>
                </div>
            </div>
            </div>
        </body>
    );

}

export default Home;