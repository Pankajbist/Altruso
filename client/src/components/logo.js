
import Image from 'next/image'
import React from 'react'
import Logo from '../../public/Altruso-logo.png'
export const CustomLogo=()=> {
  return (
    <div>
           <Image src={Logo} alt="logo"/>
    </div>
  )
}