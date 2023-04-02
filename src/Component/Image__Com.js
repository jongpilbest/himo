


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
     width: '100%',
     height: '100%',
     transform: 'scale(1)'
    }}
    src={data}></img>



  </div>

 )

}

export default Image__Com
