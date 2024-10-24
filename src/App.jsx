import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Items from "./components/Items";
import Skills from "./components/Skills";
import Sertifikat from "./components/Sertifikat";
import Project from "./components/Project";
import Layanan from "./components/Layanan";
import Komit from "./components/Komit";
import Footer from "./components/Footer";
import AllProject from "./components/pages/AllProject";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personal from "./components/pages/Personal";
import Template from "./components/pages/Template";

function App() {
  return (
    <div className="w-full h-auto">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Skills />
                <Sertifikat />
                <Project />
                <Layanan />
                <Komit />
                <Items/>
                <Footer/>
              </>
            }
          />
          <Route path="/AllProject" element={<AllProject />} />
          <Route path="/Personal" element={<Personal />} />
          <Route path="/Template" element={<Template />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
