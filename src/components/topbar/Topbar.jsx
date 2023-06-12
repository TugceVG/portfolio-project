import "./topbar.scss";
import { Mail } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">TVG.</a>
                    {/* <div className="itemContainer">
                        <Person className="icon" />
                        <span>+352 691 171 791</span>
                    </div> */}
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/tugcevatansevergunduz/" target="_blank" rel="noreferrer"><LinkedInIcon className="icon" /></a>
                        <a href="https://github.com/TugceVG" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
                        <a href="mailto:tugcevatansever91@gmail.com"><Mail className="icon" /></a>
                        {/* <span>tugcevatansever91@gmail.com</span> */}
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
