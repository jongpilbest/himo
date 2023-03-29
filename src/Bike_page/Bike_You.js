


import React, { useState, useEffect, useContext, useRef } from "react"


const Bike_You = function ({ data, nm }) {






 return (


  <>
   <div style={{
    width: '100%',
    height: '550px',

    marginTop: '100px',
    display: 'flex',
    flexDirection: 'row'
   }}>
    <div style={{
     width: '40%',
     height: '100%',

     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'space-between'
    }}>
     <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
      , width: '100%',
      height: '30%'


     }}>
      <div>


       <p className='macc'>
        사용자들이 말해주는

       </p>
       <p className='macc'>
        HIMO Z20 MAX
       </p>
      </div>
     </div>

     <div style={{

      width: '100%',
      height: '60%',


      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',

     }}>

      <div style={{
       width: '70%',
       height: '25%',
       backgroundColor: 'white',
       borderStyle: 'solid',
       borderWidth: '1px'
      }}>

      </div>
      <div style={{
       width: '70%',
       height: '25%',
       backgroundColor: '#1B1B1B'
      }}>

      </div>
      <div style={{
       width: '70%',
       height: '25%',
       backgroundColor: 'white',
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
        }}>

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
         className="te_text"

        >
         TechTable
        </p>

       </div>

      </div>

     </div>

    </div>

   </div>
  </>
 )

}

export default Bike_You
