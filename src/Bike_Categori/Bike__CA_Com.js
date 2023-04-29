import Battery from '../assets/material-symbols_battery-full-alt.svg'
import plug from '../assets/material-symbols_power-plug.svg'
import gogo from '../assets/material-symbols_speed.svg'
import water from '../assets/mdi_water-off.svg'
import react from 'react'
import Bike from '../assets/bike.svg'
import { AiOutlineRight } from "react-icons/ai";

const Bike__CA_Com = function ({ data }) {

 console.log(data, '여기데이터좀')
 return (
  <>




   <div style={{
    width: '100%',
    height: '60vh',

    marginBottom: '30px',

    display: 'flex',
    justifyContent: 'center',
    marginBottom: '150px'
   }}>
    <div style={{
     width: '80%',
     height: '100%',
     backgroundColor: 'white',
     display: 'flex',
     flexDirection: 'row'
    }}>

     <div style={{
      width: '40%',
      height: '100%',

      display: 'flex',
      flexDirection: 'column'
     }}>
      <p style={{
       fontWeight: 'bold',
       fontSize: '30px',
       margin: '5px'
      }}>
       {data.detail[0]}

      </p>
      <p style={{
       fontWeight: 'bold',
       fontSize: '30px',
       margin: '5px'
      }}>
       {data.detail[1]}
      </p>
      <p style={{
       fontSize: '15px',
       fontWeight: '600'
      }}>
       {data.detail[2]}
      </p>
      <div style={{
       width: '70%',


       display: 'flex',

      }}>
       <p
        style={{
         marginTop: 'auto',
         marginBottom: 'auto',
         fontWeight: '400',
         fontSize: '13px',

        }}

       >

        {data.detail[3]}
       </p>


      </div>
      <div style={{

       width: '70%',
       height: '55%',
       marginTop: '10%',

       display: 'flex',
       flexDirection: 'column'

      }}>
       <div style={{
        width: '100%',
        height: '50%',
        background: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
       }}>
        <div style={{
         width: '40%',
         height: '90px',

         display: 'flex',
         justifyContent: 'center',
         flexDirection: 'column',

        }}>
         <div style={{
          width: '50%',
          height: '50%'
         }}>


          <img
           style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'


           }}
           src={Battery}
           title='good'
          />
         </div>
         <p
          style={{
           margin: '5px',
           fontSize: '13px',
           fontWeight: '500'

          }}

         >80KM
         </p>
         <p style={{
          margin: '5px',
          fontSize: '13px',
          fontWeight: '500'

         }}>
          MaxRange
         </p>



        </div>
        <div style={{
         width: '40%',
         height: '90px',

         display: 'flex',
         flexDirection: 'column'

        }}>
         <div style={{
          width: '50%',
          height: '50%'
         }}>

          <img
           style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'


           }}
           src={plug}
           title='good'
          />
         </div>
         <p
          style={{
           margin: '5px',
           fontSize: '13px',
           fontWeight: '500'

          }}

         >

          250W

         </p>
         <p style={{
          margin: '5px',
          fontSize: '13px',
          fontWeight: '500'

         }}>
          MotorPower
         </p>
        </div>

       </div>

       <div style={{

        width: '100%',
        height: '55%',

        display: 'flex',


       }}>
        <div style={{
         width: '100%',
         height: '100%',
         background: 'white',
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center'
        }}>
         <div style={{
          width: '40%',
          height: '90px',

          display: 'flex',
          flexDirection: 'column'

         }}>
          <img
           style={{
            width: '50%',
            height: '50%',
            objectFit: 'cover'


           }}
           src={gogo}
           title='good'
          />
          <p
           style={{
            margin: '5px',
            fontSize: '13px',
            fontWeight: '500'

           }}

          >80KM
          </p>
          <p style={{
           margin: '5px',
           fontSize: '13px',
           fontWeight: '500'

          }}>
           MaxRange
          </p>
         </div>
         <div style={{
          width: '40%',
          height: '90px',

          display: 'flex',

          flexDirection: 'column'
         }}>
          <div style={{
           width: '50%',
           height: '50%'
          }}>

           <img
            style={{
             width: '100%',
             height: '100%',
             objectFit: 'cover'


            }}
            src={water}
            title='good'
           />
          </div>
          <p
           style={{
            margin: '5px',
            fontSize: '13px',
            fontWeight: '500'

           }}

          >80KM
          </p>
          <p style={{
           margin: '5px',
           fontSize: '13px',
           fontWeight: '500'

          }}>
           MaxRange
          </p>
         </div>

        </div>


       </div>
      </div>


     </div>


     <div style={{
      width: '70%',
      height: '100%',

      display: 'flex',
      justifyContent: 'space-between'
     }}>


      <div style={{
       width: '45%',
       height: '100%',
       backgroundColor: 'white',
       borderColor: 'black',
       borderStyle: 'solid',
       borderWidth: '1.5px',
       display: 'flex',
       flexDirection: 'column'
      }}>
       <div style={{
        width: '100%',
        height: '75%',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
       }}>
        <img
         style={{
          width: '90%',
          height: '80%',
          objectFit: 'contain'


         }}
         src={data.image[0].image[0]}></img>
       </div>
       <div style={{
        width: '100%',
        height: '40%',

        display: 'flex',
        justifyContent: 'center'
       }}>
        <div style={{
         width: '80%',
         height: '100%',

         display: 'flex',
         flexDirection: 'column'
        }}>
         <p style={{
          fontSize: '18px',
          fontWeight: '600'
         }}>
          {data.name}
         </p>
         <p style={{
          marginTop: '5px',
          fontWeight: '600',
          fontSize: '15px'

         }}>
          Color
         </p>
         <div style={{
          display: 'flex',
          flexDirection: 'row'
         }}>


          <div style={{
           width: '50px',
           height: '20px',
           backgroundColor: data.image[1].name,
           borderRadius: '20px'
          }}>

          </div>
          <div style={{
           width: '50px',
           height: '20px',
           backgroundColor: data.image[0].name
           ,
           borderColor: 'black'
           , borderStyle: 'solid',
           borderWidth: '1px',
           marginLeft: '20px',
           borderRadius: '20px'
          }}>

          </div>


         </div>
         <div
          style={{
           display: 'flex',
           alignContent: 'center',
           justifyContent: 'flex-end'
          }}
         >
          <p style={{
           margin: 0,
           fontSize: '13px',
           fontWeight: '600',
           marginRight: '10px'
          }}> View Detail</p>
          <AiOutlineRight></AiOutlineRight>
         </div>

        </div>

       </div>

      </div>







      <div style={{
       width: '45%',
       height: '100%',
       backgroundColor: 'black',
       display: 'flex',
       flexDirection: 'column'
      }}>
       <div style={{
        width: '100%',
        height: '75%',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
       }}>
        <img
         style={{
          width: '90%',
          height: '80%',
          objectFit: 'contain'

         }}
         src={data.image[1].image[0]} ></img>
       </div>
       <div style={{
        width: '100%',
        height: '40%',

        display: 'flex',
        justifyContent: 'center'
       }}>
        <div style={{
         width: '80%',
         height: '100%',

         display: 'flex',
         flexDirection: 'column'
        }}>
         <p style={{
          fontSize: '18px',
          fontWeight: '600',
          color: 'white'
         }}>
          {data.name}
         </p>
         <p style={{
          marginTop: '5px',
          fontWeight: '600',
          fontSize: '15px',
          color: 'white'
         }}>
          Color
         </p>
         <div style={{
          display: 'flex',
          flexDirection: 'row'
         }}>


          <div style={{
           width: '50px',
           height: '20px',
           backgroundColor: data.image[1].name,
           borderRadius: '20px',
           borderWidth: '1.5px',
           borderStyle: 'solid'
           , borderColor: 'white'
          }}>

          </div>
          <div style={{
           width: '50px',
           height: '20px',
           backgroundColor: data.image[0].name,

           borderColor: 'black'
           , borderStyle: 'solid',
           borderWidth: '1px',
           marginLeft: '20px',
           borderRadius: '20px'
          }}>

          </div>


         </div>
         <div
          style={{
           display: 'flex',
           alignContent: 'center',
           justifyContent: 'flex-end'
          }}
         >
          <p style={{
           margin: 0,
           fontSize: '13px',
           fontWeight: '600',
           marginRight: '10px',
           color: 'white'
          }}> View Detail</p>
          <AiOutlineRight
           style={{ color: 'white' }}

          ></AiOutlineRight>
         </div>

        </div>

       </div>













      </div>


     </div>





    </div>


   </div >

  </>
 )
}

export default Bike__CA_Com