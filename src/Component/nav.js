


import React, { useState, useEffect, useContext, useRef } from "react"
import logo from './logo.svg';
import { Outlet } from "react-router-dom";
import Nav_Com from "./Nav_Com";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
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
const Nav = function ({ }) {

  const Ref = useRef(null);
  const Ref1 = useRef(null);

  const [click, setclick] = useState(false);
  const [cliick, setcliick] = useState(false);

  return (
    <div>
      <Pc>
        <nav style={{
          width: '100%',
          height: '70px',

          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',


        }} >
          <div style={{
            width: '80%',
            height: '250px',

            zIndex: 2,
            display: 'flex'

          }}>
            <div style={{
              width: '200px',
              height: '70px',
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>

              <Link

                to='/'
              >
                <img
                  style={{
                    width: '80px',
                    height: '20px',


                  }}

                  src={require('../assets/logo.png')}></img>
              </Link>
            </div>
            <div
              onMouseLeave={() => {
                Ref.current.style.display = 'none'
              }}

              style={{
                width: '200px',
                height: '200px',


              }}>
              <div
                onMouseEnter={() => {
                  Ref.current.style.display = 'block'
                }}
                className="box-e-bike"
              >
                <div>
                  <AiOutlineMenu></AiOutlineMenu>>
                </div>

              </div>
              <div

                ref={Ref}
                style={{
                  display: 'none',
                  backgroundColor: 'white'
                }}>

                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'black'
                  }}

                  to='/products'
                >
                  <div


                    style={{
                      width: '100%',
                      height: '40px',
                      transform: 'translateY(-20%)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'white'

                    }}>
                    <p>
                      All E-Bike
                    </p>
                  </div>
                </Link>

                {



                  ["HIMO Z16", "HIMO C26 MAX", "HIMO ZB20 MAX", "HIMO C30R MAX"]
                    .map((el, index) => {
                      return <Nav_Com
                        data={el}
                        nm={(el) => setclick(el)}
                        key={index}
                      ></Nav_Com>
                    })
                }


              </div>



            </div>



          </div>

















        </nav >
      </Pc>

      <Mobile>
        <nav style={{
          width: '100%',
          height: '70px',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',


        }} >

          <div
            style={{
              width: '90%',
              height: '60%',
              display: 'flex',



              justifyContent: 'space-between',
              alignItems: 'center'



            }}
          >



            <Link

              to='/'
            >
              <img
                style={{
                  width: '80px',
                  height: '20px',


                }}

                src={require('../assets/logo.png')}></img>
            </Link>
            <AiOutlineMenu style={{
              width: '25px',
              height: '25px',
            }}>

            </AiOutlineMenu>

          </div>
        </nav>

      </Mobile>
    </div >
  )

}

export default Nav
