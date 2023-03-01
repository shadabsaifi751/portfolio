import React from 'react'
// import styled from 'styled-components'
import styles from './switch.module.scss'

const Switch = ({ checkHandle, ChangeTheme }) => {
    return (
        <label
            for="toogleA"
            className="flex items-center cursor-pointer link"
        >
            <div className="relative">
                <input id="toogleA" type="checkbox" className={`sr-only ${styles.toggle}`} onChange={checkHandle} checked={ChangeTheme} />
                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div className={`${styles.dot} absolute w-6 h-6 bg-gray-600 rounded-full shadow -left-1 -top-1 transition`}></div>
            </div>
        </label>
    )
}

export default Switch