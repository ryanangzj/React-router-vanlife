import { Routes, Route, Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar-container">
      <Link className="navbar-header" to="/">
        #VANLIFE
      </Link>
      <div className="links-container">
        <Link className="navbar-link about-link" to="/about">
          About
        </Link>
        <Link className="navbar-link vans-link" to="/vans">
          Vans
        </Link>
      </div>
    </div>
  );
}
