


import React, { useState, useEffect, useContext, useRef } from "react"
import Dot from './Dot';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Image__Com from "./Image__Com";
import black_2 from '../assets/black_2.svg';
import black_3 from '../assets/black_3.svg';

//import black_4 from '../assets/black_4.svg';
import black_5 from '../assets/black_5.svg';
import white_bike_1 from '../assets/white_bike_1.svg'
import white_bike_2 from '../assets/white_bike_2.svg'
import white_bike_3 from '../assets/white_bike_3.svg'
import Bike from '../assets/bike.svg'
import Black_Bike from '../assets/black_bike.svg'
import himo from '../assets/bike_image 1.svg'
const Switch_image = function ({ data, nm }) {
  const black_image = [black_2, black_3, black_5];
  const white_image = [white_bike_1, white_bike_2, white_bike_3]
  const [num, setnum] = useState(0);
  const [image_1, setimage_1] = useState(
    {
      image: Bike,
      ima: 1,
    }

  );
  const Ref = useRef(null);

  const RRef = useRef(null);
  const color_set = function () {
    if (num == 0) {
      return 'white'
    }
    else { return 'black' }
  }

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

      display: 'flex',
      transform: `translateX(${hey * num}px)`,
      transition: `transform 0.5s ease-in`
    }
  }



  return (


    <>
      <div className='first-main-11'>
        <div
          ref={RRef}
          className='first-main-sub1'>
          <AiOutlineDoubleLeft
            onClick={() => {

              setnum((el) => el - 1)
            }}
            style={{
              color: color_set(),
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
              color: color_set(),
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
                backgroundColor: '#1B1B1B',

                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                position: 'fixed'
              }}>




              <img
                style={{
                  transform: 'scale(1.1)'
                }}
                src={image_1.image}></img>

            </div>
            <div

              style={{
                width: window.innerWidth * 0.8,
                height: '100%',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

              }}>


            </div>

            {

              image_1.ima == 2 &&
              black_image.map((el, index) => {
                return <Image__Com data={el
                }
                  key={index}>

                </Image__Com>
              })


            }
            {
              image_1.ima == 1 &&
              white_image.map((el, index) => {
                return <Image__Com data={el
                }
                  key={index}>

                </Image__Com>
              })





            }





          </div>


        </div>

      </div>

      <div style={{
        width: '100%',


        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '80%',
          height: '100%',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px'
        }}>

          <div style={{
            width: '40%',
            height: '100%',

          }}>

            <p
              className="name-1"
            > HIMO C26 MAX</p>


          </div>

          <div style={{
            width: '15%',
            height: '100%',

            alignContent: 'center',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <p
              className="first-p-1"
            >
              Color
            </p>

            <div

              onClick={() => {
                setnum(0)
                setimage_1({
                  image: Black_Bike,
                  ima: 2
                });
                //Ref.current.style.backgroundColor = 'white';
                //RRef.current.childNodes[0].style.color = 'black'

              }}
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'black'
              }}>

            </div>
            <div
              onClick={() => {
                setnum(0)
                setimage_1({
                  image: Bike,
                  ima: 1
                });
                Ref.current.style.backgroundColor = '#1B1B1B';
                RRef.current.childNodes[0].style.color = 'white'
                RRef.current.childNodes[1].style.color = 'white'
              }}

              style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'white',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'black'
              }}>

            </div>

          </div>


        </div>



      </div>
    </>
  )

}

export default Switch_image
