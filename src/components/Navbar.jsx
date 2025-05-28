import React, {useState} from 'react'
import './Navbar.css'
import iitbImg from '../assets/IITBlogo.png'
import { FRPDrop } from './FRPDrop'

export const Navbar = ({ strn, setStrn, slab, setSlab }) => {


  return (
    <>
      <div className='navbar'>
        <img src={iitbImg}></img>
        <div className='strengtheningtype'>
          <p>Type of Strengthening</p>
          <button className={`${strn === 'FRP' ? 'active' : ''}` } onClick={(e) => setStrn('FRP')}>FRP</button>
          <button className={`${strn === 'RC' ? 'active' : ''}`} onClick={(e) => setStrn('RC')}>RC</button>
        </div>
        <div className='slabtype'>
          {strn===''?
          <span className='beforestrn'>First Choose a Strengthening Type!</span>
          :null
        }

        {strn==='FRP'?
          <FRPDrop slab ={slab} setSlab={setSlab}/>
          :null
        }
        </div>
      </div>
    </>
  )
}
