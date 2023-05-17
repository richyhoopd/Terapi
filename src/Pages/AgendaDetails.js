import React, { useState } from "react";
import BackComponent from "../Components/BackComponent";
import pfp from "../Assets/pfp-white.png";
import "../Styles/agendaDetails.css";
import calendario from "../Assets/calendario-circ.png";
import zoom from "../Assets/Vector-zoom.png";

export default function AgendaDetails({ onChange }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const copyText = document.querySelector(".copyable-input");
    copyText.select();
    document.execCommand("copy");
    setIsCopied(true);
  };

  return (
    <div className="agenda--details__container">
      <BackComponent />
      <div className="details--component">
        <p>Terapia con Alejandro</p>
        <img src={pfp} alt="alejandro" />
      </div>
      <div className="details--hour__component">
        <img className="img--calendario" src={calendario} alt="calendario" />
        <div>
          <p className="dia">Domingo 23 de Febrero</p>
          <p className="hora">10:30 - 11:30</p>
        </div>
      </div>
      <div className="agenda--details__window">
        <div className="agenda--details__window-info">
          <h1>Detalles</h1>
          <div className="inputtt">
            <div className="labbel">
            <img src={zoom} alt="sex" />
            <label for="reunion">
               Link de la sesión
            </label>
            </div>
            <input
              type="text"
              className="copyable-input"
              value={"zoom.us"}
              onChange={onChange}
              readonly
            />
            <button onClick={copyToClipboard}>
              {isCopied ? "Link Copiado!" : "Copiar Link"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
