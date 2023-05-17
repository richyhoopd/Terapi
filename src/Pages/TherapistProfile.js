 import React from 'react';
import BackComponent from '../Components/BackComponent';
import '../Styles/therapistProfile.css'
import bgpfp from '../Assets/badasspfp.png'
import {Link} from 'react-router-dom';

export default function TherapistProfile() {
  return (
    <div className='terapeuta--perfil__container'>
        <BackComponent/>
        <div className='center--image__container'>
        <img className='badassimg' src={bgpfp} alt='foto del terapeuta'/>
        </div>
        <div className='white--background__card'>
         <div className='content--card'>
         <h1 className='nombre--terapeuta'>Alejandro de Padua</h1>
          <p className='cedula--profesional'>Cedula: 123456789</p>
          <div className='terapist--expertice'>
            <span>Ansiedad</span>
            <span>Depresión</span>
            <span>TDA</span>
            <span>Traumas</span>

          </div>
          <div className='about--terapist'>
              <p className='about--title'>Acerca de tu especialista:</p>
              <p className='about--content'>Alejandro es un experto de la salud mental egresado de CUCS campus Zapopan. Se ha desempeñado cómo Terapeuta y psiquiatra en el hospital civil regional y en el CRIT Teleton.</p>
        

          </div>

          <div className='about--terapist'>
              <p className='about--title'>Horarios disponibles hoy:</p>
              
              <div className='horarioss'>
              <span id='checked'>18:30</span>
              <span>19:30</span>
              <span>22:30</span>
              </div>

          </div>

          <div className='cagada-fix'>
          <Link id='button-bottom-agenda'>Agendar sesión con alejandro</Link>
          
          </div>
          
           
         </div>
        
        </div>
        
    </div>
  )
}
