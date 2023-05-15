import React from "react";
import { Link } from "react-router-dom";
import "../Styles/register.css";

export default function Login() {
  return (
    <div className="register--container">
      <div className="container--head">
        <h1>Bienvenido de nuevo a Terapi</h1>
        <p> Inicia sesión para seguir con tu terapia o buscar un terapeuta. </p>
      </div>
      <form id="form-login">
        

        
        <label for="Email">Email:</label>
        <input
          id="Email"
          className="input--register"
          type="email"
          placeholder="Ingresa un correo electronico..."
          required
        />
        <label for="Passwd">Contraseña:</label>
        <input
          id="Passwd"
          className="input--register"
          type="password"
          placeholder="Crea una contraseña..."
          required
        />
        <input id="button--submit" className="button--submit" type="submit" value="Iniciar Sesión" />
      </form>
      <p className="bottom--text">¿Aún no tienes una cuenta de terapi? <Link style={{ color: "#0c70e8", }} to={'/register'}>Registrate</Link></p>
    </div>
  );
}  
