


import React, { useState, useEffect, useContext, useRef } from "react"

import { Link } from "react-router-dom"
const Nav_Com = function ({ data, nm }) {




 const Ref = useRef(null)


 return (


  <Link

   style={{
    textDecoration: 'none',
    color: 'black'
   }}
   to={`/product/${data}`}>
   <div
    onMouseOver={() => {

     Ref.current.style.background = '#E9E9E9';
     Ref.current.style.cursor = 'pointer'
     nm(true);


    }}
    onMouseOut={() => {
     Ref.current.style.background = 'white';

     nm(false);


    }}

    ref={Ref}
    style={{
     width: '100%',
     height: '40px',

     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',

    }}>

    <p
     className="main-text-text"

    >{data}</p>

   </div>
  </Link>
 )

}

export default Nav_Com
