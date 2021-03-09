import React from "react";

import { Link, useLocation } from "react-router-dom";

import navLogo from "../../assets/e-commerce-white.png";

import { Badge, IconButton } from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";

import "./navbar.style.css";

const Navbar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="navbar-menu">
        <h3 className="navbar-title">Web Shop</h3>
        <div className="navbar-image">
          <Link to="/">
            <img className="img" src={navLogo} alt="Logo" />
          </Link>
        </div>
        {location.pathname === "/" && (
          <div className="buttons">
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show Cart Items"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
