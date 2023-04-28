


import React, { useState, useEffect, useContext, useRef } from "react"

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Image__Com from "./Image__Com";

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

const Switch_image = function ({ da }) {



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
  const black_image = [da.main_image[1].image[1], da.main_image[1].image[1], da.main_image[1].image[1]];
  const white_image = [da.main_image[0].image[1], da.main_image[0].image[2], da.main_image[0].image[3]]

  console.log('??', da.main_image[0].image[0])


  const [num, setnum] = useState(0);


  const [image_1, setimage_1] = useState(
    {
      image: da.main_image[0].image[0],
      ima: 1,
    }

  );
  useEffect(() => {

    setimage_1({
      image: da.main_image[0].image[0],
      ima: 1,
    })

  }, [da])

  const Ref = useRef(null);

  const RRef = useRef(null);
  const color_set = function () {
    if (num == 0) {
      return 'white'
    }
    else { return 'black' }
  }

  const gogo = function () {
    var hey = resize * 0.8 * -1
    if (num > 3) {
      setnum(0);
    }
    if (num < 0) {
      setnum(3);
    }
    return {
      width: resize * 0.8 * 4,
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
                width: resize * 0.8 - 1,
                height: '100%',
                backgroundColor: '#1B1B1B',

                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                position: 'fixed'
              }}>




              <img
                style={{
                  transform: 'scale(1.0)',
                  objectFit: 'contain',
                  width: '100%'
                }}
                src={image_1.image}

              ></img>

            </div>
            <div

              style={{
                width: resize * 0.8,
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
          <Pc>

            <div style={{
              width: '40%',
              height: '100%',

            }}>

              <p
                className="name-1"
              > {da.name}</p>


            </div>

            <div style={{
              width: '15%',
              height: '100%',

              alignContent: 'center',
              display: 'flex',
              justifyContent: 'flex-end'
            }}>


              <div

                onClick={() => {
                  setnum(0)
                  setimage_1({
                    image: da.main_image[1].image[0],
                    ima: 2
                  });
                  //Ref.current.style.backgroundColor = 'white';
                  //RRef.current.childNodes[0].style.color = 'black'

                }}
                style={{
                  width: '30px',
                  height: '30px',
                  backgroundColor: 'black',

                  marginRight: '20px'
                }}>

              </div>
              <div
                onClick={() => {
                  setnum(0)
                  setimage_1({
                    image: da.main_image[0].image[0],
                    ima: 1
                  });
                  Ref.current.style.backgroundColor = '#1B1B1B';
                  RRef.current.childNodes[0].style.color = 'white'
                  RRef.current.childNodes[1].style.color = 'white'
                }}

                style={{
                  width: '30px',
                  height: '30px',
                  backgroundColor: 'white',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'black',

                }}>

              </div>

            </div>

          </Pc>
          <Mobile>



            <div style={{
              width: '100%',
              height: '5vh',
              display: 'flex',


            }}>
              <div

                onClick={() => {
                  setnum(0)
                  setimage_1({
                    image: da.main_image[1].image[0],
                    ima: 2
                  });
                  //Ref.current.style.backgroundColor = 'white';
                  //RRef.current.childNodes[0].style.color = 'black'

                }}
                style={{
                  width: '30px',
                  height: '30px',
                  backgroundColor: 'black',
                  marginRight: '15px',
                  borderRadius: '50%'
                }}>

              </div>
              <div
                onClick={() => {
                  setnum(0)
                  setimage_1({
                    image: da.main_image[0].image[0],
                    ima: 1
                  });
                  Ref.current.style.backgroundColor = '#1B1B1B';
                  RRef.current.childNodes[0].style.color = 'white'
                  RRef.current.childNodes[1].style.color = 'white'
                }}

                style={{
                  width: '30px',
                  height: '30px',
                  backgroundColor: 'white',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderRadius: '50%'
                }}>

              </div>

            </div>
            <div style={{
              width: '100%',
              height: '5vh',

            }}>

              <p
                style={{

                  margin: 0
                }}
                className="name--1"
              > {da.name}</p>


            </div>


          </Mobile>
        </div>



      </div>
    </>
  )

}

export default Switch_image
