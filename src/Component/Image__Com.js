


import React, { useState, useEffect, useContext, useRef } from "react"




const Image__Com = function ({ data }) {






  return (

    <div

      style={{
        width: window.innerWidth * 0.8,
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }}>


      <img
        style={{
          width: '80%',
          height: '80%',
          transform: 'scale(1.2)',
          objectFit: 'contain'

        }}
        src={data}></img>



    </div>

  )

}

export default Image__Com
