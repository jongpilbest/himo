

import React, { useState, useEffect, useContext, useRef } from "react"
import Himo from '../assets/Himo_High.svg'
import Battery from '../assets/material-symbols_battery-full-alt.svg'
import plug from '../assets/material-symbols_power-plug.svg'
import gogo from '../assets/material-symbols_speed.svg'
import water from '../assets/mdi_water-off.svg'
const Bike_Categori = function () {


 return (


  <>
   <div style={{
    width: '100 %',
    height: '45vh',

    position: 'relative'

   }}>
    <img
     style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'


     }}
     src={Himo}
     title='good'
    />
    <p style={{
     fontSize: '40px',
     fontWeight: 'bold',
     position: 'absolute',
     top: '40%',
     color: 'white',
     right: '10%'
    }}> Himo High -Quality E-bike</p>

   </div>

   <div style={{
    width: '100%',
    height: '20vh',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
   }}>
    <p style={{
     fontWeight: 'bold',
     fontSize: '30px'
    }}>
     Himo High -Quality E-bike
    </p>

   </div>
   <div style={{
    width: '100%',
    height: '50vh',

    display: 'flex',
    justifyContent: 'center'
   }}>
    <div style={{
     width: '80%',
     height: '100%',
     backgroundColor: 'white',
     display: 'flex',
     flexDirection: 'row'
    }}>

     <div style={{
      width: '25%',
      height: '100%',
      backgroundColor: 'pink',
      display: 'flex',
      flexDirection: 'column'
     }}>
      <p style={{
       fontWeight: 'bold',
       fontSize: '25px',
       margin: '5px'
      }}>
       20inch Folding

      </p>
      <p style={{
       fontWeight: 'bold',
       fontSize: '25px',
       margin: '5px'
      }}>
       EBike
      </p>
      <p style={{
       fontSize: '13px',
       fontWeight: '600'
      }}>
       HIMO Cost-Effective E-bike
      </p>
      <div style={{
       width: '70%',
       height: '10%',

       display: 'flex',

      }}>
       <p
        style={{
         marginTop: 'auto',
         marginBottom: 'auto',
         fontWeight: '600',

         fontSize: '13px',

        }}

       >choice of most people, this models meet a wide range of life scenarios:</p>


      </div>
      <div style={{

       width: '70%',
       height: '55%',
       marginTop: '10%',

       display: 'flex',
       flexDirection: 'column'

      }}>
       <div style={{
        width: '100%',
        height: '50%',
        background: 'white',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
       }}>
        <div style={{
         width: '40%',
         height: '90px',

         display: 'flex',
         justifyContent: 'center',
         flexDirection: 'column'
        }}>
         <img
          style={{
           width: '50%',
           height: '50%',
           objectFit: 'cover'


          }}
          src={Battery}
          title='good'
         />
         <p
          style={{
           margin: '5px',
           fontSize: '10px',
           fontWeight: '500'

          }}

         >80KM
         </p>
         <p style={{
          margin: '5px',
          fontSize: '10px',
          fontWeight: '500'

         }}>
          MaxRange
         </p>



        </div>
        <div style={{
         width: '40%',
         height: '90px',

         display: 'flex',
         flexDirection: 'column'

        }}>
         <img
          style={{
           width: '50%',
           height: '50%',
           objectFit: 'cover'


          }}
          src={plug}
          title='good'
         />
         <p
          style={{
           margin: '5px',
           fontSize: '10px',
           fontWeight: '500'

          }}

         >

          250W

         </p>
         <p style={{
          margin: '5px',
          fontSize: '10px',
          fontWeight: '500'

         }}>
          MotorPower
         </p>
        </div>

       </div>

       <div style={{

        width: '100%',
        height: '55%',

        display: 'flex',


       }}>
        <div style={{
         width: '100%',
         height: '100%',
         background: 'white',
         display: 'flex',
         justifyContent: 'space-around',
         alignItems: 'center'
        }}>
         <div style={{
          width: '40%',
          height: '90px',

          display: 'flex',
          flexDirection: 'column'

         }}>
          <img
           style={{
            width: '50%',
            height: '50%',
            objectFit: 'cover'


           }}
           src={gogo}
           title='good'
          />
          <p
           style={{
            margin: '5px',
            fontSize: '10px',
            fontWeight: '500'

           }}

          >80KM
          </p>
          <p style={{
           margin: '5px',
           fontSize: '10px',
           fontWeight: '500'

          }}>
           MaxRange
          </p>
         </div>
         <div style={{
          width: '40%',
          height: '90px',

          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
         }}>
          <img
           style={{
            width: '50%',
            height: '50%',
            objectFit: 'cover'


           }}
           src={water}
           title='good'
          />
          <p
           style={{
            margin: '5px',
            fontSize: '10px',
            fontWeight: '500'

           }}

          >80KM
          </p>
          <p style={{
           margin: '5px',
           fontSize: '10px',
           fontWeight: '500'

          }}>
           MaxRange
          </p>
         </div>

        </div>


       </div>
      </div>


     </div>




    </div>


   </div>
   <div style={{
    width: '100%',
    height: '60vh',
    backgroundColor: 'gold'
   }}>

   </div>



  </>

 )


}

export default Bike_Categori;
