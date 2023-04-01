


import React, { useState, useEffect, useContext, useRef } from "react"
import Bike_COm from "./Bike_COm"

const Bike_Special = function ({ data, nm }) {

 const bike_gen = [
  {
   name: 'Range',
   spec: '100 Km Max Range'
  },
  {
   name: 'Speed',
   spec: '125 Km/h'
  },
  {
   name: 'Tires',
   spec: 'CST 26 x 2.125'
  },
  {
   name: 'Weight',
   spec: '25 Kg'
  }, {
   name: 'Transmission',
   spec: '7-Speed Shimano'
  }
 ]
 const bike_elec = [
  {
   name: 'Motor',
   spec: '250W Hall Brushless Gear DC Motor'
  },
  {
   name: 'Battery',
   spec: '36V/ 10.5Ah'
  },
  {
   name: 'Charger',
   spec: '2AH Charger'
  },
  {
   name: 'Display',
   spec: 'HD LCD Dispaly'
  }, {
   name: 'Torque',
   spec: '22N.M'
  }
 ]


 return (


  <>
   <div style={{
    width: '100%',


    marginTop: '50px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
   }}>
    <div style={{
     width: '45%',
     height: '100%',

    }}>
     <p
      className="gen"
     >
      General
     </p>


     {
      bike_gen.map((el, index) => {
       return <Bike_COm
        key={index}

        data={el}
       >

       </Bike_COm>
      })


     }

    </div>
    <div style={{
     width: '45%',
     height: '100%'
    }}>
     <p
      className="gen"
     >
      Electronic
     </p>

     {
      bike_elec.map((el, index) => {
       return <Bike_COm
        key={index}

        data={el}
       >

       </Bike_COm>
      })

     }

    </div>
   </div>

   <div style={{
    width: '100%',


    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '50px'


   }}>
    <div
     style={{
      width: '120px',
      height: '40px',
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',

     }}

    >
     <p
      className="p_more"

     > 더 많은 정보 </p>

    </div>

   </div>
  </>
 )

}

export default Bike_Special
