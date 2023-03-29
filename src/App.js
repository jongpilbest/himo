

import Main from './Component/Main';

import Bike_inner from './Bike_page/Bike_inner';
import { AiOutlineInstagram } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiFillTwitterCircle, AiTwotoneCheckCircle } from "react-icons/ai";
function App() {



  return (
    <>

      <Bike_inner></Bike_inner>
      <div style={{
        width: '100%',

        padding: '20px',
        backgroundColor: '#1b1b1b',
        display: 'flex',
        justifyContent: 'center',


      }}>

        <div style={{
          width: '80%',
          height: '80%',

          marginTop: '50px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center'
        }}>
          <div style={{
            width: '50%',
            height: '100%',

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
                  style={{
                    width: '30px',
                    height: '30px',
                    color: 'white',
                    marginRight: '15px'
                  }}
                >

                </AiFillTwitterCircle>
                <AiOutlineInstagram

                  style={{
                    width: '30px',
                    height: '30px',
                    color: 'white',
                    marginRight: '15px'
                  }}
                ></AiOutlineInstagram>

                <RiKakaoTalkFill



                  style={{
                    width: '30px',
                    height: '30px',
                    color: 'white'
                  }}></RiKakaoTalkFill>


              </div>
            </div>



          </div>

        </div>


      </div>
    </>
  );
}

export default App;
