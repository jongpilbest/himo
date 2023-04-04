

import React, { useState, useEffect, useContext, useRef } from "react"
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import machine_1 from '../assets/machine_1.svg'
import Image__Com from "../Component/Image__Com";
import Bike_Ima_Com from "./Bike_Ima_Com";
import ma_1 from '../assets/ma_1.png'
import ma_2 from '../assets/ma_2.png'
import ma_3 from '../assets/ma_3.png'
import ma_4 from '../assets/ma_4.png'



const BIke_Image = function ({ data, nm }) {


  const data_good = [
    {
      image: ma_2,
      title: '250W 강한 모터',
      sub: '250w 리어 허브 모터는 가파른 언덕을 질주하는 것을 두려워하지 않게 해줍니다. 사용자는 이 모터를 통해 손쉽게 언덕을 오를수 있게 도와줍니다.어시스트 기능 및 시스템에는 3가지가 있습니다. 0-무어시스트 모드, 1-페달 어시스트 모드, 2-페달 + 스로틀 어시스트 모드, 3-스로틀 어시스트 모드, 3-스로틀 어시스트 모드의 70-90%, 모트'
    },
    {
      image: ma_1
      ,
      title: '긴 링과 긴 수명',
      sub: 'HIMOC26 MAX의 특징은 모터와 컨트롤러의 작동 시스템에 있습니다. 작은 전류로 큰동력의 폭발을 생성하며  동시에 저온 작동을 유지할 수 있어 모터와 배터리의 수명을 크게 향상시킬 뿐만 아니라 승차 효율과 속도를 향상시킬 수 있습니다.'
    },
    {
      image: ma_3,
      title: '강력한 배터리',
      sub: '52량 18650 자동차급 고출력 배터리를 사용해 전류가 안정적이고 강력하며, 100km까지 달릴 수 있어 일상 혹은 출퇴근을 하기에 충분합니다. 배터리는 탈 부착식이며 키 잠금 설계가 적용돼 배터리 도난 위험을 방지할 수 있습니다.'

    }
    , {
      image: ma_4,
      title: '안전한 운전',
      sub: '프론트 및 리어 기계식 디스크 브레이크가 있어 브레이크에 약간의 압력이 가해지면 반응성이 뛰어나고 안전하고 신뢰할 수 있는 제동 거리를 줄일 수 있습니다. 동시에 손상이 쉽지 않은 CST 타이어는 튼튼하고 내구성이 뛰어납니다.'
    }


  ]

  const [num, setnum] = useState(0);

  const Ref = useRef(null);

  const RRef = useRef(null);

  const gogo = function () {
    var hey = window.innerWidth * 0.8 * -1
    if (num > 3) {
      setnum(0);
    }
    if (num < 0) {
      setnum(3);
    }
    return {
      width: window.innerWidth * 0.8 * 4,
      height: '100%',
      backgroundColor: 'pink',
      display: 'flex',
      transform: `translateX(${hey * num}px)`,
      transition: `transform 0.5s ease-in`,
      flexDirection: 'row'
    }
  }



  return (


    <>
      <div className='first-main-11'>
        <div
          ref={RRef}
          style={{

            width: '100%',

          }}
          className='first-main-sub1'>
          <AiOutlineRight
            onClick={() => {
              setnum((el) => el + 1)
            }}
            className='arrow'
            style={{
              color: 'white',
              zIndex: 2

            }}
          ></AiOutlineRight>


          <div style={gogo()}
          >


            {
              data_good.map((el, index) => {
                return <Bike_Ima_Com data={el} key={index}></Bike_Ima_Com>
              })}






          </div>


        </div>

      </div>





    </>
  )

}

export default BIke_Image