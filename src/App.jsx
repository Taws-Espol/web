import React from "react";
import "./App.css";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Sections from "./Components/Sections";
import Dots from "./Components/DotPattern";

function App() {
  return (
    <div className="App bg-taws">
      <Dots />
      <div className="Contenedor w-10/12 mx-auto">
        <Navbar item="inicio" />
        <Main />
        <Sections />
        <Footer />
      </div>
    </div>
  );
}

export default App;
