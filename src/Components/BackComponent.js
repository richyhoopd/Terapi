import React from 'react';
import back from '../Assets/Vector 71.svg';
import {Link} from 'react-router-dom';
import '../Styles/back.component.css';

export default function BackComponent() {
  return (
    <div className='back--arrow__container'>
        <Link to={'/agenda'} className="back--arrow">
            <img src={back} alt='volver'/>
        </Link>
    </div>
  )
}
