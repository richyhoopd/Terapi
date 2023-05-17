import React from 'react';
import TopTextComponent from '../Components/TopTextComponent';
import TerapeutaChatComponent from '../Components/TerapeutaChatComponent';
import ContactosEmergenciaComponent from '../Components/ContactosEmergenciaComponent';
import Navbar from '../Components/Navbar';

export default function Chat() {
  const title = 'Mensajes';
  const subtitle = 'Envía mensajes a tu terapeuta cada que lo necesitas. También agrega amigos';

  return (
    <div>
        <TopTextComponent title={title} subtitle={subtitle}/>
        <TerapeutaChatComponent/>
        <ContactosEmergenciaComponent/>
        <Navbar/>
    </div>
  )
}
