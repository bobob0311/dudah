import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <link
      href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
      rel="stylesheet"
    ></link>
    <App />
  </StrictMode>
);
