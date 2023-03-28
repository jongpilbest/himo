


import React, { useState, useEffect, useContext, useRef } from "react"
import logo from './logo.svg';

const Nav = function ({ }) {


 return (
  <div>
   <nav style={{
    width: '100%',
    height: '7vh',
    // backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',

   }} >
    <div
     className='nav_1'
    >
     <img
      style={{
       width: '110px',
       height: '25px',
       marginLeft: '40px'

      }}

      src={require('../assets/logo.png')}></img>
     <div
      style={{

       width: '30%',
       heigth: '100%',
       //backgroundColor: 'pink',
       display: 'flex',
       marginLeft: '10%'


      }}
     >

      <div className='nav_11'

      //onMouseEnter={MouseEnterf}
      //onMouseLeave={MouseLeave}

      >
       <p


        className='main-text'
       >E -Bike</p>

      </div>
      <div className='nav_11'>
       <p

        className='main-text'
       >Accessori</p>

      </div>
      <div className='nav_11'>
       <p

        className='main-text'
       >Support</p>

      </div>
     </div>


    </div>






   </nav>
  </div>
 )

}

export default Nav
