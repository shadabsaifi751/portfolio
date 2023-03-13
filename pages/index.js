import React, { useEffect, useState } from "react";
import Head from 'next/head'
import Layout from '@/Components/common/Layout'
import Cursor from '@/Components/common/Cursor3';
import { gsap } from "gsap";
import { ThemeProvider } from 'styled-components';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LightTheme, DarkTheme,MetaData } from "@/content";
import Header from "@/Components/Home/Header";
import HeadSection from "@/Components/Home/HeadSection";
import { isBrowser } from "@/Components/common/isBrower";


const themes = {
  light: LightTheme,
  dark: DarkTheme,
};


const DEBOUNCE_TIME = 100;

export const isSmallScreen = () => document.body.clientWidth < 767;

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setisDesktop] = useState(true);

  let timer = null;

  // const debouncedDimensionCalculator = () => {
  //   clearTimeout(timer);
  //   timer = setTimeout(() => {
  //     const isDesktopResult =
  //       typeof window.orientation === "undefined" &&
  //       navigator.userAgent.indexOf("IEMobile") === -1;

  //     window.history.scrollRestoration = "manual";

  //     setisDesktop(isDesktopResult);
  //   }, DEBOUNCE_TIME);
  // };

  // React.useEffect(() => {
  //   debouncedDimensionCalculator();

  //   window.addEventListener("resize", debouncedDimensionCalculator);
  //   return () =>
  //     window.removeEventListener("resize", debouncedDimensionCalculator);
  // }, [timer])

  const [currentTheme, setCurrentTheme] = React.useState('dark');

  const themeToggler = () => {
    currentTheme === 'dark'
      ? setCurrentTheme('light')
      : setCurrentTheme('dark');
  };



  return (
    <>
      <Head>
        <title>{MetaData.title}</title>
      </Head>
      <ThemeProvider theme={themes[currentTheme]}>
        <Layout>
          <Cursor />
          <HeadSection themeToggler={themeToggler} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
