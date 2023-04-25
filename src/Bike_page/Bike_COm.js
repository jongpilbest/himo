


import React, { useState, useEffect, useContext, useRef } from "react"

import './Bike.css'

const Bike_COm = function ({ data }) {





 return (

  <>
   <div

    className="border"
   >
    <div
     style={{
      display: 'flex',
      width: '100%',
      alignItems: 'center'
     }}
    >
     <div style={{
      width: '30%'
     }}>


      <p

       className="border-text"
      >{data[0]}</p>
     </div>
     <div
      style={{
       width: '50%',
       height: '100%',

      }}
     >
      <p

       className="border-text-1"
      >{data[1]}</p>

     </div>

    </div>

   </div>

  </>

 )

}

export default Bike_COm
