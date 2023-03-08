import React, { useEffect, useState } from 'react'
import styled, { keyframes } from "styled-components"
import styles from './HeadSection.module.scss';
import Image from 'next/image'
import { Inter } from 'next/font/google';
import Typer from "../common/Typer"


const inter = Inter({ subsets: ['latin'] })

const SectionWrap = styled.main`
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.fontColorHeader};
`;



const HeadSection = () => {

    return (
        <SectionWrap className={styles.main}>
            <h1 className={`link ${styled.heading}`}>Softwere Engineer</h1>
            <Typer
                className="mt-20 text-3xl"
                heading="I"
                dataText={[
                    'Design Creative Things.',
                    'Develop New things.',
                    'am a Softwere engineer.'
                ]}
            />
        </SectionWrap>
    )
}

export default HeadSection