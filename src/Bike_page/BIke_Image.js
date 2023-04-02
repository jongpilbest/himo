


import React, { useState, useEffect, useContext, useRef } from "react"
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import machine_1 from '../assets/machine_1.svg'
import Image__Com from "../Component/Image__Com";
const BIke_Image = function ({ data, nm }) {




  const [num, setnum] = useState(0);

  const Ref = useRef(null);

  const RRef = useRef(null);

  const gogo = function () {
    var hey = window.innerWidth * 0.8 * -1
    if (num > 3) {
      setnum(0);
    }
    if (num < 0) {
      setnum(3);
    }
    return {
      width: window.innerWidth * 0.8 * 4,
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
          <AiOutlineDoubleLeft
            onClick={() => {

              setnum((el) => el - 1)
            }}
            style={{
              color: 'black',
              width: '20px',
              height: '20px',
              position: 'absolute',
              bottom: '30px',
              right: '80px',
              zIndex: 3
            }}
          ></AiOutlineDoubleLeft>
          <AiOutlineDoubleRight
            onClick={() => {

              setnum((el) => el + 1)
            }}
            style={{
              color: 'black',
              width: '20px',
              height: '20px',
              position: 'absolute',
              bottom: '30px',
              right: '30px',
              zIndex: 3
            }}

          ></AiOutlineDoubleRight>
          <div style={gogo()}
          >

            <div
              ref={Ref}
              style={{
                width: window.innerWidth * 0.8,
                height: '100%',
                backgroundColor: 'aquamarine',

                position: 'relative',

                justifyContent: 'center',

              }}>






            </div>
            <div

              style={{
                width: window.innerWidth * 0.8,
                height: '100%',
                backgroundColor: 'beige',


              }}>


            </div>

            {



            }





          </div>


        </div>

      </div>





    </>
  )

}

export default BIke_Image
