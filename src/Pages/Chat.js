import React from 'react';
import TopTextComponent from '../Components/TopTextComponent';
import TerapeutaChatComponent from '../Components/TerapeutaChatComponent';
import ContactosEmergenciaComponent from '../Components/ContactosEmergenciaComponent';
import Navbar from '../Components/Navbar';

export default function Chat() {
  return (
    <div>
        <TopTextComponent/>
        <TerapeutaChatComponent/>
        <ContactosEmergenciaComponent/>
        <Navbar/>
    </div>
  )
}
