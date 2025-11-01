import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import './index.css'; // or './App.css'

import reportWebVitals from "./reportWebVitals.js"; // <-- Add this import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Optional: measure performance
reportWebVitals();
