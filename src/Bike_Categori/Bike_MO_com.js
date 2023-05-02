
import gogo from '../assets/material-symbols_speed.svg'
import { BsSpeedometer2 } from "react-icons/bs";
import react from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineRight } from "react-icons/ai";
import { GiCarWheel, GiWeight } from "react-icons/gi";

const Bike_MO_com = function ({ data }) {

 console.log(data, '여기데이터좀')
 return (
  <>




   <div style={{
    width: '100%',
    height: '750px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center'

    , flexDirection: 'column',
    marginTop: '30px'

   }}>
    <div style={{
     width: '80%',

    }}>


     <div style={{
      display: 'flex'
     }}>


      <p style={{
       fontWeight: 'bold',
       fontSize: '20px',
       margin: '5px'
      }}>
       {data.detail[0]}

      </p>
      <p style={{
       fontWeight: 'bold',
       fontSize: '20px',
       margin: '5px'
      }}>
       {data.detail[1]}
      </p>


     </div>
     <p style={{
      fontSize: '13px',
      fontWeight: '600'
     }}>
      {data.detail[2]}
     </p>
     <div>




      <div style={{
       width: '100%',
       height: '300px',
       backgroundColor: 'white',
       borderColor: 'black',
       borderStyle: 'solid',
       borderWidth: '1.5px',
       display: 'flex',
       flexDirection: 'column',
       marginBottom: '40px'
      }}>
       <div style={{
        width: '100%',
        height: '60%',

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
          fontSize: '17px',
          fontWeight: '600',
          marginTop: '10px',
          marginBottom: '10px'
         }}>
          {data.name}
         </p>
         <p style={{
          marginTop: '5px',
          fontWeight: '600',
          fontSize: '12px'

         }}>
          Color
         </p>
         <div style={{
          display: 'flex',
          flexDirection: 'row'
         }}>


          <div style={{
           width: '35px',
           height: '15px',
           backgroundColor: data.image[1].name,
           borderRadius: '20px'
          }}>

          </div>
          <div style={{
           width: '35px',
           height: '15px',
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
         <Link style={{
          textDecoration: 'none',
          color: 'black'
         }}
          to={`/product/${data.name}`} >

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
         </Link>
        </div>

       </div>

      </div>

      <div style={{
       width: '100%',
       height: '300px',
       backgroundColor: 'black',
       borderColor: 'black',
       borderStyle: 'solid',
       borderWidth: '1.5px',
       display: 'flex',
       flexDirection: 'column'
      }}>
       <div style={{
        width: '100%',
        height: '60%',

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
          fontSize: '17px',
          fontWeight: '600',
          marginTop: '10px',
          marginBottom: '10px',
          color: 'white'
         }}>
          {data.name}
         </p>
         <p style={{
          marginTop: '5px',
          fontWeight: '600',
          fontSize: '12px',
          color: 'white'

         }}>
          Color
         </p>
         <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
         }}>
          <div style={{
           width: '40%',
           display: 'flex'
          }}>




           <div style={{
            width: '35px',
            height: '15px',
            backgroundColor: data.image[0].name,
            borderRadius: '20px'
           }}>

           </div>
           <div style={{
            width: '35px',
            height: '15px',
            backgroundColor: data.image[1].name
            ,
            borderColor: 'white'
            , borderStyle: 'solid',
            borderWidth: '1px',
            marginLeft: '20px',
            borderRadius: '20px'
           }}>

           </div>
          </div>
          <div>


           <Link style={{
            textDecoration: 'none',
            color: 'black'
           }}
            to={`/product/${data.name}`} >

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
             <AiOutlineRight style={{
              color: 'white'
             }}></AiOutlineRight>

            </div>
           </Link>
          </div>
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

export default Bike_MO_com