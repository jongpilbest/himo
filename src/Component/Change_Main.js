

import React, { useState, useEffect, useContext, useRef } from "react"

const Change_Main = function ({ data }) {


  return (
    <>

      <div style={{

        width: window.innerWidth * 0.8 * 0.5,
        height: '100%',
        backgroundColor: '#1b1b1b',
        position: 'relative'




      }}>

        <img

          style={{

            transform: 'scale(1.2)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignSelf: 'center'

          }}
          src={data.image}></img>
        <p
          className='macoo'
        >{data.number}</p>
      </div>
      <div
        style={{
          width: window.innerWidth * 0.8 * 0.5,
          height: '100%',
          backgroundColor: 'white'
        }}


      >
        <div className='second-text-main'>
          <p className='macc-p'>
            {data.main_text}
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
              {data.sub_text}

            </p>




          </div>


        </div>

      </div>


    </>



  )

}
export default Change_Main