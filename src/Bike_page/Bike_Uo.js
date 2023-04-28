


import React, { useState, useEffect, useContext, useRef } from "react"


const Bike_Uo = function ({ data, num, cli, color }) {






 const color_back = useRef(null);

 const go_b = function () {
  if (color == num) {
   return '#1b1b1b'
  }

 }
 const gogo_b = function () {
  if (color == num) {
   return 'white'
  }
 }

 return (


  <>
   <div

    onClick={() => {
     cli(num)
    }}
    ref={color_back}
    style={{
     width: '30px',
     height: '30px',
     backgroundColor: go_b(),
     borderStyle: 'solid',
     borderWidth: '1px',
     display: 'flex',
     flexDirection: 'row',
     borderRadius: '50%',
     marginRight: '10px',
     marginTop: '10px'



    }}>
    <div style={{
     width: '100%',
     height: '100%',

     //borderRadius: '50%',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center'
    }}>
     <p
      style={{
       color: gogo_b()
      }}

     >    {num + 1}</p>


    </div>


   </div >
  </>
 )

}

export default Bike_Uo
