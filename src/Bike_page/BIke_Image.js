

import React, { useState, useEffect, useContext, useRef } from "react"
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

import Bike_Ima_Com from "./Bike_Ima_Com";
import Bike_Ima__Com from "./Bike__image";

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

const BIke_Image = function ({ data, nm }) {


  const [resize, setsize] = useState(window.innerWidth);

  useEffect(() => {
    const windowResize = () => {
      setsize(window.innerWidth)
    }

    window.addEventListener(`resize`, windowResize);

    return () => {
      window.removeEventListener(`resize`, windowResize);
    }
  }, []);













  const [num, setnum] = useState(0);

  const Ref = useRef(null);

  const RRef = useRef(null);

  const gogo = function () {
    var hey = resize * 0.8 * -1
    if (num >= data.length) {
      setnum(0);
    }
    if (num < 0) {
      setnum(data.length);
    }
    return {
      width: resize * 0.8 * data.length,
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
      <Pc>


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



      </Pc>

      <Mobile>
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
                  return <Bike_Ima__Com data={el} key={index}></Bike_Ima__Com>
                })}





            </div>


          </div>

        </div>



      </Mobile>

    </>
  )

}

export default BIke_Image