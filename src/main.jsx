import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate
} from "react-router-dom";
import App from './App'
import './index.css';
import Members from './Pages/Members/Members';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import Events from './Pages/Events/Events';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/miembros",
    element: <Members/>,
  },
  {
    path: "/eventos",
    element: <Events/>
  },
  // {
  //   path: "/proyectos",
  //   element: <Projects/>,
  // },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/*",
    element: <Navigate to="/"/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
