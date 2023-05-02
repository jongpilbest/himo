

import React, { useState, useEffect, useContext, useRef } from "react"
import Himo from '../assets/Himo_High.svg'
import Foot_Mobile from '../Component/Foot_Mobile';
import Bike_MO_com from "./Bike_MO_com";
import Bike__CA_Com from "./Bike__CA_Com"
import { AiOutlineRight } from "react-icons/ai";
import { useLoaderData } from "react-router-dom"
import { useMediaQuery } from "react-responsive";
import Footer from "../Footer";

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

const Bike_Categori = function () {

  const data = useLoaderData();





  return (


    <>
      <Pc>


        <div style={{
          width: '100 %',
          height: '50vh',

          position: 'relative',

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
            fontSize: '35px'
          }}>
            Himo High -Quality E-bike
          </p>

        </div>

        {data.map((El, index) => {
          return <Bike__CA_Com data={El}>

          </Bike__CA_Com>
        })}
        <Footer></Footer>







      </Pc>

      <Mobile>

        <div style={{
          width: '100 %',
          height: '40vh',

          position: 'relative',

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
            fontSize: '20px',
            fontWeight: 'bold',
            position: 'absolute',
            top: '40%',
            color: 'white',
            right: '10%'
          }}> Himo High -Quality E-bike</p>

        </div>


        {data.map((El, index) => {
          return <Bike_MO_com data={El}>

          </Bike_MO_com>
        })}
        <Foot_Mobile></Foot_Mobile>


      </Mobile>

    </>

  )


}

export default Bike_Categori;
