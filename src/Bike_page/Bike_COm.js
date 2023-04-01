


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
      >{data.name}</p>
     </div>
     <div
      style={{
       width: '50%',
       height: '100%',

      }}
     >
      <p

       className="border-text-1"
      >{data.spec}</p>

     </div>

    </div>

   </div>

  </>

 )

}

export default Bike_COm
