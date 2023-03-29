


import React, { useState, useEffect, useContext, useRef } from "react"
import Bike_COm from "./Bike_COm"

const Bike_Special = function ({ data, nm }) {



 return (


  <>
   <div style={{
    width: '100%',


    marginTop: '50px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
   }}>
    <div style={{
     width: '45%',
     height: '100%',

    }}>
     <p
      className="gen"
     >
      General
     </p>


     {
      [1, 2, 3, 4, 5].map((el, index) => {
       return <Bike_COm
        key={index}>

       </Bike_COm>
      })


     }

    </div>
    <div style={{
     width: '45%',
     height: '100%'
    }}>
     <p
      className="gen"
     >
      Electronic
     </p>

     {
      [1, 2, 3, 4, 5].map((el, index) => {
       return <Bike_COm
        key={index}>

       </Bike_COm>
      })


     }

    </div>
   </div>

   <div style={{
    width: '100%',


    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '50px'


   }}>
    <div
     style={{
      width: '120px',
      height: '40px',
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',

     }}

    >
     <p
      className="p_more"

     > 더 많은 정보 </p>

    </div>

   </div>
  </>
 )

}

export default Bike_Special
