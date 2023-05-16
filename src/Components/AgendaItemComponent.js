import React from 'react';
import {Link} from 'react-router-dom';
import pfp from '../Assets/small-pfp.png'

export default function AgendaItemComponent() {
  return (
    <div>
        <input type="month" id="start" name="start"
       min="2018-03" value="2018-05" />
       <div className='agenda--items__container'>
            <div className='agenda--item'>
                <div className='agenda--text__left'>
                <p className='day--text'>Dom</p>
                <p className='day--number'>23</p>
                </div>
                <div className='agenda--box'>
                    <img src={pfp} alt='caca'/>
                    <div className='row-1'>
                        <p>Terapia con Alejandro</p>
                        <p>10:30 - 11:30</p>
                        <Link></Link>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}
