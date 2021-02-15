import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";

import image1 from "./images/house-1407562_1920.jpg";
import icon0 from "./icons/method-draw-image.svg";
import icon1 from "./icons/method-draw-image (1).svg";
import icon2 from "./icons/method-draw-image (2).svg";
import icon3 from "./icons/method-draw-image (3).svg";
import icon4 from "./icons/method-draw-image (4).svg";
import icon5 from "./icons/method-draw-image (5).svg";
import Loader from "react-loader-spinner";

function Hizmetler() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (loading) {
    return (
      <Loader
        type="BallTriangle"
        color="#F49D12"
        height={100}
        width={100}
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Loader>
    );
  }
  return (
    <>
      <Header></Header>
      <div
        style={{
          backgroundColor: "black",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <img
          src={image1}
          alt=""
          style={{
            width: "100%",
            height: "17rem",
            objectFit: "cover",
            opacity: "0.3",
          }}
        />
        <h3
          style={{
            position: "absolute",
            color: "white",
            fontSize: "1.5rem",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          Hizmetler
        </h3>
      </div>
      <Container style={{ padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontSize: "1.4rem",
              color: "rgb(70,70,70)",
              textAlign: "start",
            }}
          >
            Hizmetlerimiz
          </h3>
          <hr style={{ width: "12rem", backgroundColor: "orange" }} />
          <p style={{ color: "#282828", fontSize: "0.9rem" }}>
            Konutlar, Villalar, Bürolar, işyeri ve alışveriş merkezleri, Eğitim,
            Spor ve Sağlık tesisleri, Arazi ve arsalar, Sanayi arsa ve
            tesisleri, Çiftlik, Bağ, Bahçe, Turizm ve konaklama tesisleri,
            Oteller, Benzin istasyonları gibi gayrimenkul projelerinin piyasa ve
            çevre koşullarını analiz ederek değerleme standartları çerçevesinde
            analiz ve raporlama hizmetinde bulunmak. Satış ve Kiralama sürecini
            en hızlı şekilde sonuçlandırmak.
          </p>
          <Row style={{ marginTop: "3rem" }}>
            <Col lg={4} md={6}>
              <Card className="about-card">
                <img src={icon0} alt="" className="about-icon" />
                <p className="about-card-title">ARACILIK HİZMETLERİ</p>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="about-card">
                <img src={icon1} alt="" className="about-icon" />
                <p className="about-card-title">SATIŞ SONRASI HİZMETLER</p>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="about-card">
                <img src={icon2} alt="" className="about-icon" />
                <p className="about-card-title">PORTFÖY YÖNETİMİ</p>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="about-card">
                <img src={icon3} alt="" className="about-icon" />
                <p className="about-card-title">KİRALAMA HİZMETLERİ</p>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="about-card">
                <img src={icon4} alt="" className="about-icon" />
                <p className="about-card-title">EKSPERTİZ HİZMETLERİ</p>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="about-card">
                <img src={icon5} alt="" className="about-icon" />
                <p className="about-card-title">GAYRİMENKUL PAZARLAMA</p>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Hizmetler;
