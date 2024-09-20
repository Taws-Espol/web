import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Navigate } from "react-router-dom";
import Members from "./pages/members/Members";
import About from "./pages/about/About";
import Activities from "./pages/activities/Activities";

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
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
