import React from "react";
import { Link } from "react-router-dom";
import Logo from "../imgs/logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="links">
          <Link className="link" to="/?car=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?car=technology">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?car=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?car=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?car=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?car=food">
            <h6>FOOD</h6>
          </Link>
          <span>Ahmed</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
