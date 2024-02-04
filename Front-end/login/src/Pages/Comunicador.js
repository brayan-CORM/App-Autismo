import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";

function Comunicador({ selectedNames }) {
  return (
    <div>
      <div className="comunicador">
        <h2>Comunicador</h2>
        <div className="icon_perfil">
          <FaRegUserCircle id="icon_perfil" />
          <p className="perfil_text">Perfil</p>
        </div>
      </div>
      <hr width="80%"></hr>
      <br />

      <div className="Container">
        <div className="Row">
          {selectedNames.map((person, index) => (
            <div key={index} className="Empty-item">
              {person?.img}
            </div>
          ))}
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
      </div>
    </div>
  );
}

export default Comunicador;
