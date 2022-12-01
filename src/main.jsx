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
    path: "/proyectos",
    element: <Projects/>,
  },
  {
    path: "/*",
    element: <Navigate to="/"/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
