import React from 'react';
import agenda from '../Assets/agenda-icon.svg';
import chat from '../Assets/chat-icon.svg';
import homeIco from '../Assets/home-icon.svg';
import { Link } from 'react-router-dom';
import '../Styles/navbar.component.css';

export default function BottomAgendarComponent() {
  return (
    <div className='parenttt__agendar'>
        <div className='navbar--container__agendar'>
        <Link id='agendarBtn--big' className='btn--big--bottom'  to={'/horarios'}>Agendar sesión con Alejandro</Link>
    </div>
    </div>
  )
}
