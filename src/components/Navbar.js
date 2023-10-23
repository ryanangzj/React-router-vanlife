import { NavLink } from "react-router-dom";

export function Navbar() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <div className="navbar-container">
        <NavLink className="navbar-header" to="/">
          #VANLIFE
        </NavLink>
        <div className="links-container">
          <NavLink
            className="navbar-link host-link"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/host"
          >
            Host
          </NavLink>
          <NavLink
            className="navbar-link about-link"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="navbar-link vans-link"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/vans"
          >
            Vans
          </NavLink>
          <NavLink to="login" className="navbar-link login-link">
            <img src="images/Icon.png" className="login-icon" alt="" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
