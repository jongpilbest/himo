


import React, { useState, useEffect, useContext, useRef } from "react"
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import Bike from '../assets/bike.svg'
import himo from '../assets/bike_image 1.svg'

const Main_Bike = function ({ }) {
  const [image_1, setimage_1] = useState(
    Bike
  );
  const Ref = useRef(null);
  const Color_ref = useRef(null);
  const gogo = function () {
    var hey = window.innerWidth * 0.8 * -1
    console.log(hey, '헤이')
    return {
      width: window.innerWidth * 0.8 * 3,
      height: '100%',
      //backgroundColor: 'pink',
      display: 'flex',
      transform: `translateX(${hey * num}px)`,
      transition: `transform 0.5s ease-in`
    }
  }

  const [num, setnum] = useState(0);



  return (


    <>
      <div
        className='first-main-11'>
        <div

          style={{
            width: window.innerWidth * 0.8,
            height: '100%',
            position: 'relative'
          }}>
          <div

            ref={Ref}
            style={gogo()}
          >

            <div

              style={{
                width: window.innerWidth * 0.8,
                height: '100%',
                backgroundColor: 'skyblue',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center'
              }}>
              <AiOutlineDoubleLeft

                style={{
                  color: 'white',
                  width: '20px',
                  height: '20px',
                  position: 'absolute',
                  bottom: '30px',
                  right: '80px'
                }}
              ></AiOutlineDoubleLeft>
              <AiOutlineDoubleRight

                style={{
                  color: 'white',
                  width: '20px',
                  height: '20px',
                  position: 'absolute',
                  bottom: '30px',
                  right: '30px'
                }}

              ></AiOutlineDoubleRight>


              <img

                src={Bike}></img>

            </div>
            <div

              style={{
                width: window.innerWidth * 0.8,
                height: '100%',
                backgroundColor: 'blue'
              }}>

            </div>
            <div

              style={{
                width: window.innerWidth * 0.8,
                height: '100%',
                backgroundColor: 'green'
              }}>

            </div>




            <img
              style={{
                transform: 'scale(1.2)'
              }}
              src={image_1}></img>
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
          justifyContent: 'space-between'
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

                setimage_1(himo);
                Ref.current.style.backgroundColor = 'white';
                Ref.current.childNodes[0].style.color = 'black'
                Ref.current.childNodes[1].style.color = 'black'

              }}
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'black'
              }}>

            </div>
            <div
              onClick={() => {

                setimage_1(Bike);
                Ref.current.style.backgroundColor = '#1B1B1B';
                Ref.current.childNodes[0].style.color = 'white'
                Ref.current.childNodes[1].style.color = 'white'
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

export default Main_Bike
