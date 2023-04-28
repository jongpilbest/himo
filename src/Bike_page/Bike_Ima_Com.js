


import React, { useState, useEffect, useContext, useRef } from "react"


const Bike_Ima_Com = function ({ data }) {
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




  return (

    <>

      <div

        style={{
          width: resize * 0.8,
          height: '100%',
          backgroundColor: 'white',
          display: 'flex',











          position: 'relative',

          justifyContent: 'center',

        }}>



        <div style={{
          width: resize * 0.5,
          height: '100%',

        }}>

          <img

            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignSelf: 'center'

            }}
            src={data.image}></img>

        </div>
        <div

          className='second-text-1'>
          <div className='second-text-main-1'>
            <p className='macc-p-1'>
              {data.Big_Tile}
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

              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',

            }}> <p

              className='ma--p-1'
            >
                {data.Small_tite}

              </p>







            </div>


          </div>

        </div>


      </div>









    </>
  )

}

export default Bike_Ima_Com
