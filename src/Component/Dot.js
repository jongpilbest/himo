


import React, { useState, useEffect, useContext, useRef } from "react"

import { AiFillTwitterCircle, AiTwotoneCheckCircle } from "react-icons/ai";
const Dot = function ({ click, data, cor }) {
 var [hei, sethei] = useState(50);
 var [col, setcol] = useState('white'
 )

 useEffect(() => {
  if (data == 1) {
   sethei(57)

  }
  else if (data == 2) {
   sethei(64);
  }


 }, [])

 useEffect(() => {
  if (data == cor) {

   setcol('#A7A7A7')
  }
  else {
   setcol('white')
  }
 })

 return (
  <>
   <AiTwotoneCheckCircle
    onClick={() => click(data)}

    style={{
     position: 'absolute',
     top: `${hei}%`,
     width: '13px',
     height: '13px',
     right: '20px',
     color: col
    }}
   ></AiTwotoneCheckCircle>
  </>
 )

}

export default Dot
