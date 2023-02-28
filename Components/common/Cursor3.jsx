import { useEffect, useRef } from 'react';
import styles from "./Cursor.module.scss";
import { gsap, Linear } from "gsap";
import { isSmallScreen } from '@/pages';

const CURSOR_STYLES = {
    CURSOR: "fixed hidden bg-cyan-700 w-3 h-3 select-none pointer-events-none z-50",
    FOLLOWER: "fixed hidden h-10 w-10 select-none pointer-events-none z-40",
};

export default function Cursor3({ isDesktop }) {
    const cursor = useRef(null);
    const follower = useRef(null);

    const onHover = () => {
        gsap.to(cursor.current, {
            scale: 0.5,
            duration: 0.3,
        });
        gsap.to(follower.current, {
            scale: 3,
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

    useEffect(() => {
        if (isDesktop && !isSmallScreen()) {
            initCursorAnimation();
        }
    }, [cursor, follower, isDesktop]);

    return (
        <>
            <div
                ref={cursor}
                className={`${styles.Cursor} ${CURSOR_STYLES.CURSOR}`}
            ></div>
            <div
                ref={follower}
                className={`${styles.cursorFollower} ${CURSOR_STYLES.FOLLOWER}`}
            ></div>
        </>
    );
}
