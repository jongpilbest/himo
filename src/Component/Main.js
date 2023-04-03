

import machine_1 from '../assets/machine_1.svg'
import logo from './logo.svg';
import Nav from './nav';
import Sub_Com from './Sub_Com';
import './Main.css'
import { AiOutlineMore } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiFillTwitterCircle, AiTwotoneCheckCircle } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import Bike from '../assets/bike.svg'
import zz from '../assets/z-16.svg'
import { useEffect, useState, useRef } from 'react';
import Dot from './Dot';

const Main = function ({ }) {
  const image_first = [
    {
      color: 1,
      name: 'HIMO Z20 Folding E-Bike',


    },
    {
      color: 2,
      name: 'HIMO Z16',


    },
    {
      color: 1,
      name: 'HIMO C26 MAX',


    },
    {
      color: 2,
      name: 'Z16 MAX',


    }


  ]
  const [num, setnum] = useState(0);

  function useInterval(callback, delay) {
    const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.

    useEffect(() => {
      savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
      }
      if (delay !== null) {
        // 만약 delay가 null이 아니라면
        let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
        return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
      }
    }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
  }

  /*
    useInterval(() => {
      setnum(num + 1)
    }, [2000])
  */

  useEffect(() => {
    gogo();
    console.log('여기 가냥')
  }, [num])

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




  return (
    <div className="App">
      <Nav></Nav>
      <div className='first-main'>
        <div className='first-main-sub1'>
          <div style={gogo()}
          >
            <div


              style={{
                width: window.innerWidth * 0.8,
                height: '100%',
                //backgroundColor: 'skyblue',
                position: 'relative',

              }}>
              <img

                className='img-1'
                src={Bike}></img>
              <div className='first-main-sub2'>
                <div
                >
                  <p
                    className='black-p'
                  >
                    HIMO C26 MAX
                  </p>
                  <div
                    className='first-main-left'>
                    <p
                      className='black-p-p'
                    >
                      무게가 가볍고, 접이식이 가능하여 이동이 편리하고 공간을 절약할수 있습니다.

                    </p>
                  </div>

                </div>
                <div>
                  <p>

                  </p>
                </div>
                <div style={{
                  width: '100%',
                  height: '10%',
                  //backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginTop: '20px'
                }}>
                  <div style={{
                    width: '200px',
                    height: '100%',
                    marginLeft: '30px',
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',

                  }}>
                    <p
                      className='black-q'
                    > 자세히 알아보기</p>
                  </div>

                </div>
              </div>
            </div>
            <div


              style={{
                width: window.innerWidth * 0.8,
                height: '100%',
                //backgroundColor: 'skyblue',
                position: 'relative'
              }}>
              <img
                style={{
                  transform: 'scale(0.8)'
                }}
                className='img-1'
                src={zz}></img>
              <div className='first-main-sub2'>
                <div
                >
                  <p
                    className='black-p'
                  >
                    HIMO Z16
                  </p>
                  <div
                    style={{
                      width: '40%'
                    }}

                    className='first-main-left'>
                    <p
                      className='black-p-p'
                    >
                      최대 주행 거리가 80km에 이르는 가장 작고 환경 친화적인 차량

                    </p>
                  </div>

                </div>
                <div>
                  <p>

                  </p>
                </div>
                <div style={{
                  width: '100%',
                  height: '10%',
                  //backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginTop: '20px'
                }}>
                  <div style={{
                    width: '200px',
                    height: '100%',
                    marginLeft: '30px',
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',

                  }}>
                    <p
                      className='black-q'
                    > 자세히 알아보기</p>
                  </div>

                </div>
              </div>
            </div>
            <div

              style={{
                width: window.innerWidth * 0.8,
                height: '100%',
                backgroundColor: 'green'
              }}>

            </div>



          </div>

          {
            [0, 1, 2].map((el, index) => {

              return <Dot
                data={el}
                cor={num}
                key={index}
                click={(el) => setnum(el)}

              ></Dot>
            })

          }


        </div>

      </div>
      <div className='main-grid'>
        <div className='bike-text'>
          <p

            className='second-p'
          > 고성능 전기 자전거</p>
        </div>
        <div
          className='grid_div'
        >
          {
            image_first.map((el, index) => {
              return <Sub_Com
                key={index}
                data={el}
                nm={index}
              >

              </Sub_Com>

            })

          }





        </div>
      </div>
      <div style={{
        width: '100%',
        height: '10vh',
        display: 'flex',
        justifyContent: 'center'



      }}>
        <div
          style={{
            width: '80%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
        >
          <p className='bike--p'>
            더 많은 자전거
          </p>
          <AiOutlineRight
            style={{
              width: '25px',
              height: '25px',
              marginLeft: '10px'
            }}
          ></AiOutlineRight>
        </div>

      </div>
      <div style={{
        width: '100%',
        height: '55vh',
        marginTop: '50px',
        marginBottom: '50px',
        display: 'flex',
        justifyContent: 'center'

      }}>
        <div style={{
          width: '80%',
          height: '100%',

          position: 'relative',
          display: 'flex',
          //justifyContent: 'center',
          flexDirection: 'column'

        }}>


          <div className='second-main'>
            <div className='second-image'>

              <img

                style={{
                  objectFit: 'contain',
                  width: '90%',
                  height: '90%',
                  display: 'flex',
                  alignSelf: 'center'

                }}
                src={machine_1}></img>
              <p
                className='macoo'
              >01</p>
            </div>
            <div
              className='second-text'>
              <div className='second-text-main'>
                <p className='macc-p'>
                  접을 수 있는 디자인
                </p>

              </div>

              <div style={{
                width: '100%',
                height: '40%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',


              }}>
                <div style={{
                  width: '75%',
                  height: '100%',
                  backgroundColor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',

                }}> <p

                  className='ma--p'
                >
                    HIMO Z16은 접이식이 가능한 핸들 바 , 차체 , 페달을 가지고 있어 작은 공간에도 휴대가 가능합니다.
                    주차 공간을 줄여 번잡한 공간을 줄일수 있으며 간단하게 주차가 가능합니다.


                  </p>

                  <AiOutlineRight
                    className='arrow'
                    style={{
                      color: 'black'
                    }}
                  ></AiOutlineRight>



                </div>


              </div>

            </div>


          </div>

        </div>

      </div>

      <div style={{
        width: '100%',
        height: '55vh',

        display: 'flex',
        justifyContent: 'center'

      }}>
        <div style={{
          width: '80%',
          height: '100%',

          position: 'relative',
          display: 'flex',
          //justifyContent: 'center',
          flexDirection: 'column'

        }}>


          <div className='second-main'>
            <div className='second-image-1'>

              <img

                style={{
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignSelf: 'center'

                }}
                src={Bike}></img>

            </div>
            <div
              className='second-text-1'>
              <p
                className='ss-text'
              >
                완벽한 승차감 찾기
              </p>
              <p className='sss-text'>
                E-bike 를 비교해보세요
              </p>

              <AiOutlineRight
                className='arrow'
                style={{
                  color: 'black'
                }}
              ></AiOutlineRight>








            </div>

          </div>
        </div>
      </div >


    </div >
  )
}

export default Main
