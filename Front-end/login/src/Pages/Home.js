import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';


//icons
import { FaRegUserCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";

function Home() {

    const navigate = useNavigate();

    function goto_actions() {
        navigate("/actions");
    }
    function goto_food() {
        navigate("/food");
    }
    function goto_feelings() {
        navigate('/feelings');
    }
    function goto_Hygiene() {
        navigate('/hygiene');
    }
    function goto_people() {
        navigate('/people');
    }

<<<<<<< HEAD
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
=======
    return (
>>>>>>> 5432fc81316adfb895389733b6229dec9b469271
        <body>
            <div className="Home">
                <div className="comunicador">
                    <h2>Comunicador</h2>
                    <div className="icon_perfil">
                        <FaRegUserCircle id="icon_perfil" />
                        <p className="perfil_text">Perfil</p>
                    </div>
                </div>
                <hr width="80%"></hr>
<<<<<<< HEAD
                <br/>

                <div className="Container">
                    <div className="Row">
                        {selectedNames.map((person, index) =>(
                            <div key={index} className="Empty-item">
                                {person?.img}
                            </div>
                        ))}
                        <div className="icons_contenedor">    
=======
                <br />
                <div className="cont">
                    <div className="contenedor-comunicador">
                        <div className="contorno1">

                        </div>
                        <div className="contorno2">

                        </div>
                        <div className="contorno3">

                        </div>
                        <div className="icons_contenedor">
>>>>>>> 5432fc81316adfb895389733b6229dec9b469271
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
                </div>
<<<<<<< HEAD

                <br/>
=======
                <br />
>>>>>>> 5432fc81316adfb895389733b6229dec9b469271
                <hr width="80%"></hr>
                <p className="category"><b>Categorías</b></p>
                <br />

                <div className="pic-category-row1">
                    <div className="contorno" onClick={goto_people}>
                        <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Lugares y personas.svg" width="100" height="100" />
                        <p className="lugares-y-personas">Personas</p>
                    </div>
                    <div className="contorno" onClick={goto_actions}>
                        <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Acciones.svg" width="100" height="100" />
                        <p>Acciones</p>
                    </div>
                    <div className="contorno" onClick={goto_food}>
                        <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Alimentos.svg" width="100" height="100" />
                        <p>Alimentos</p>
                    </div>
                </div>
                <br />
                <br />
                <div className="pic-category-row2">
                    <div className="contorno" onClick={goto_feelings}>
                        <img src="../pictogramas_KeetNah-20240110T205802Z-001/pictogramas_KeetNah/Deseos y Sentimientos/Sentimientos.svg" width="100" height="100" />
                        <p className="lugares-y-personas">Deseos y sentimientos</p>
                    </div>
                    <div className="contorno" onClick={goto_Hygiene}>
                        <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Higiene.svg" width="100" height="100" />
                        <p>Higiene</p>
                    </div>
                    <div className="contorno">

                    </div>
                </div>
<<<<<<< HEAD
                <div className="contorno" onClick={goto_food}>
                    <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Alimentos.svg" width="100" height="100"/>
                    <p>Alimentos</p>
                </div>
            </div>
            <br/>
            <br/>
            <div className="pic-category-row2">
            <div className="contorno" onClick={goto_feelings}>
                    <img src="../pictogramas_KeetNah-20240110T205802Z-001\Categorías/Deseos y sentimientos.svg" width="100" height="100"/>
                    <p className="lugares-y-personas">Deseos y sentimientos</p>
                </div>
                <div className="contorno" onClick={goto_Hygiene}>
                    <img src="../pictogramas_KeetNah-20240110T205802Z-001/Categorías/Higiene.svg" width="100" height="100"/>
                    <p>Higiene</p>
                </div>
                <div className="contorno">
                    
                </div>
            </div>
            <br/>
            <br/>
=======
                <br />
                <br />
>>>>>>> 5432fc81316adfb895389733b6229dec9b469271

            </div>
        </body>
    );

}

export default Home;