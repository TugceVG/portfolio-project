import "./intro.scss";
import Typed from 'typed.js';
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(textRef.current, {
            strings: ['JavaScript Developer', 'ReactJS Developer'],
            typeSpeed: 70,
            loop: true,
            backSpeed: 60
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/photo.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There I'm</h2>
                    <h1>Tugce Vatansever Gunduz</h1>
                    <h3>Junior <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
