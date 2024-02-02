import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
//icons
import { FaRegUserCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaAngleLeft } from "react-icons/fa";

function Animals() {

    const navigate = useNavigate();
    const [people, setNames] = useState([
        { name: "Estoy bien",img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y sentimientos/estoy bien.svg"},
        { name: "Necesito ayuda", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y sentimientos/necesito ayuda.svg" },
        { name: "No", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y sentimientos/no.svg" },
      ]);
      const [people2, setNames2] = useState([
        { name: "Quiero",img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y sentimientos/quiero.svg"},
        { name: "Si", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y sentimientos/si.svg" },
        { name: "Agregar", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y sentimientos/mas.svg" },
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
                    <h2>Deseos y sentimientos</h2>
                    <div className="icon_perfil">
                        <FaRegUserCircle id="icon_perfil" />
                        <p className="perfil_text">Perfil</p>
                    </div>
                </div>
                <hr width="80%"></hr>
                <br />

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
                    </div>
<<<<<<< HEAD
                    </div>
                </div>

                <br/>
                <hr width="80%"></hr>
                <div className="icon_back_comunicador">
                    <FaAngleLeft id="icon_back_action" 
                    onClick={()=>navigate('/home')}/>
                    <p><b>Categorías</b></p>
=======
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
                    </div>
                </div>
                <br />
                <hr width="80%"></hr>
                <div className="icon_back_comunicador">
                    <FaAngleLeft id="icon_back_action"
                        onClick={() => navigate('/home')} />
                    <p><b>Deseos y sentimientos</b></p>
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
                            <img src={person.img} width="120" height="100"/>
                            {person.name}
                        </div>
                    ))}
=======
                    <Draggable>
                        <div className="contorno">
                            <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y Sentimientos/estoy bien.svg" width="100" height="100" />
                            <p>Estoy bien</p>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="contorno">
                            <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y Sentimientos/necesito ayuda.svg" width="100" height="100" />
                            <p>Necesito ayuda</p>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="contorno">
                            <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y Sentimientos/no.svg" width="100" height="100" />
                            <p>No</p>
                        </div>
                    </Draggable>
                </div>
                <br />
                <br />
                <div className="pic-category-row2">
                    <div className="contorno">
                        <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y Sentimientos/quiero.svg" width="100" height="100" />
                        <p>Quiero</p>
                    </div>
                    <div className="contorno">
                        <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y Sentimientos/si.svg" width="100" height="100" />
                        <p>Si</p>
                    </div>
                    <div className="contorno">

                    </div>
>>>>>>> 5432fc81316adfb895389733b6229dec9b469271
                </div>

            </div>
        </body>
    )
}

export default Animals;