


import React, { useState, useEffect, useContext, useRef } from "react"
import Bike_COm from "./Bike_COm"
import Bike__Com from "./Bike__Com";
import { useMediaQuery } from "react-responsive";
export const Mobile = ({ children }) => {
 const isMobile = useMediaQuery({
  query: "(max-width:768px)"
 });
 return <>{isMobile && children}</>
}

export const Pc = ({ children }) => {
 const isPc = useMediaQuery({
  query: "(min-width:769px)"
 });
 return <>{isPc && children}</>
}

const Bike_Special = function ({ data, nm }) {





 return (


  <>
   <Pc>


    <div
     style={{
      marginTop: '100px'
     }}

    >
     <p
      className="sp-text"
     > SPECIFICATION</p>
    </div>
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
       data[0].General.map((el, index) => {
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
       data[0].Elec.map((el, index) => {
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
   </Pc>
   <Mobile>

    <div
     style={{
      marginTop: '100px'
     }}

    >
     <p
      className="sp--text"
     > SPECIFICATION</p>
    </div>
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
       className="gen-1"
      >
       General
      </p>


      {
       data[0].General.map((el, index) => {
        return <Bike__Com
         key={index}

         data={el}
        >

        </Bike__Com>
       })


      }

     </div>
     <div style={{
      width: '45%',
      height: '100%'
     }}>
      <p
       className="gen-1"
      >
       Electronic
      </p>

      {
       data[0].Elec.map((el, index) => {
        return <Bike__Com
         key={index}

         data={el}
        >

        </Bike__Com>
       })

      }

     </div>
    </div>

   </Mobile>
  </>
 )

}

export default Bike_Special
