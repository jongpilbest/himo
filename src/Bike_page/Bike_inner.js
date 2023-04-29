

import React, { useState, useEffect, useContext, useRef } from "react"
import './Bike.css'
import Nav from "../Component/nav"
import Footer from "../Footer"
import axios from "axios"

import Bike_COm from "./Bike_COm"
import Main_Bike from "./Main_Bike"
import Bike_You from "./Bike_You"
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import BIke_Image from "./BIke_Image"
import Bike_Special from "./Bike_Special"
import Switch_image from "../Component/Switch_image"
import { useLoaderData, useParams } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
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

const Bike_inner = function ({ }) {






  const data = useLoaderData();



  return (

    <div style={{
      width: '100%',


      position: 'relative',



    }}>



      <Switch_image da={data[0]}>

      </Switch_image>


      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}
      >
        <div style={{
          width: '80%',
          flexDirection: 'column',

        }}>

          <div style={{
            width: '100%',

            marginTop: '100px'
          }}>


            <BIke_Image data={data[0].image_Des}></BIke_Image>


            <Bike_Special data={data[0].Special}></Bike_Special>
            <Bike_You data={data[0]}></Bike_You>





          </div>



        </div>

      </div>
      <Pc>
        <Footer></Footer>
      </Pc>
      <Mobile>

      </Mobile>



    </div >
  )

}

export default Bike_inner