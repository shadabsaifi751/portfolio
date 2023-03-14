import React, { useEffect, useRef, useState } from 'react';
import styles from "./Cursor.module.scss";
import { gsap, Linear } from "gsap";
import { isBrowser } from './isBrower';

const CURSOR_STYLES = {
    CURSOR: "fixed hidden select-none pointer-events-none z-50",
    FOLLOWER: "fixed hidden h-10 w-10 select-none pointer-events-none z-40",
};

export default function Cursor3({ }) {
    const cursor = useRef(null);
    const follower = useRef(null);

    const onHover = () => {
        gsap.to(cursor.current, {
            scale: 0.3,
            duration: 0.3,
        });
        gsap.to(follower.current, {
            scale: 2,
            duration: 0.3,
        });
    };

    const onUnhover = () => {
        gsap.to(cursor.current, {
            scale: 1,
            duration: 0.3,
        });
        gsap.to(follower.current, {
            scale: 1,
            duration: 0.3,
        });
    };

    const moveCircle = (e) => {
        gsap.to(cursor.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: Linear.easeNone,
        });
        gsap.to(follower.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: Linear.easeNone,
        });
    };

    const initCursorAnimation = () => {
        follower.current.classList.remove("hidden");
        cursor.current.classList.remove("hidden");
        document.addEventListener("mousemove", moveCircle);
        document.querySelectorAll(".link").forEach((el) => {
            el.addEventListener("mouseenter", onHover);
            el.addEventListener("mouseleave", onUnhover);
        });
    };

    isBrowser() && React.useLayoutEffect(() => {
        initCursorAnimation();
    }, [cursor, follower]);

    const [width, setWidth] = useState({
        width: undefined
    });

    const Resizehandle = () => {
        setWidth({
            width: window.innerWidth
        })
    }

    useEffect(() => {
        Resizehandle();
        window.addEventListener("resize", Resizehandle)
        return () => window.addEventListener("resize", Resizehandle)
    })

    return (
        <>
            <div
                ref={cursor}
                className={`${styles.Cursor} ${CURSOR_STYLES.CURSOR} ${width.width < 768 ? "none" : ""}`}
            ></div>
            <div
                ref={follower}
                className={`${styles.cursorFollower} ${width.width < 768 ? "none" : ""} ${CURSOR_STYLES.FOLLOWER}`}
            ></div>
        </>
    );
}
