import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import {} from "./style.css";
import { Footer } from "./components/Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

root.render(<App />);