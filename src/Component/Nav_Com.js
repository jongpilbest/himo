


import React, { useState, useEffect, useContext, useRef } from "react"

import { Link } from "react-router-dom"
const Nav_Com = function ({ data, nm, gog }) {


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
    style={{
     width: '100%',
     height: '40px',
     transform: 'translateY(-20%)',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',


    }}



    ref={Ref}
   >

    <p
     className={gog == 0 ? 'first-text' : "main-text-text"}


    >{data}</p>

   </div>
  </Link>
 )

}

export default Nav_Com
