


import React, { useState, useEffect, useContext, useRef } from "react"
import logo from './logo.svg';

const Nav = function ({ }) {










 return (
  <div>
   <nav style={{
    width: '100%',
    height: '80px',
    // backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',

   }} >
    <div
     className='nav_1'
    >
     <div
      style={{
       width: '150px',
       height: '50%',
       display: 'flex',

       alignItems: 'center',

       marginTop: '30px'
      }}
     >




      <img
       style={{
        width: '110px',
        height: '25px',


       }}

       src={require('../assets/logo.png')}></img>
     </div>

     <div style={{
      width: '150px',
      height: '40px',
      display: 'flex',

      alignItems: 'center',

      marginTop: '30px',
      display: 'flex',
      flexDirection: 'column'
     }}>
      <div style={{
       width: '100%',
       height: '40px',

       position: 'relative',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center'
      }}>
       <p
        className="main-text"

       > E-bike</p>

      </div>
      <div style={{
       width: '150px',

       backgroundColor: 'white',
       position: 'absolute',
       zIndex: 2,
       top: '80px'


      }}>
       <div style={{
        width: '100%',
        height: '40px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

       }}>

        <p
         className="main-text-text"

        >Himo Z16</p>

       </div>
       <div style={{
        width: '100%',
        height: '40px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

       }}>

        <p
         className="main-text-text"

        >Himo Z16 Max</p>

       </div>
       <div style={{
        width: '100%',
        height: '40px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

       }}>

        <p
         className="main-text-text"

        >Himo Z20</p>

       </div>
       <div style={{
        width: '100%',
        height: '40px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

       }}>

        <p
         className="main-text-text"

        >Himo Z20 Max</p>

       </div>


      </div>



     </div>




     <div style={{
      width: '150px',
      height: '40px',
      display: 'flex',

      alignItems: 'center',

      marginTop: '30px',
      display: 'flex',
      flexDirection: 'column'
     }}>
      <div style={{
       width: '100%',
       height: '40px',

       position: 'relative',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center'
      }}>
       <p
        className="main-text"

       > Accessori</p>

      </div>
      <div style={{
       width: '150px',

       backgroundColor: 'white',
       position: 'absolute',
       zIndex: 2,
       top: '80px'


      }}>
       <div
        className="nav_ho"

       >

        <p
         className="main-text-text"

        >Helments</p>

       </div>
       <div style={{
        width: '100%',
        height: '40px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

       }}>

        <p
         className="main-text-text"

        >Alarms & Locks</p>

       </div>
       <div style={{
        width: '100%',
        height: '40px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

       }}>

        <p
         className="main-text-text"

        >Fenders</p>

       </div>



      </div>



     </div>

     <div style={{
      width: '150px',
      height: '40px',
      display: 'flex',

      alignItems: 'center',

      marginTop: '30px',
      display: 'flex',
      flexDirection: 'column'
     }}>
      <div style={{
       width: '100%',
       height: '40px',

       position: 'relative',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center'
      }}>
       <p
        className="main-text"

       > Support</p>

      </div>



     </div>



    </div>








   </nav >

  </div >
 )

}

export default Nav
