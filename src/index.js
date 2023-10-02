import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { VanList } from "./pages/VanList";
import {} from "./style.css";
import { Footer } from "./components/Footer";

import "./server";
import { VanDetail } from "./pages/VanDetail";

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
          <Route path="/vans" element={<VanList />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

root.render(<App />);
