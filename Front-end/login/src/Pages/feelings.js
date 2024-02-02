import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

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
                    </div>
                </div>

                <br/>
                <hr width="80%"></hr>
                <div className="icon_back_comunicador">
                    <FaAngleLeft id="icon_back_action" 
                    onClick={()=>navigate('/home')}/>
                    <p><b>Categorías</b></p>
                </div>
                <br />

                <div className="pic-category-row1">
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
                </div>

            </div>
    )
}

export default Animals;