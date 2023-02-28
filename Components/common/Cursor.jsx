import React, { useState } from 'react'
import { useEffect, useRef } from "react";
// import { gsap, Linear } from "gsap";
import styles from "./Cursor.module.scss";

import { motion } from "framer-motion"


const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

    useEffect(() => {
        const mousemove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
            console.log(e, "mousePosition")
        }
        window.addEventListener("mousemove", mousemove)
        return () => {
            window.removeEventListener("mousemove", mousemove)
        }
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16
        }
    }



    return (
        <motion.div
            className={styles.cursor}
            variants={variants}
            animate={cursorVariant}
        />
    );
}

export default Cursor;