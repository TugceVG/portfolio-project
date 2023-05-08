import { useState } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sideBar = [
    { title: "Home", id: "#intro" },
    { title: "Portfolio", id: "#portfolio" },
    { title: "Works", id: "#works" },
    { title: "Testimonials", id: "#testimonials" },
    { title: "Contact", id: "#contact" }
  ]

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} sideBar={sideBar} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
