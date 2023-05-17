import React from 'react';
import BtnFechaComponent from '../Components/BtnFechaComponent';
import TopTextComponent from '../Components/TopTextComponent';
import Navbar from '../Components/Navbar';
import TerapeutasComponent from '../Components/TerapeutasComponent';

export default function Home() {
  const title = 'Terapia en linea';
  const subtitle = 'Habla con un terapeuta en cualquier lugar totalmente gratis';
  const [interfaz] = React.useState('home');

  return (
    <div>
        <TopTextComponent title={title} subtitle={subtitle}/>
        <BtnFechaComponent/>
        <TerapeutasComponent/>
        <Navbar/>
    </div>
   
  )
}
