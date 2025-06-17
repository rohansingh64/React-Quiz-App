import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // for link or use some fn or file you need to import and from file export

// index.js first file to execute --> entry point

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
