import React from 'react'
import styled from 'styled-components';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image'
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] })

const SectionWrap = styled.main`
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.fontColorHeader};
`;

const Section = () => {
    return (
        <SectionWrap className={styles.main}>
            <div className={styles.description}>
                <p className="">
                    Get started by editing&nbsp;
                    <code className={styles.code}>pages/index.js</code>
                </p>
                
            </div>
        </SectionWrap>
    )
}

export default Section