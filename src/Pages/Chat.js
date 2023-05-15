import React from 'react';
import TopTextComponent from '../Components/TopTextComponent';
import TerapeutaChatComponent from '../Components/TerapeutaChatComponent';
import '../Styles/chat.css'

export default function Chat() {
  return (
    <div className='chat--home__container'>
        <TopTextComponent/>
        <TerapeutaChatComponent/>
    </div>
  )
}
