import React from "react";
import { createRoot } from "react-dom/client";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { VanList, loader as vansLoader } from "./pages/Vans/VanList";
import { Layout } from "./components/Layout";
import { Error } from "./components/Error";

import "./server";
import { VanDetail, loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import {
  HostVanDetails,
  loader as hostVansDetailLoader,
} from "./pages/Host/HostVanDetail";
// import { HostVanInfo } from "./pages/Host/HostVanInfo";
import { HostVanPricing } from "./pages/Host/HostVanPricing";
import { HostVanPhotos } from "./pages/Host/HostVanPhotos";
// import { Dashboard } from "./pages/Host/Dashboard";
import { Income } from "./pages/Host/Income";
import { HostVans, loader as hostVansLoader } from "./pages/Host/HostVans";
import { Reviews } from "./pages/Host/Reviews";
import { HostLayout } from "./components/HostLayout";
import { Dashboard } from "./pages/Host/Dashboard";
import { HostVanInfo } from "./pages/Host/HostVanInfo";
import {
  Login,
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { requireAuth } from "./utils";

import {} from "./style.css";

localStorage.removeItem("loggedin");

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error />} element={<Layout />}>
      <Route index element={<Home />} />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="vans"
          element={<HostVans />}
          errorElement={<Error />}
          loader={hostVansLoader}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={hostVansDetailLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />
      </Route>

      <Route path="about" element={<About />} />

      <Route
        path="vans"
        element={<VanList />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={vanDetailLoader}
        errorElement={<Error />}
      />

      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

root.render(<App />);
