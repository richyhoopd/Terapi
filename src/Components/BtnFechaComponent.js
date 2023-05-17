import React from 'react';
import calendario from '../Assets/calendar-vector.svg';
import '../Styles/btnFecha.component.css';
import axios from 'axios';

export default function BtnFechaComponent() {
  
  const asdgjkl = async(e)=>{
    const {value} = (e.target);
    const {data} = await axios('http://localhost:4001/fecha/'+value);

    console.log(data);
  }

  /*const submit = async()=>{
    const fomrData = new FormData();
    fomrData.append('fecha', fecha);
    fomrData.append('id_terapist', user._id);

    axios.post('asdgjkl;', fomrData);
  }*/
  
  return (
   <div className='btn--container'>
    <input id='btnFechaComponent' type='date' min="2018-01-01" onChange={asdgjkl} placeholder='Elige la fecha'/>

   
   </div>
  )
}
