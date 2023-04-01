


import React, { useState, useEffect, useContext, useRef } from "react"
import Dot from './Dot';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";


import Bike from '../assets/bike.svg'
import himo from '../assets/bike_image 1.svg'
const Switch_image = function ({ data, nm }) {
 const [num, setnum] = useState(0);
 const [image_1, setimage_1] = useState(
  {
   image: Bike,
   ima: 1
  }

 );
 const Ref = useRef(null);



 const gogo = function () {
  var hey = window.innerWidth * 0.8 * -1
  return {
   width: window.innerWidth * 0.8 * 3,
   height: '100%',
   //backgroundColor: 'pink',
   display: 'flex',
   transform: `translateX(${hey * num}px)`,
   transition: `transform 0.5s ease-in`
  }
 }



 return (


  <>
   <div className='first-main-11'>
    <div className='first-main-sub1'>
     <AiOutlineDoubleLeft
      onClick={() => {

       setnum((el) => el - 1)
      }}
      style={{
       color: 'white',
       width: '20px',
       height: '20px',
       position: 'absolute',
       bottom: '30px',
       right: '80px',
       zIndex: 3
      }}
     ></AiOutlineDoubleLeft>
     <AiOutlineDoubleRight
      onClick={() => {

       setnum((el) => el + 1)
      }}
      style={{
       color: 'white',
       width: '20px',
       height: '20px',
       position: 'absolute',
       bottom: '30px',
       right: '30px',
       zIndex: 3
      }}

     ></AiOutlineDoubleRight>
     <div style={gogo()}
     >

      <div
       ref={Ref}
       style={{
        width: window.innerWidth * 0.8,
        height: '100%',
        backgroundColor: '#1B1B1B',

        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed'
       }}>











       <img
        style={{
         transform: 'scale(1.1)'
        }}
        src={image_1.image}></img>

      </div>
      <div

       style={{
        width: window.innerWidth * 0.8,
        height: '100%',
        backgroundColor: 'blue'
       }}>

      </div>
      <div

       style={{
        width: window.innerWidth * 0.8,
        height: '100%',
        backgroundColor: 'green'
       }}>

      </div>



     </div>


     {
      [0, 1, 2].map((el, index) => {

       return <Dot
        data={el}
        cor={num}
        key={index}
        click={(el) => setnum(el)}

       ></Dot>
      })

     }



    </div>

   </div>

   <div style={{
    width: '100%',


    display: 'flex',
    justifyContent: 'center'
   }}>
    <div style={{
     width: '80%',
     height: '100%',
     backgroundColor: 'white',
     display: 'flex',
     justifyContent: 'space-between',
     marginTop: '20px'
    }}>

     <div style={{
      width: '40%',
      height: '100%',

     }}>

      <p
       className="name-1"
      > HIMO C26 MAX</p>


     </div>

     <div style={{
      width: '15%',
      height: '100%',

      alignContent: 'center',
      display: 'flex',
      justifyContent: 'space-between'
     }}>
      <p
       className="first-p-1"
      >
       Color
      </p>

      <div

       onClick={() => {

        setimage_1({
         image: himo,
         ima: 2
        });
        Ref.current.style.backgroundColor = 'white';
        Ref.current.childNodes[0].style.color = 'black'
        Ref.current.childNodes[1].style.color = 'black'

       }}
       style={{
        width: '40px',
        height: '40px',
        backgroundColor: 'black'
       }}>

      </div>
      <div
       onClick={() => {

        setimage_1({
         image: Bike,
         ima: 1
        });
        Ref.current.style.backgroundColor = '#1B1B1B';
        Ref.current.childNodes[0].style.color = 'white'
        Ref.current.childNodes[1].style.color = 'white'
       }}

       style={{
        width: '40px',
        height: '40px',
        backgroundColor: 'white',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'black'
       }}>

      </div>

     </div>


    </div>



   </div>
  </>
 )

}

export default Switch_image
