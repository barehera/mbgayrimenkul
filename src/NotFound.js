import React from "react";
import logo from "./images/logo.jpeg";
import { Link } from "react-router-dom";
import { Container, Image } from "react-bootstrap";

function NotFound() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "5rem",
      }}
    >
      <Image
        src={logo}
        style={{
          width: "100%",
          height: "20rem",
          objectFit: "contain",
          marginRight: "3.5rem",
        }}
      />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h5 style={{ color: "#282828", fontSize: "3rem", marginTop: "4rem" }}>
          Aradığınız Sayfa Bulunamadı.
        </h5>
        <h6 style={{ color: "orange", fontSize: "2rem" }}>
          Anasayfaya dönmek için
          <Link
            to="/"
            style={{
              color: "#282828",
              borderBottom: "1px solid black",
              marginLeft: "0.5rem",
              fontSize: "2rem",
            }}
          >
            tıklayınız.
          </Link>
        </h6>
      </Container>
    </Container>
  );
}

export default NotFound;

<div className="not-found">
  <img className="not-found-logo" src={logo} alt="" />
  <h5 className="not-found-error-title">404 Sayfa Bulunamadı.</h5>
  <h6 className="not-found-redirect-link">
    Anasayfaya dönmek için{" "}
    <Link to="/" className="not-found-link">
      tıklayınız.
    </Link>
  </h6>
</div>;
