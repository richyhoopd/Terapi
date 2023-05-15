import React from "react";
import "../Styles/register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register--container">
      <div className="container--head">
        <h1>Crear una cuenta</h1>
        <p> Crearemos un perfil para guardar tus preferencias </p>
      </div>
      <form>
        <label for="Name">Nombre:</label>

        <input
          id="Name"
          className="input--register"
          type="text"
          placeholder="ingresa tu nombre completo..."
          required
        />
        <label for="Email">Email:</label>
        <input
          id="Email"
          className="input--register"
          type="email"
          placeholder="Ingresa un correo electronico..." 
          required
        />
        <label for="Numero">Numero de Telefono:</label>
        <input
          id="Numero"
          className="input--register"
          type="number"
          placeholder="Ingresa tu numero de telefono..."
        />
        <label for="Passwd">Contraseña:</label>
        <input
          id="Passwd"
          className="input--register"
          type="password"
          placeholder="Crea una contraseña..."
        />
        <input id="button--submit" className="button--submit" type="submit" value="Registrarse" />
      </form>
      <p className="bottom--text">¿Ya tienes una cuenta de terapi? <Link className="bottom--link" style={{ color: "#0c70e8", }} to={'/login'}>inicia Sesión</Link></p>
    </div>
  );
}
