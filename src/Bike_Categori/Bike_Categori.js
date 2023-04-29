

import React, { useState, useEffect, useContext, useRef } from "react"
import Himo from '../assets/Himo_High.svg'


import Bike__CA_Com from "./Bike__CA_Com"
import { AiOutlineRight } from "react-icons/ai";
import { useLoaderData } from "react-router-dom"


const Bike_Categori = function () {

  const data = useLoaderData();





  return (


    <>
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












    </>

  )


}

export default Bike_Categori;
