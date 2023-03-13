import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from "styled-components"
import styles from './HeadSection.module.scss';
import Image from 'next/image'
import { Inter } from 'next/font/google';
import Typer from "../common/Typer"
import Header from './Header';


const inter = Inter({ subsets: ['latin'] })

const SectionWrap = styled.main`
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.fontColorHeader};
`;



const HeadSection = ({themeToggler}) => {
    const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    let letters =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
    letters = letters.split("");

    // Setting up the columns
    const fontSize = 10;
    const columns = canvas.width / fontSize;

    // Setting up the drops
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Setting up the draw function
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#0f0";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    };

    // Loop the animation
    const intervalId = setInterval(draw, 33);

    // Cleanup function to stop the animation on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

    return (
        <SectionWrap className={styles.main}>
            <Header themeToggler={themeToggler}/>
            <canvas ref={canvasRef} />
            <h1 data-text="Hi 👋 I'm Mohd Shadab saifi" className={`link ${styles.glitch} ${styled.heading}`}>Hi 👋 I'm Mohd Shadab saifi</h1>
            <Typer
                className="mt-20 text-3xl"
                heading="I"
                dataText={[
                    'am a Softwere engineer',
                    'develop modern frontend apps',
                    'design and develop things',
                    'design dynamic user experience',
                    'am a problem solver'
                ]}
            />
        </SectionWrap>
    )
}

export default HeadSection