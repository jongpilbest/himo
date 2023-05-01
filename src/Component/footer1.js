


import React, { useState, useEffect, useContext, useRef } from "react"
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiFillTwitterCircle, AiTwotoneCheckCircle } from "react-icons/ai";

const Footer1 = function ({ data, nm }) {



  return (

    <div style={{
      width: '100%',



      backgroundColor: '#1b1b1b',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',



    }}>

      <div style={{
        width: '80%',
        height: '80%',
        marginTop: '25px',
        marginBottom: '25px',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
      }}>
        <div style={{
          width: '100%',
          height: '80%',

        }}>
          <div style={{
            width: '100%',
            height: '10%',

          }}>
            <p className='final-main'>CONTACT INFO
            </p>

          </div>
          <div style={{
            width: '65%',
            height: '80%',

          }}>
            <p className='final-fianl-p'>
              Email support@himobikes.com
            </p>
            <p className='final-fianl-p'>
              Phone : +86 137 5158 8975
            </p>
            <p className='final-fianl-p'>
              Support : Monday - Friday 10AM -10PM
            </p>
            <p className='final-fianl-p'>
              Address : Hehua Community, Pinghu Street, Longgang District 1005 E Era Building, Henglu, No.159 North Pingji Avenue, Shenzhen, 518000 Guangdong, China
            </p>
            <div

              style={{
                display: 'flex',

                alignItems: 'flex-start'
              }}
            >
              <AiFillTwitterCircle
                onClick={() => {
                  window.open('https://twitter.com/HIMOEBIKE', '_blank')
                }}
                style={{
                  width: '30px',
                  height: '30px',
                  color: 'white',
                  marginRight: '15px'
                }}
              >

              </AiFillTwitterCircle>
              <AiOutlineInstagram
                onClick={() => {
                  window.open('https://www.instagram.com/himo_bike/', '_blank')
                }}

                style={{
                  width: '30px',
                  height: '30px',
                  color: 'white',
                  marginRight: '15px'
                }}
              ></AiOutlineInstagram>

              <AiFillYoutube

                onClick={() => {
                  window.open('https://www.youtube.com/channel/UC2xLeDa-k9k7An2z3fKfIqA/featured', '_blank')
                }}



                style={{
                  width: '30px',
                  height: '30px',
                  color: 'white'
                }}></AiFillYoutube>


            </div>
          </div>



        </div>

      </div>


    </div>

  )

}

export default Footer1
