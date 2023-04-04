


import React, { useState, useEffect, useContext, useRef } from "react"
import machine_1 from '../assets/machine_1.svg'



import main_1 from '../assets/main_1.svg'

import main_2 from '../assets/main_2.svg'
import main_3 from '../assets/main_3.svg'
import main_4 from '../assets/main_4.svg'



import { AiOutlineRight } from "react-icons/ai";
import Image_Chan_Com from "./Image_Chan_Com";
const Image_Chan = function ({ data, nm }) {


 const [num, setnum] = useState(0);


 const main_chagne = [

  {
   image: main_1,
   title: '접을 수 있는 디자인',
   sub: ' HIMO 자전거는 접이식이 가능한 핸들 바 , 차체 , 페달을 가지고 있어 작은 공간에도 휴대가 가능합니다.주차 공간을 줄여 번잡한 공간을 줄일수 있으며 간단하게 주차가 가능합니다.'

  },
  {
   image: main_2,
   title: '강력한 모토 ',
   sub: ' HIMO 자전거의 기어는 충전된 에너지를 효율적으로 사용해서 사용자들이 편안하게 운전 할수 있게 도와줍니다.사용자는 최대 25kph 제한 까지 쉽게 운전할수 있습니다..'

  },
  {
   image: main_3,
   title: '세가지의 모드',
   sub: '페달 모드 일반모드 조용한 모드 중 하나를 선택하여 사용자들은 길 상태에 맞는 적절한 모드를 사용할수 있습니다. '
  },
  {
   image: main_4,
   title: '탈부착 베터리 ',
   sub: '전류가 안정적으로 전달되여 자동차급 고출력 베터리를 사용할수 있습니다. 50km 까지 사용가능하여 출퇴근하는데 있어 어려움이 없습니다.베터리는 탈 부착 식고 베터리 도난 위험을 방지할수 있는 키 잠금 설계가 포함되어 있습니다.'
  }

 ]



 const gogo = function () {
  var hey = window.innerWidth * 0.8

  return {
   width: window.innerWidth * 0.8 * 2,
   height: '100%',

   display: 'flex',
   transform: `translateX(${hey * num}px)`,
   transition: `transform 0.5s ease-in`
  }
 }



 return (

  <>
   <div className='first-main-11'>
    <div
     style={{
      borderStyle: 'solid',
      overflow: 'scroll'
     }}
     className='first-main-sub1'>
     <AiOutlineRight
      onClick={() => {

       setnum((el) => el - 1)
      }}
      className='arrow'
      style={{
       color: 'black',
       zIndex: 2,
       bottom: '80px'

      }}
     ></AiOutlineRight>
     <div style={gogo()}
     >
      <div
       style={{
        width: window.innerWidth * 0.8,
        height: '100%'
        , backgroundColor: 'yellow',

       }}

      >

      </div>
      <div
       style={{
        width: window.innerWidth * 0.8,
        height: '100%'
        , backgroundColor: 'blue'
       }}

      >

      </div>



     </div>
    </div>
   </div>

  </>
 )

}

export default Image_Chan
