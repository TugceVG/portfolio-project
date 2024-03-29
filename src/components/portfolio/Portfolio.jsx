import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        // {
        //     id: "mobile",
        //     title: "Mobile App"
        // },
        {
            id: "design",
            title: "Design"
        },
        // {
        //     id: "branding",
        //     title: "Branding"
        // }
    ];

    useEffect(() => {
        switch (selected) {

            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "branding":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }

    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
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
                {data.map((item) => (
                    <div key={item.id} className="item">
                        {/* <img src={item.img} alt="" /> */}
                        {/* <img src={PF + "under_construction.png"} alt="" /> */}
                        <img src={PF + item.img} alt="" />
                        <h3>{item.title}</h3>
                    </div>))}
            </div>
        </div>
    )
}
