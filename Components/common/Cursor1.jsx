import { useState, useEffect, useRef } from 'react';
import {TweenMax} from 'gsap';
import styles from "./Cursor.module.scss"

export default function Cursor() {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    useEffect(() => {
        TweenMax.to({}, 0.016, {
            repeat: -1,
            onRepeat: () => {
                setPosX((prevPosX) => prevPosX + (mouseX - prevPosX) / 9);
                setPosY((prevPosY) => prevPosY + (mouseY - prevPosY) / 9);

                TweenMax.set(followerRef.current, {
                    css: {
                        left: posX - 12,
                        top: posY - 12,
                    },
                });

                TweenMax.set(cursorRef.current, {
                    css: {
                        left: mouseX,
                        top: mouseY,
                    },
                });
            },
        });
    }, [mouseX, mouseY, posX, posY]);


    const handleMouseMove = (e) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
    };
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])
    // console.log(mouseX,mouseY,"mouseX,mousey")

    const handleMouseEnter = () => {
        cursorRef.current.classList.add('active');
        followerRef.current.classList.add('active');
    };

    const handleMouseLeave = () => {
        cursorRef.current.classList.remove('active');
        followerRef.current.classList.remove('active');
    };


    return (
        <>
            <div className={styles.cursor} ref={cursorRef} />
            <div className={styles.cursorfollower} ref={followerRef} />
        </>
    );
}
