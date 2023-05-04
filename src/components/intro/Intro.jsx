import "./intro.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Intro() {
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
                    <h3>Junior <span>Front-End Developer</span></h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDownIcon />
                </a>
            </div>
        </div>
    )
}
