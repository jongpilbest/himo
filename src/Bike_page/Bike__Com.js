


import React, { useState, useEffect, useContext, useRef } from "react"

import './Bike.css'

const Bike__Com = function ({ data }) {





 return (

  <>
   <div

    className="border"
   >
    <div
     style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'column'
     }}
    >
     <div style={{
      width: '100%'
     }}>






      <p

       className="border-text-1"
      >{data[0]}</p>
     </div>
     <div
      style={{
       width: '100%',
       height: '100%',

      }}
     >
      <p

       className="border-text-11"
      >{data[1]}</p>

     </div>

    </div>

   </div>

  </>

 )

}

export default Bike__Com
