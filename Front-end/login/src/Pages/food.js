import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

//icons
import { FaRegUserCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaAngleLeft } from "react-icons/fa";

function Food(){

    const navigate = useNavigate();
    const [people, setNames] = useState([
        { name: "Agua",img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/alimentos/agua.svg"},
        { name: "Carne", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/alimentos/carne.svg" },
        { name: "Leche", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/alimentos/leche.svg" },
      ]);
      const [people2, setNames2] = useState([
        { name: "Sopa",img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/alimentos/sopa.svg"},
        { name: "Verduras", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/alimentos/verduras.svg" },
        { name: "Agregar", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/alimentos/mas.svg" },
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

    return(
        <body>
        <div className="Home">
            <div className="comunicador">
                <h2>Alimentos</h2>
                <div className="icon_perfil">
                    <FaRegUserCircle id="icon_perfil"/>
                    <p className="perfil_text">Perfil</p>
                </div>
            </div>
            <hr width="80%"></hr>
            <br/>

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
            <br/>

            <div className="pic-category-row1">
                    {people.map((person,index) => (
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
    </body>
    )
}

export default Food;