import React, {useState} from "react";
import axios from "axios";
import { FaRegUserCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";
import { useAppContext } from "../AppContext";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

function Comunicador({ selectedNames }) {
  const { updateSelectedNames } = useAppContext();
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const navigate = useNavigate(); // Usa useNavigate en lugar de useHistory

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  const handleLogout = async () => {
    try {
      const sessionToken = localStorage.getItem("sessionToken"); // Obtener el token de sesión del almacenamiento local
      if (!sessionToken) {
        console.error("Token de sesión no encontrado en el almacenamiento local");
        return;
      }

      await axios.post("http://localhost:3001/api/logout", {
        token: sessionToken
      });

      // Redirige al usuario a la página principal después de cerrar sesión
      navigate("/"); // Cambia "/" por la ruta de tu página principal
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  if (!selectedNames) {
    // Si selectedNames es undefined, retorna un mensaje o un indicador de carga
    return <p>Cargando...</p>;
  }

  const handleDeleteClick = () => {
    updateSelectedNames((prevSelectedNames) => {
      // Encontrar el último elemento con información para eliminar
      let indexToDelete = prevSelectedNames.length - 1;
      while (indexToDelete >= 0 && !prevSelectedNames[indexToDelete].img) {
        indexToDelete--;
      }
  
      // Si no hay elementos con información, no hacer nada
      if (indexToDelete === -1) return prevSelectedNames;
  
      // Eliminar el elemento con información
      const updatedNames = prevSelectedNames.filter((_, index) => index !== indexToDelete);
  
      // Agregar un nuevo elemento vacío al final de la lista
      const newSelectedNames = [...updatedNames, {}];
      
      return newSelectedNames;
    });
  };

  speechSynthesis.onvoiceschanged = () => {
    // No hagas nada aquí, solo define el evento
};

const handleSpeakerClick = () => {
  const namesToSpeak = selectedNames.map((person) => person?.name).filter(Boolean).join(' ');
  
  if (!namesToSpeak) return;
  
  const voices = window.speechSynthesis.getVoices();
  
  const selectedVoice = voices[0];
  
  const utterance = new SpeechSynthesisUtterance(namesToSpeak);
  
  utterance.voice = selectedVoice;
  
  // Ajustes para la voz seleccionada
  utterance.rate = 0.6; // Velocidad moderada
  utterance.pitch = 1.2; // Tono normal
  utterance.volume = 1; // Volumen completo
  utterance.lang = 'es-ES'; // Idioma
  
  speechSynthesis.speak(utterance);
};

  return (
    <div>
      <div className="comunicador">
        <h2>Comunicador</h2>
        <div className="icon_perfil" onClick={toggleProfileOptions}>
          <FaRegUserCircle id="icon_perfil" />
          <p className="perfil_text">Perfil</p>
          {showProfileOptions && (
            <div className="profile-options">
              
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </div>
          )}
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
          <div className="icon_speaker" onClick={() => {const lastName = selectedNames.find(person => person.img)?.name;if (lastName) {handleSpeakerClick(lastName);}}}>
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
