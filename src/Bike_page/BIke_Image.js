

import React, { useState, useEffect, useContext, useRef } from "react"
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import machine_1 from '../assets/machine_1.svg'
import Image__Com from "../Component/Image__Com";
import Bike_Ima_Com from "./Bike_Ima_Com";
import ma_1 from '../assets/ma_1.png'
import ma_2 from '../assets/ma_2.png'
import ma_3 from '../assets/ma_3.png'
import ma_4 from '../assets/ma_4.png'



const BIke_Image = function ({ data, nm }) {




  const [num, setnum] = useState(0);

  const Ref = useRef(null);

  const RRef = useRef(null);

  const gogo = function () {
    var hey = window.innerWidth * 0.8 * -1
    if (num >= data.length) {
      setnum(0);
    }
    if (num < 0) {
      setnum(data.length);
    }
    return {
      width: window.innerWidth * 0.8 * data.length,
      height: '100%',
      backgroundColor: 'pink',
      display: 'flex',
      transform: `translateX(${hey * num}px)`,
      transition: `transform 0.5s ease-in`,
      flexDirection: 'row'
    }
  }



  return (


    <>
      <div className='first-main-11'>
        <div
          ref={RRef}
          style={{

            width: '100%',

          }}
          className='first-main-sub1'>
          <AiOutlineRight
            onClick={() => {
              setnum((el) => el + 1)
            }}
            className='arrow'
            style={{
              color: 'white',
              zIndex: 2

            }}
          ></AiOutlineRight>


          <div style={gogo()}
          >


            {
              data.map((el, index) => {
                return <Bike_Ima_Com data={el} key={index}></Bike_Ima_Com>
              })}






          </div>


        </div>

      </div>





    </>
  )

}

export default BIke_Image