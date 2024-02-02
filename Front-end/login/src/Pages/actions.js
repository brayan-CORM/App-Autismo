import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
//icons
import { FaRegUserCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaAngleLeft } from "react-icons/fa";

function Actions() {

    const navigate = useNavigate();
    const [people, setNames] = useState([
        { name: "Comer",img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Acciones/comer.svg"},
        { name: "Ir al baño", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Acciones/ir al baño.svg" },
        { name: "Papá", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Acciones/bañar.svg" },
      ]);
      const [people2, setNames2] = useState([
        { name: "Bañar",img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Acciones/jugar.svg"},
        { name: "Lavarse las manos", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Acciones/lavarse las manos.svg" },
        { name: "Agregar", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Acciones/mas.svg" },
      ]);

    const [selectedNames, setSelectedNames] = useState([{}, {}, {}]);
    
    const handleNameClick = (name) => {
        setSelectedNames((prevSelectedNames) => {
          //console.log('name', name)
          const firstEmptyIndex = prevSelectedNames.findIndex(obj => Object.keys(obj).length === 0);
          //console.log('firstEmptyIndex', firstEmptyIndex)
    
          if (firstEmptyIndex !== -1) {
            //console.log('name', name)
            // Update the array with the clicked name
            const updatedNames = [...prevSelectedNames];
            //console.log('updatedNames', updatedNames)
            updatedNames[firstEmptyIndex] = name;
            //console.log('updatedNames', updatedNames)
            return updatedNames;
        }
          return prevSelectedNames; // Return original array if no empty space is found
        });
      };

    return (
        <body>
            <div className="Home">
                <div className="comunicador">
                    <h2>Acciones</h2>
                    <div className="icon_perfil">
                        <FaRegUserCircle id="icon_perfil" />
                        <p className="perfil_text">Perfil</p>
                    </div>
                </div>
                <hr width="80%"></hr>
                <br />

<<<<<<< HEAD
                <div className="Container">
                    <div className="Row">
                        {selectedNames.map((person, index) =>(
                            <div key={index} className="Empty-item">
                                {person?.img}
                            </div>
                        ))}
                        <div className="icons_contenedor">    
                            <div className="icon_speaker">
                                <HiSpeakerWave />
                            </div>
                            <br/>
                            <br/>
                            <div className="icon_delete">
                                <FaDeleteLeft />
                            </div>
=======
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
                        <br />
                        <br />
                        <div className="icon_delete">
                            <FaDeleteLeft />
                        </div>
>>>>>>> 5432fc81316adfb895389733b6229dec9b469271
                    </div>
                    </div>
                </div>
<<<<<<< HEAD
                
                <br/>
                <hr width="80%"></hr>
                <div className="icon_back_comunicador">
                    <FaAngleLeft id="icon_back_action"
                    onClick={()=>navigate('/home')}/>
                    <p><b>Categorías</b></p>
=======
                <br />
                <hr width="80%"></hr>
                <div className="icon_back_comunicador">
                    <FaAngleLeft id="icon_back_action"
                        onClick={() => navigate('/home')} />
                    <p><b>Acciones</b></p>
>>>>>>> 5432fc81316adfb895389733b6229dec9b469271
                </div>
                <br />

                <div className="pic-category-row1">
<<<<<<< HEAD
                    {people.map((person,index) => (
                        <div
                        key={index}
                        className="contorno"
                        onClick ={ ()=> handleNameClick(person)}
                        >
                            <img src={person.img} width="120" height="100"/>
                            {person.name}
                        </div>
                    ))}
                </div>
                <br/>
                <br/>
                <div className="pic-category-row2">
                    {people2.map((person,index) => (
                        <div
                        key={index}
                        className="contorno"
                        onClick ={ ()=> handleNameClick(person)}
                        >
                            <img src={person.img} width="100" height="100"/>
                            {person.name}
                        </div>
                    ))}
                </div>
            </div>  
=======
                    <Draggable>
                        <div className="contorno">
                            <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Acciones/comer.svg" width="100" height="100" />
                            <p>Comer</p>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="contorno">
                            <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Acciones/ir al baño.svg" width="100" height="100" />
                            <p>Ir al baño</p>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="contorno">
                            <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Acciones/bañar.svg" width="100" height="100" />
                            <p>Bañar</p>
                        </div>
                    </Draggable>
                </div>
                <br />
                <br />
                <div className="pic-category-row2">
                    <Draggable>
                        <div className="contorno">
                            <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Acciones/jugar.svg" width="100" height="100" />
                            <p>Animales</p>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="contorno">
                            <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Acciones/lavarse las manos.svg" width="100" height="100" />
                            <p>Escuela</p>
                        </div>
                    </Draggable>
                    <div className="contorno">

                    </div>
                </div>
            </div>
>>>>>>> 5432fc81316adfb895389733b6229dec9b469271
        </body>
    )
}

export default Actions;