


import React, { useState, useEffect, useContext, useRef } from "react"
import './Bike.css'
import Nav from "../Component/nav"
import Bike from '../assets/bike.svg'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
const Bike_inner = function ({ }) {


 return (
  <div>
   <Nav>

   </Nav>
   <div
    className='first-main'>
    <div className='first-main-sub1'>
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
  </div>
 )

}

export default Bike_inner
