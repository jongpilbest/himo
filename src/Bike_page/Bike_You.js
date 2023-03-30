


import React, { useState, useEffect, useContext, useRef } from "react"
import Bike_You_Com from "./Bike_You_Com"

const Bike_You = function ({ data, nm }) {

 const [clik_change, setclick_Change] = useState(0)



 const Bike_youtuve = [
  {

   name: 'Craving Tech',
   src: 'https://www.youtube.com/embed/RAcm8C3qM9I',
   youtuber: 'https://yt3.ggpht.com/ytc/AL5GRJUFfbA2P5k2prcdwCCvh3_emaNIaCq_C3tXZURJ=s88-c-k-c0x00ffffff-no-rj'
  },
  {
   name: 'Panmi',
   src: 'https://www.youtube.com/embed/drGxFwnvF6M',
   youtuber: 'https://yt3.ggpht.com/HfCfVeliqpmg4AdNIRX1Ou6CU9YfuG_tpHs1C54LJ2R967RAkgMYZjR9stBIsTXKEQBF6A8esA=s88-c-k-c0x00ffffff-no-rj'
  },
  {

   name: 'HIMO',
   src: 'https://www.youtube.com/embed/dqh-dNFvPlA',
   youtuber: 'https://yt3.ggpht.com/ddaqHA7FTOieo_blD6CzPTLCEMf9b9548vRIRefL5wLDhME7cun9GVZX7996L38VnFbZLNLk=s88-c-k-c0x00ffffff-no-rj'
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
