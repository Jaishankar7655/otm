import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Mehndisection from "./Components/Mehndisection.jsx";
import Header from "./Components/Header.jsx";
import Navbar from "./Components/Navbar.jsx";
import Shimmerefect from "./Components/Shimmerefect.jsx";
import Mendidetailed from "./Components/Mendidetailed.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
    <Header />
    <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
         <Route path="/mehndiservices" element={<Mehndisection />} />
         <Route path="/Shimmerefect" element={<Shimmerefect />} />
         <Route path="/Mendidetailed/:id" element={<Mendidetailed />} />

      </Routes>
    </Router>
  </StrictMode>
);
