import React from 'react';
import calendario from '../Assets/calendar-vector.svg';
import '../Styles/btnFecha.component.css';


export default function BtnFechaComponent() {
  return (
   <div className='btn--container'>
    <input id='btnFechaComponent' type='date' value="2018-07-22" min="2018-01-01" placeholder='Elige la fecha'/>

   
   </div>
  )
}
