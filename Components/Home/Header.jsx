import React, { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google';
import Switch from '../common/Switch';
import Logo from "../Assects/Logo.svg"
// import {Components as Logo} from "../Assects/Logo.svg"
// import {HeaderWrap} from './Header.module.js';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  background-color: ${(props) => props.theme.backgroundColor};
`



const Header = ({ themeToggler }) => {
  const [ChangeTheme, setChangeTheme] = useState(false);

  const checkHandle = (e) => {
    setChangeTheme(!ChangeTheme)
    themeToggler()
  }
  return (
    <HeaderWrap className={`sticky top-0 left-0 py-3 z-40 w-full backdrop-blur h-full flex-none transition-colors duration-500 lg:z-50`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <div className='flex justify-between items-center'>
          <div className="Logo w-16">
            {
              ChangeTheme ? (
                <Image
                  src={Logo}
                  className="max-w-full"
                  height={40}
                  width={40}
                  alt="Follow us on Twitter"
                />
              ) : (
                <Image
                  src={Logo}
                  className="max-w-full"
                  height={40}
                  width={40}
                  alt="Follow us on Twitter"
                />

              )
            }
          </div>
          <div>
            <Switch checkHandle={checkHandle} ChangeTheme={ChangeTheme} />
          </div>
        </div>
      </div>
    </HeaderWrap>
  )
}

export default Header