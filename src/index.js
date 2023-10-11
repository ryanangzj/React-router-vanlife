import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { VanList } from "./pages/Vans/VanList";
import { Layout } from "./components/Layout";

import "./server";
import { VanDetail } from "./pages/Vans/VanDetail";
import { HostVanDetails } from "./pages/Host/HostVanDetail";
// import { HostVanInfo } from "./pages/Host/HostVanInfo";
import { HostVanPricing } from "./pages/Host/HostVanPricing";
import { HostVanPhotos } from "./pages/Host/HostVanPhotos";
// import { Dashboard } from "./pages/Host/Dashboard";
import { Income } from "./pages/Host/Income";
import { HostVans } from "./pages/Host/HostVans";
import { Reviews } from "./pages/Host/Reviews";
import { HostLayout } from "./components/HostLayout";
import { Dashboard } from "./pages/Host/Dashboard";
import { HostVanInfo } from "./pages/Host/HostVanInfo";
import { NotFound } from "./pages/NotFound";

import {} from "./style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="about" element={<About />} />

          <Route path="vans" element={<VanList />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(<App />);
