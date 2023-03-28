


import React, { useState, useEffect, useContext, useRef } from "react"

import './Main.css'
import Bike from '../assets/bike.svg'
import l_1 from '../assets/1.png'
import l_2 from '../assets/2.png'
import l_3 from '../assets/3.png'
import l_4 from '../assets/4.png'
const Sub_Com = function ({ data, nm }) {



  var [col, setcol] = useState(
    false
  )

  useEffect(() => {
    if (data.color == 1) {
      setcol(true);
    }

  }, [])


  return (

    <div className='tumb-main'>
      <div className={col ? 'tumb' : 'tumb_active'}>
        <img

          style={{
            objectFit: 'contain',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignSelf: 'center',


          }}
          src={require(`../assets/${nm + 1}.png`)}


        ></img>
      </div>
      <div
        className='tumb_text'
      >
        <p className='Bike-p'>
          {data.name}
        </p>
      </div>
    </div >

  )

}

export default Sub_Com
