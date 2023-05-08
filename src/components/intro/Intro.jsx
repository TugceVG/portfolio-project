import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: ['JavaScript Developer', 'Front-End Developer'],
            startDelay: 600,
            backDelay: 1500,
            backSpeed: 60,
        });
    }, [])

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
