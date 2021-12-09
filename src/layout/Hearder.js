import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext); // values in usercontext stored in context var

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="mb-5 mt-1" light expand="md">
      <NavbarBrand>
        <Link
          to="/"
          className="logo"
          style={{
            textDecoration: "none",
            wordSpacing: "3px",
            letterSpacing: "1.5px",
          }}
        >
          GitFire App
        </Link>
      </NavbarBrand>
      <NavbarText className="username">
        {context.user?.email ? context.user.email : ""}
        {/* //extract user name from firebase API to display name in NAvBar */}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto me-4 " navbar>
          {context.user ? (
            <NavItem className="me-3">
              <NavLink
                className="navtext2"
                onClick={() => {
                  context.setUser(null);
                }}
              >
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem className="">
                <NavLink className="navtext1" tag={Link} to="/signup">
                  Signup
                </NavLink>
              </NavItem>
              <NavItem className="">
                <NavLink className="navtext2" tag={Link} to="/signin">
                  Signin
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
