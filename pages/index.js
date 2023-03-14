import React, { useEffect, useState } from "react";
import Head from 'next/head'
import Layout from '@/Components/common/Layout'
import Cursor from '@/Components/common/Cursor3';
import { gsap } from "gsap";
import { ThemeProvider } from 'styled-components';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LightTheme, DarkTheme, MetaData } from "@/content";
import Header from "@/Components/Home/Header";
import HeadSection from "@/Components/Home/HeadSection";
import AboutUs from "@/Components/Home/AboutUs";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  return (
    <>
      <Head>
        <title>{MetaData.title}</title>
      </Head>
      <Layout>
        <Cursor />
        <HeadSection />
        <AboutUs/>
      </Layout>
    </>
  )
}
