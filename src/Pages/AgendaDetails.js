import React from 'react';
import BackComponent from '../Components/BackComponent';
import pfp from '../Assets/pfp-white.png';
import '../Styles/agendaDetails.css';
import calendario from '../Assets/calendario-circ.png'


export default function AgendaDetails() {
  return (
    <div className='agenda--details__container'>
        <BackComponent/>
        <div className='details--component'>
                <p>Terapia con Alejandro</p>
                <img src={pfp} alt='alejandro' />
        </div>
        <div className='details--hour__component'>
            <img src={calendario} alt='calendario' />
            <div>
                <p className='dia'>Domingo 23 de Febrero</p>
                <p className='hora'>10:30 - 11:30</p>
            </div>
        </div>
    </div>
  )
}
