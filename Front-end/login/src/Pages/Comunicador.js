import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";
import { useAppContext } from "../AppContext";

function Comunicador({ selectedNames }) {
  const { updateSelectedNames } = useAppContext();

  const handleDeleteClick = () => {
    updateSelectedNames((prevSelectedNames) => {
      // Eliminar los tres últimos elementos de la lista
      const updatedNames = prevSelectedNames.slice(0, -3);
      
      // Agregar tres nuevos elementos vacíos al principio de la lista
      const newSelectedNames = [{}, {}, {}, ...updatedNames];
      
      return newSelectedNames;
    });
  };

  const handleSpeakerClick = () => {
    // Crear una cadena con todos los nombres de las imágenes separados por un espacio
    const namesToSpeak = selectedNames.map((person) => person?.name).filter(Boolean).join(' ');
    
    if (!namesToSpeak) return; // No hay nombres para leer
    
    // Obtener todas las voces disponibles
    const voices = speechSynthesis.getVoices();
    
    // Seleccionar la voz que deseas utilizar (por ejemplo, la primera voz disponible)
    const selectedVoice = voices[3]; // Cambia el índice según la voz que desees
    
    // Crear un nuevo objeto de mensaje de voz
    const utterance = new SpeechSynthesisUtterance(namesToSpeak);
    
    // Asignar la voz seleccionada al objeto de mensaje de voz
    utterance.voice = selectedVoice;
    
    // Ajustar la velocidad de habla (opcional)
    utterance.rate = 0.6; // Valor menor que 1.0 para hablar más despacio
    
    // Hablar los nombres en voz alta
    speechSynthesis.speak(utterance);
  };


  return (
    <div>
      <div className="comunicador">
        <h2>Comunicador</h2>
        <div className="icon_perfil">
          <FaRegUserCircle id="icon_perfil" />
          <p className="perfil_text">Perfil</p>
        </div>
      </div>
      <hr></hr>
      <br />

      <div className="Container">
        <div className="Row">
          {selectedNames.map((person, index) => (
            <div key={index} className="Empty-item">
              {person?.img && (
                <>
                  <img
                    src={person.img}
                    alt={person.name}
                    width="100"
                    height="100"
                    style={{ width: "100", height: "100" }}
                  />
                  <p>{person.name}</p>
                </>
              )}
            </div>
          ))}
          {/* Renderiza Empty-items adicionales */}
          {Array.from({ length: 3 - selectedNames.length }).map((_, index) => (
            <div key={index} className="Empty-item"></div>
          ))}
          <div className="icons_contenedor">
            <div className="icon_speaker" onClick={() => handleSpeakerClick(selectedNames[selectedNames.length - 1]?.name)}>
              <HiSpeakerWave />
            </div>
            <br />
            <br />
            {/* Agrega el evento onClick para eliminar el último Empty-item */}
            <div className="icon_delete" onClick={handleDeleteClick}>
              <FaDeleteLeft />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comunicador;
