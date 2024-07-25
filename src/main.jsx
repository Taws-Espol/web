import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Members from "./pages/members/Members";
import About from "./pages/about/About";
import Events from "./pages/events/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/miembros",
    element: <Members />,
  },
  {
    path: "/eventos",
    element: <Events />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
