import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "desing",
            title: "Desing"
        },
        {
            id: "branding",
            title: "Branding"
        }
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item, id) => (
                    <PortfolioList
                        key={item.id}
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/weatherApp2.png" alt="" />
                    <h3>Weather Forecasting App</h3>
                </div>
                <div className="item">
                    <img src="assets/weatherApp.png" alt="" />
                    <h3>Weather Forecasting App</h3>
                </div>
                <div className="item">
                    <img src="assets/weatherApp.png" alt="" />
                    <h3>Weather Forecasting App</h3>
                </div>
                <div className="item">
                    <img src="assets/weatherApp.png" alt="" />
                    <h3>Weather Forecasting App</h3>
                </div>
                <div className="item">
                    <img src="assets/weatherApp.png" alt="" />
                    <h3>Weather Forecasting App</h3>
                </div>
                <div className="item">
                    <img src="assets/weatherApp.png" alt="" />
                    <h3>Weather Forecasting App</h3>
                </div>
            </div>
        </div>
    )
}
