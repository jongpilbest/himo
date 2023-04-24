


import React, { useState, useEffect, useContext, useRef } from "react"
import Bike_You_Com from "./Bike_You_Com"

const Bike_You = function ({ data, nm }) {

  const [clik_change, setclick_Change] = useState(0)



  const Bike_youtuve = [
    {

      name: 'Jakreview',
      src: 'https://www.youtube.com/embed/AMI03fgKDq4',
      youtuber: 'https://yt3.ggpht.com/g-TdBrnE-bUUZ7t5VlArQj9k3TWlwr9dtepLaDTD0sdmdgTm1Yxs25lgF_eQM6FiqoQE9CVtHw=s88-c-k-c0x00ffffff-no-rj'
    },
    {
      name: 'Filipe View',
      src: 'https://www.youtube.com/embed/rNdKanHvu6Y',
      youtuber: 'https://yt3.ggpht.com/BRrT6NZkFGyBieGmPV7OH7CtLx6BPvmFAFEuq4zL9g9A8c6nWWb59r8xWFPRhDffp4g6oN1cOQ=s88-c-k-c0x00ffffff-no-rj'
    },
    {

      name: 'Urban Digi Essentials',
      src: 'https://www.youtube.com/embed/twUI_Z4OZDo',
      youtuber: 'https://yt3.ggpht.com/ytc/AGIKgqMH5jVlyX8uxKSz8leDMo7XWZzhwYjF7HAKoour=s88-c-k-c0x00ffffff-no-rj'

    }

  ]

  return (


    <>
      <div style={{
        width: '100%',
        height: '550px',

        marginTop: '100px',
        display: 'flex',
        flexDirection: 'row'
      }}>
        <div style={{
          width: '40%',
          height: '100%',

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
            , width: '100%',
            height: '30%'


          }}>
            <div>


              <p className='macc'>
                사용자들이 말해주는

              </p>
              <p className='macc'>
                HIMO Z20 MAX
              </p>
            </div>
          </div>

          <div style={{

            width: '100%',
            height: '60%',


            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',

          }}>


            {


              Bike_youtuve.map((el, index) => {


                return <Bike_You_Com
                  key={index}
                  data={el}
                  color={clik_change}
                  num={index}
                  cli={(el) => {
                    setclick_Change(el)
                  }}

                >

                </Bike_You_Com>
              })


            }

          </div>

        </div>



        <div style={{
          width: '60%',
          height: '100%',
          backgroundColor: 'gray'
        }}>

          {

            <iframe

              style={{
                border: 'none'
              }}

              width="100%" height="100%" src={Bike_youtuve[clik_change].src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          }


        </div>





















      </div>
    </>
  )

}

export default Bike_You
