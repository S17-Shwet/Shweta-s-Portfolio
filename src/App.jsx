// App.jsx
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <div className="main-content">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <footer class="portfooter">
        <p>
          © 2025 Shweta Nichal. 🌸 Blending artistry and logic with passion.
        </p>
      </footer>
    </div>
  );
}
