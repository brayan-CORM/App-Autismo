import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import Comunicador from "./Comunicador";
import { FaAngleLeft } from "react-icons/fa";
import { useAppContext } from "../AppContext";
import Actionbar from "./actionbar";

function Hygiene(){

    const navigate = useNavigate();
    const { selectedNames, updateSelectedNames } = useAppContext();

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
    
    
      const handleNameClick = (person) => {
        updateSelectedNames((prevSelectedNames) => {
          const firstEmptyIndex = prevSelectedNames.findIndex(obj => Object.keys(obj).length === 0);
    
          if (firstEmptyIndex !== -1) {
            const updatedNames = [...prevSelectedNames];
            updatedNames[firstEmptyIndex] = person;
            return updatedNames;
          }
    
          return prevSelectedNames;
        });
      };

    return(
        <div className="Home">
            <Comunicador selectedNames={selectedNames} />

            <br/>
            <hr></hr>
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

                <br/>
                <div>    
                  <hr/>
                  <Actionbar />
                </div>
        </div>
    )
}

export default Hygiene;