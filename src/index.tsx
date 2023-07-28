import React from "react";
import ReactDOM, { hydrateRoot }  from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();

const contariner = document.getElementById("root") as HTMLElement; 
hydrateRoot(contariner,<App/>)