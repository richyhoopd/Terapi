import React from 'react';
import '../Styles/agendaDetails.css';
import BackComponent from '../Components/BackComponent';
import pfp from '../Assets/pfp-white.png'

export default function AgendaDetails() {
  return (
    <div className='agenda--details__container'>
        <BackComponent/>
        <div className='details--component'>
            <div className='details--text'>
                <p>Terapia con Alejandro</p>
            </div>
            <div className='details--pfp'>
                <img src={pfp} alt='alejandro' />
            </div>

        </div>
    </div>
  )
}
