


import React, { useState, useEffect, useContext, useRef } from "react"
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import Bike from '../assets/bike.svg'
const Main_Bike = function ({ }) {

  return (


    <>
      <div
        className='first-main-11'>
        <div className='first-main-sub11'>
          <AiOutlineDoubleLeft
            style={{
              color: 'white',
              width: '20px',
              height: '20px',
              position: 'absolute',
              bottom: '30px',
              right: '80px'
            }}
          ></AiOutlineDoubleLeft>
          <AiOutlineDoubleRight
            style={{
              color: 'white',
              width: '20px',
              height: '20px',
              position: 'absolute',
              bottom: '30px',
              right: '30px'
            }}

          ></AiOutlineDoubleRight>
          <img
            style={{
              transform: 'scale(1.2)'
            }}
            src={Bike}></img>
        </div>
      </div>
      <div style={{
        width: '100%',


        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '80%',
          height: '100%',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'space-between'
        }}>

          <div style={{
            width: '40%',
            height: '100%',


          }}>

            <p
              className="name-1"
            > HIMO C26 MAX</p>


          </div>

          <div style={{
            width: '15%',
            height: '100%',

            alignContent: 'center',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <p
              className="first-p-1"
            >
              Color
            </p>

            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'black'
            }}>

            </div>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'white',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'black'
            }}>

            </div>

          </div>


        </div>



      </div>
    </>
  )

}

export default Main_Bike
