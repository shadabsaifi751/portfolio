import React, { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google';
import Logo from "../Assects/Logo.svg"
import styles from "./Header.module.scss"


const Header = () => {

  const [open,setOpen] = useState(false)

  const toggle =()=>{
    setOpen(!open)
  }

  return (
    <header className={`fixed top-0 left-0 py-3 bg-transparent z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 bg-gradient-to-b from-gray-900 to-transparent`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <div className='flex justify-between items-center'>
          <div className="Logo w-16">
            <Image
              src={Logo}
              className="max-w-full"
              height={50}
              width={50}
              alt="Logo"
            />
          </div>
          <div className={`${styles.humbargar} link ${open ? `${styles.isActive}` : ""}`} onClick={toggle}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
          
        </div>
      </div>
      
    </header>
  )
}

export default Header