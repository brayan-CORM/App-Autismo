import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

//icons
import { FaRegUserCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaAngleLeft } from "react-icons/fa";

function Hygiene(){

    const navigate = useNavigate();
    const [people, setNames] = useState([
        { name: "Baño",img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Higiene/baño.svg"},
        { name: "Cepillo de dientes", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Higiene/cepillo de dientes.svg" },
        { name: "Papel de baño", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Higiene/papel de baño.svg" },
      ]);
      const [people2, setNames2] = useState([
        { name: "Pasta de dientes",img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Higiene/pasta de dientes.svg"},
        { name: "Jabon", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Higiene/jabon liquido.svg" },
        { name: "Agregar", img: "../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Higiene/mas.svg" },
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
                <h2>Comunicador</h2>
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
                <p><b>Alimentos</b></p>
            </div>
            <br/>

            <div className="pic-category-row1">
<<<<<<< HEAD
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
=======
                <Draggable>
                    <div className="contorno">
                        <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Higiene/baño.svg" width="100" height="100"
                        className="pic_agua"/>
                        <p>baño</p>
                    </div>
                </Draggable>
                <Draggable>
                    <div className="contorno">
                        <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Higiene/cepillo de dientes.svg" width="100" height="100"
                        className="pic_carne"/>
                        <p>Cepillo de dientes</p>
                    </div>
                </Draggable>
                <Draggable>
                    <div className="contorno">
                        <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Higiene/papel de baño.svg" width="100" height="100"
                        className="pic_leche"/>
                        <p>Papel de baño</p>
                    </div>
                </Draggable>
            </div>
            <br/>
            <br/>
            <div className="pic-category-row2">
                <Draggable>
                    <div className="contorno">
                        <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Higiene/tina de baño.svg" width="100" height="100"
                        className="pic_sopa"/>
                        <p>Tina de baño</p>
                    </div>
                </Draggable>
                <Draggable>    
                    <div className="contorno">
                        <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Higiene/Pasta de dientes.svg" width="100" height="100"
                        className="pic_verduras"/>
                        <p>Pasata de dientes</p>
                    </div>
                </Draggable>
                <div className="contorno">
                    
                </div>
            </div>
>>>>>>> 5432fc81316adfb895389733b6229dec9b469271

            </div>
        </body>
    )
}

export default Hygiene;