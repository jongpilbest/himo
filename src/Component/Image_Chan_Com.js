


import React, { useState, useEffect, useContext, useRef } from "react"
import machine_1 from '../assets/machine_1.svg'

const Image_Chan_Com = function ({ data }) {






 return (


  <>
   <div

    style={{
     width: window.innerWidth * 0.8,
     height: '100%',
     backgroundColor: 'white',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',



    }}>



    <div

     style={{
      height: '90%'
     }}
     className='second-main'>
     <div className='second-image'>

      <img

       style={{
        objectFit: 'contain',
        width: '90%',
        height: '100%',
        display: 'flex',
        alignSelf: 'center'

       }}
       src={data.image}></img>
      <p
       className='macoo'
      >01</p>
     </div>
     <div
      className='second-text'>
      <div className='second-text-main'>
       <p className='macc-p'>
        {data.title}
       </p>

      </div>

      <div style={{
       width: '100%',
       height: '40%',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',


      }}>
       <div style={{
        width: '75%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',

       }}> <p

        className='ma--p'
       >
         {data.sub}.


        </p>





       </div>
      </div>

     </div>
    </div>
   </div>
  </>
 )

}

export default Image_Chan_Com
