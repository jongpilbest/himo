


import React, { useState, useEffect, useContext, useRef } from "react"
import Bike_You_Com from "./Bike_You_Com"

const Bike_You = function ({ data, nm }) {

  const [clik_change, setclick_Change] = useState(0)
  //console.log(data[0].youtube[0].youtube_linkd, '유투브확인')


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
                {data.name}
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


              data.youtube.map((el, index) => {


                return <Bike_You_Com
                  key={index}
                  data={el}
                  color={clik_change}
                  num={index}
                  cli={(el) => {
                    //console.log(el, '여기요')
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

              width="100%" height="100%" src={data.youtube[clik_change].youtube_linkd} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          }


        </div>





















      </div>
    </>
  )

}

export default Bike_You
