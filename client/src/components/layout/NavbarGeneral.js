import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarGeneral() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
        <li className="nav-item">

            <Link
              to="/"
              className= {window.location.pathname === "/about" ? "nav-link active" : "nav-link" }
            >
                Home
            </Link>
          </li>
  

          <li className="nav-item">
            <Link
               to="/dashboard"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Dashboard
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default NavbarGeneral;