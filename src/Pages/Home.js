import React from 'react';
import BtnFechaComponent from '../Components/BtnFechaComponent';
import TopTextComponent from '../Components/TopTextComponent';
import Navbar from '../Components/Navbar';
import TerapeutasComponent from '../Components/TerapeutasComponent';

export default function Home() {
  return (
    <div>
        <TopTextComponent/>
        <BtnFechaComponent/>
        <TerapeutasComponent/>
        <Navbar/>
    </div>
   
  )
}
