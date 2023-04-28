

import React, { useState, useEffect, useContext, useRef } from "react"

const Change__main = function ({ data }) {


 return (
  <div div style={{
   width: '100%',
   height: '100%',

   flexDirection: 'row',
   backgroundColor: 'yellow'

  }}>
   <div style={{
    width: '100%',
    height: '50%',
    backgroundColor: 'black',
    position: 'relative'
   }}>
    <img

     style={{


      width: '100%',
      height: '100%',
      display: 'flex',
      alignSelf: 'center',
      objectFit: 'cover',
      zIndex: 1

     }}
     src={data.image}></img>
    <p
     style={{
      position: 'absolute',
      bottom: '5px',
      zIndex: 2,
      color: 'white',
      fontSize: '45px',
      right: '10px',
      margin: 0,

     }}
    >{data.number}</p>

   </div>
   <div style={{
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column'
   }}>
    <div className='second-text-main'>
     <p className='macc--p'>
      {data.main_text}
     </p>

    </div>

    <div style={{
     width: '85%',
     height: '100%',
     backgroundColor: 'white',
     display: 'flex',
     alignItems: 'center',
     marginRight: 'auto',
     marginLeft: 'auto'


    }}> <p

     className='ma--p'
    >
      {data.sub_text}

     </p>




    </div>




   </div>



  </div>



 )

}
export default Change__main