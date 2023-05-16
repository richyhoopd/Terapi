import React from 'react';
import pfp from '../Assets/pfp.png';
import '../Styles/terapeutas.component.css';
import {Link} from 'react-router-dom';

export default function TerapeutaChatComponent() {
  return (
    <div className='terapeutas--container'>
        <h2 className='card--chat__terapeuta'>Tu terapeuta</h2>
        <Link to={'/home'} className='card--terapeuta'>
            <div className='imagen--container'>
                <img src={pfp} alt='terapeuta'></img>
            </div> 
            <div className='text--container'>
                <p className='nombre--terapeuta' >Alejandro de padua</p>
                <p className='especialidades--terapeuta'>Activo Ahora</p>
                <p id='fechas--terapeuta'>simon we ahi nos vemos </p>
            </div>
        </Link>
       
    </div>
  )
}
