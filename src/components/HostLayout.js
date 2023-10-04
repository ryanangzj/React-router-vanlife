import { Dashboard } from "../pages/Host/Dashboard";
import { NavLink, Outlet } from "react-router-dom";

export function HostLayout() {
  return (
    <div>
      <nav className="host-nav">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="."
          end
          element={<Dashboard />}
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
