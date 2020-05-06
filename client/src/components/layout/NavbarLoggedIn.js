import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import AilmentForms from "../dashboard/AilmentForms"



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {

    const onLogoutClick = e => {
        e.preventDefault();
        localStorage.clear()
        props.logoutUser();
      };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
        <AilmentForms/>
        <li className="nav-item">
       
            <Link
              to="/"
              className= {window.location.pathname === "/about" ? "nav-link active" : "nav-link" }
            >
            </Link>
          </li>
          <li className="nav-item">
          </li>


          <li className="nav-item">

          </li>
          <Link         style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              to="/"
              className= {window.location.pathname === "/about" ? "nav-link active" : "nav-link" }
            >
              Home
            </Link>

          <li className="nav-item">
          <button 
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3 logoutBtn"
            >
              Logout
            </button>
          </li>

        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    auth: state.auth
  });

  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Navbar);
