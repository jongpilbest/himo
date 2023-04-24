

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
import { useParams } from "react-router-dom"

const Bike_inner = function ({ }) {

  const [data, setdata] = useState({});

  const { productname } = useParams();

  useEffect(() => {

    console.log(productname, '아이디좀')

    axios(`/product/${productname}`, {
      method: 'GET',
      mode: 'no-cors',
      headers: { "Access-Control-Allow-Origin": "*" },

      withCredentials: true,
      credentials: 'same-origin',
    }).then(response => {

      setdata(response.data);
      console.log(response.data)

    })



  }, [])


  return (
    <div style={{
      width: '100%',
      height: '300vh',
      position: 'relative',



    }}>

      <div>

      </div>

      <Switch_image da={data}>

      </Switch_image>


      <div style={{
        width: '100%',
        display: 'flex',
        height: '230vh',
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


            <BIke_Image data={data}></BIke_Image>

            <div
              style={{
                marginTop: '100px'
              }}

            >
              <p
                className="sp-text"
              > SPECIFICATION</p>
            </div>
            <Bike_Special data={data}></Bike_Special>

            <Bike_You data={data}></Bike_You>





          </div>



        </div>
      </div>
      <Footer></Footer>

    </div >
  )

}

export default Bike_inner