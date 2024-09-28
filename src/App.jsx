import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import "./index.css";
import Members from "./pages/members/Members";
import About from "./pages/about/About";
import Activities from "./pages/activities/Activities";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function Home() {
  return (
    <div className="App bg-taws">
      <div className="Contenedor w-10/12 mx-auto">
        <Navbar item="inicio" />
        <Main />
        <Sections />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/miembros" element={<Members />} />
          <Route path="/eventos" element={<Activities />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
