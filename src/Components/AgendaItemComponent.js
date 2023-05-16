import React from "react";
import { Link } from "react-router-dom";
import pfp from "../Assets/small-pfp.png";
import "../Styles/agenda.component.css";

export default function AgendaItemComponent() {
  return (
    <div className="agenda--container">
      <input
        type="month"
        id="start"
        name="start"
        min="2018-03"
        value="2018-05"
      />
      <div id="containerrr">
        <div className="agenda--item">
          <div className="agenda--text__left">
            <p className="day--text">Dom</p>
            <p className="day--number">23</p>
          </div>
          <div className="agenda--box">
          <div className="agenda--pfp">
              <img src={pfp} alt="caca" />
            </div>
            <div className="row-1">
              <p>Terapia con Alejandro</p>
              <p>10:30 - 11:30</p>
            </div>
            <Link className="agenda--details__button">Ver detalles</Link>
          </div>
        </div>
        <div className="agenda--item">
          <div className="agenda--text__left">
            <p className="day--text">Dom</p>
            <p className="day--number">23</p>
          </div>
          <div className="agenda--box">
            <div className="agenda--pfp">
              <img src={pfp} alt="caca" />
            </div>
            <div className="row-1">
              <p>Terapia con Alejandro</p>
              <p>10:30 - 11:30</p>
            </div>
            <Link className="agenda--details__button">Ver detalles</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
