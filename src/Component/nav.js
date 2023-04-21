


import React, { useState, useEffect, useContext, useRef } from "react"
import logo from './logo.svg';
import { Outlet } from "react-router-dom";
import Nav_Com from "./Nav_Com";
import { Link } from "react-router-dom";
const Nav = function ({ }) {

  const Ref = useRef(null);


  const [click, setclick] = useState(false);
  const [cliick, setcliick] = useState(false);

  return (
    <div>
      <nav style={{
        width: '100%',
        height: '80px',
        // backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',

      }} >
        <div
          className='nav_1'
        >
          <div
            style={{
              width: '150px',
              height: '50%',
              display: 'flex',

              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center'



            }}
          >



            <Link

              to='/'
            >
              <img
                style={{
                  width: '110px',
                  height: '25px',


                }}

                src={require('../assets/logo.png')}></img>
            </Link>
          </div>

          <div style={{
            width: '150px',
            height: '40px',
            display: 'flex',

            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',

            display: 'flex',
            flexDirection: 'column'
          }}>
            <div
              onMouseOver={() => {
                setclick(true);

              }}
              onMouseOut={() => {
                setclick(false);
              }}


              style={{
                width: '100%',
                height: '40px',

                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <p
                className="main-text"

              > E-bike</p>

            </div>
            <div style={{
              width: '150px',

              backgroundColor: 'white',
              position: 'absolute',
              zIndex: 2,
              top: '60px'
            }}>

              {
                click &&
                ["Himo Z16", "Himo Z16 Max", "Himo Z20", "Himo Z20 Max"]
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




          <div


            style={{
              width: '150px',
              height: '40px',
              display: 'flex',

              alignItems: 'center',

              alignSelf: 'center',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}>
            <div

              onMouseOver={() => {
                setcliick(true);

              }}
              onMouseOut={() => {
                setcliick(false);
              }}


              style={{
                width: '100%',
                height: '40px',

                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <p
                className="main-text"

              > Accessori</p>

            </div>
            <div style={{
              width: '150px',

              backgroundColor: 'white',
              position: 'absolute',
              zIndex: 2,
              top: '60px'
            }}>


              {cliick &&
                ["Helments", "Alarms & Locks", "Fenders"]
                  .map((el, index) => {
                    return <Nav_Com
                      nm={(el) => setcliick(el)}
                      data={el}
                      key={index}
                    ></Nav_Com>
                  })



              }


            </div>



          </div>

          <div style={{
            width: '150px',
            height: '40px',
            display: 'flex',

            alignItems: 'center',
            alignSelf: 'center',

            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              width: '100%',
              height: '40px',

              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <p
                className="main-text"

              > Support</p>

            </div>



          </div>



        </div>








      </nav >

    </div >
  )

}

export default Nav
