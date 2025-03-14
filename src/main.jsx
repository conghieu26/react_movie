import React from "react";
import ReactDOM from "react-dom/client";
//ROUTER
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";

// CSSS
import "./config/style/font-family.css";
import "./config/style/main.css";
import "./config/style/modern-nomalize.css";
import "./config/style/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
