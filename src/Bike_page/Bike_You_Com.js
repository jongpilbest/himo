


import React, { useState, useEffect, useContext, useRef } from "react"


const Bike_You_Com = function ({ data, num, cli, color }) {


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
     width: '70%',
     height: '25%',
     backgroundColor: go_b(),
     borderStyle: 'solid',
     borderWidth: '1px',
     display: 'flex',


    }}>
    <div style={{
     width: '40%',
     height: '100%',

     //borderRadius: '50%',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center'
    }}>
     <div style={{
      width: '60px',
      height: '60px',
      backgroundColor: '#AEAEAE',
      borderRadius: '50%',
      borderStyle: 'solid',
      borderWidth: '1px'

     }}>
      <img
       style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%'
       }}
       src={data.profile}

      >


      </img>

     </div>

    </div>
    <div
     style={{
      width: '60%'
      , height: '100%',
      display: 'flex',
      alignContent: 'center',

     }}

    >



     <p

      ref={color_back}
      className="te_text"
      style={{
       color: gogo_b()
      }}

     >
      {data.youtuber}
     </p>

    </div>

   </div>
  </>
 )

}

export default Bike_You_Com
