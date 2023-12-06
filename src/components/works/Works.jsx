import { useState } from "react";
import "./works.scss";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "I have achieved a certificate from freeCodeCamp.com. During the program, I built several projects, which I have linked below. If you want to check them out, you can click on the projects link.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      picture: "responsiveWebDesign.png",
      link: "https://github.com/TugceVG/html-css",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Web Application",
      desc: "I have achieved a certificate from Kodluyoruz.org. During the program, I built several projects, which I have linked below. If you want to check them out, you can click on the projects link.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      picture: "frontendBootcamp.png",
      link: "https://github.com/TugceVG/kodluyoruz-graduation-project-react-weather-app/tree/first-react-app",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "ReactJS",
      desc: "I have achieved a certificate from BTK Akademi. During the program, I built several projects, which I have linked below. If you want to check them out, you can click on the projects link.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      picture: "./assets/react-BTK.png",
      link: "https://github.com/TugceVG/playground-reactjs",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((dataItem) => (
          <div key={dataItem.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={dataItem.icon} alt="" />
                  </div>
                  <h2>{dataItem.title}</h2>
                  <p>{dataItem.desc}</p>
                  <span>
                    <a href={dataItem.link} target="_blank">
                      Projects
                    </a>
                  </span>
                </div>
              </div>
              <div className="right">
                {/* <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" alt="" /> */}
                <img src={PF + dataItem.picture} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
