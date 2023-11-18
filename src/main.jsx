import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "contact",
        element: (
          <div>
            <h1>afdasdf</h1>
          </div>
        ),
      },
      {
        path: "about",
        element: (
          <div>
            <h1>Halaman About</h1>
          </div>
        ),
      },
    ],
  },
  
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
