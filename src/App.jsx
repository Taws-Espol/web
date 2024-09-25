import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import "./index.css";
import { Navigate } from "react-router-dom";
import Members from "./pages/members/Members";
import About from "./pages/about/About";
import Activities from "./pages/activities/Activities";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

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

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/miembros",
      element: <Members />,
    },
    {
      path: "/eventos",
      element: <Activities />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/*",
      element: <Navigate to="/" />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
