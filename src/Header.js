import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

import logo from "./images/logo.jpeg";

function Header() {
  return (
    <Navbar
      bg="white"
      expand="lg"
      style={{
        boxShadow: "0 2px 20px -8px rgba(0,0,0,0.2)",
        zIndex: "100",
        padding: "1rem 2rem",
      }}
    >
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img className="logo" src={logo} alt="MB_GAYRİMENKUL_LOGO" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav style={{ alignItems: "center" }}>
            <Link className="header-link" to="/">
              Anasayfa
            </Link>
            <Link className="header-link" to="/ilanlar">
              İlanlar
            </Link>
            <Link className="header-link" to="/blog">
              Blog
            </Link>
            {/*<Link className="header-link" to="/hizmetler">
              Hizmetlerimiz
            </Link> */}
            <Link className="header-link" to="/hakkimizda">
              Hakkımızda
            </Link>
            <Link className="header-link" to="/iletisim">
              İletişim
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
