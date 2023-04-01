


import React, { useState, useEffect, useContext, useRef } from "react"
import './Bike.css'
import Nav from "../Component/nav"

import Bike_COm from "./Bike_COm"
import Main_Bike from "./Main_Bike"
import Bike_You from "./Bike_You"
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import BIke_Image from "./BIke_Image"
import Bike_Special from "./Bike_Special"
import Switch_image from "../Component/Switch_image"
const Bike_inner = function ({ }) {

  return (
    <div style={{
      width: '100%',
      height: '300vh',
      position: 'relative',


    }}>

      <div>

      </div>
      <Nav>
      </Nav>
      <Switch_image>

      </Switch_image>


      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '80%',
          height: '100px',
          flexDirection: 'column',

        }}>

          <div style={{
            width: '100%',
            height: '500px',
            marginTop: '100px'
          }}>


            <BIke_Image></BIke_Image>

            <div
              style={{
                marginTop: '100px'
              }}

            >
              <p
                className="sp-text"
              > SPECIFICATION</p>
            </div>
            <Bike_Special></Bike_Special>

            <Bike_You></Bike_You>





          </div>



        </div>
      </div>

    </div >
  )

}

export default Bike_inner
