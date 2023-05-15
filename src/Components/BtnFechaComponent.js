import React from 'react';
import calendario from '../Assets/calendar-vector.svg';
import '../Styles/btnFecha.component.css';

export default function BtnFechaComponent() {
  return (
   <div className='btn--container'>
    <button id='btnFechaComponent' type='button'>
    <img src={calendario} alt='elegir una fecha'/>
    Elegir Fecha
   </button>
   </div>
  )
}
