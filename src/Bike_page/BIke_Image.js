


import React, { useState, useEffect, useContext, useRef } from "react"
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import machine_1 from '../assets/machine_1.svg'
const BIke_Image = function ({ data, nm }) {






 return (


  <>
   <div
    style={{
     width: '100%',
     height: '420px',
     display: 'flex'
    }}
   >
    <div style={{
     width: '50%',
     height: '100%',
     borderWidth: '1px',
     borderStyle: 'solid',
    }}>

     <img

      style={{
       objectFit: 'contain',
       width: '95%',
       height: '100%',
       display: 'flex',
       alignSelf: 'center'

      }}
      src={machine_1}></img>

    </div>
    <div

     className='second-text-1'>
     <div className='second-text-main-1'>
      <p className='macc-p-1'>
       250W 강한 모터
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
        250w 리어 허브 모터는 가파른 언덕을 질주하는 것을 두려워하지 않게 해줍니다. 당신은 이 모터를 통해 사용자들이 손쉽게 언덕을 오를수 있게 도와줍니다.어시스트 기능 및 시스템에는 3가지가 있습니다. 0-무어시스트 모드, 1-페달 어시스트 모드, 2-페달 + 스로틀 어시스트 모드, 3-스로틀 어시스트 모드, 3-스로틀 어시스트 모드의 70-90%, 모트

       </p>

       <AiOutlineRight
        className='arrow'
        style={{
         color: 'white'
        }}
       ></AiOutlineRight>



      </div>


     </div>

    </div>


   </div>
  </>
 )

}

export default BIke_Image
