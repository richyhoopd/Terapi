import React from 'react'
import TopTextComponent from '../Components/TopTextComponent'
import AgendaItemComponent from '../Components/AgendaItemComponent'
import Navbar from '../Components/Navbar'

export default function Agenda() {
  return (
    <div>
        <TopTextComponent/>
        <AgendaItemComponent/>
        <Navbar/>
    </div>
  )
}
