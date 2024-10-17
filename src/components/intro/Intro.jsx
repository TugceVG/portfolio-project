import "./intro.scss";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Intro() {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["JavaScript", "ReactJS", "Web"],
      typeSpeed: 70,
      loop: true,
      backSpeed: 60,
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
          {/* <img src={"assets/photo.png"} alt="" /> */}
          <img src={PF + "photo.png"} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There I'm</h2>
          <h1>Tugce Vatansever Gunduz</h1>
          <h3>
            <span ref={textRef} /> <span>Developer</span>
          </h3>
          <div className="wrapperDetails">
            <h4>Additionally,</h4>
            <hr />
            {/* <div className="detail">
              <a href="assets/TugceVGresume(En).pdf" download>
                <SimCardDownloadIcon className="detailIcon">
                  CV
                </SimCardDownloadIcon>
              </a>
              <span className="detailText">Download my CV as PDF</span>
            </div> */}

            <div className="detail">
              <a
                href="https://www.linkedin.com/in/tugcevatansevergunduz/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className="detailIcon" />
              </a>
              <span className="detailText">
                To reach out to me, you can visit my LinkedIn profile.
              </span>
            </div>

            <div className="detail">
              <a
                href="https://github.com/TugceVG"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className="detailIcon" />
              </a>
              <span className="detailText">
                You can explore my projects and find more details by visiting my
                GitHub address.
              </span>
            </div>
          </div>
        </div>
        <a href="#portfolio" className="downIcon">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
