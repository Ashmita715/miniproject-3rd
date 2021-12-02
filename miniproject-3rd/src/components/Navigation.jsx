import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Udaan
               <img src="https://cdn1.vectorstock.com/i/1000x1000/40/90/flying-bird-logo-design-template-dove-pigeon-vector-34114090.jpg"
               width="50"
               height="50"
               alt=""/>
            </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Employers list
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Search Jobs
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register"
                activeClassname="selectedLink"
                strict>
                  Register
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login"
                activeClassname="selectedLink"
                strict>
                  Login
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About"
                activeClassname="selectedLink"
                strict>
                  About
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Contact
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
