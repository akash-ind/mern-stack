import React, { Component } from "react";
import { Link } from "react-router-dom";
import headerimg from "./header.png";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="navbar-header">
                <Link to="/" className="navbar-brand"><img src={headerimg}
                 style={{
                  margin: "-0.5rem auto auto auto",
                  padding:"0",
                  height:"inherit",
                  width: "140px",
                  
                }}
                /></Link>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="navbar navbar-nav">
                <li className="navbar-item">
                  <Link to="/" className="listing-btns">Listings</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="listing-btns">Create Listing</Link>
                </li>
              </ul>
            </div>
            <Link
                to="/register"
                style={{
                  fontWeight: "bold",
                  width: "7rem",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  display: "flex",
                  flexFlow: "column wrap",
                  justifyContent: "center"
                }}
                className="btn btn-large waves-effect waves-light hoverable white-text blue accent-2.5"
              >
                Register
            </Link>
            <Link
                to="/login"
                style={{
                  fontWeight: "bold",
                  width: "7rem",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  display: "flex",
                  flexFlow: "column wrap",
                  justifyContent: "center",
                  marginLeft: "0.5rem"
                }}
                className="btn btn-large waves-effect hoverable white black-text"
              >
                Log In
            </Link>
      </nav>
    );
  }
}export default Navbar;