import React from 'react';
import usrIcon from '../Assets/userIcon.svg';
import { Link } from 'react-router-dom';
import '../Styles/contactos-emergencia.component.css'

export default function ContactosEmergenciaComponent() {
  return (
    <div className='contactos--emergencia__container'>
        <h2>Contactos de emergencia</h2>
      <div id='containerr'>

        <div className='card--contacto__emergencia'>
            <img src={usrIcon} alt='contacto emergencia'/>
            <p>Chris</p>
            <Link className='pedir--ayuda__button'>Hablar Ahora</Link>
        </div>
        <div className='card--contacto__emergencia'>
            <img src={usrIcon} alt='contacto emergencia'/>
            <p className='nombre--contacto__emergencia'>Chris</p>
            <Link className='pedir--ayuda__button'>Hablar Ahora</Link>
        </div>
      </div>
    </div>
  )
}
