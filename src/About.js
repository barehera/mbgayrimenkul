import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import "./About.css";

import image1 from "./images/house-1353389_1920.jpg";
import icon0 from "./icons/hand-shake-orange.svg";
import icon1 from "./icons/happy-orange.svg";
import icon2 from "./icons/house-orange.svg";
import icon3 from "./icons/like-orange.svg";
import icon4 from "./icons/mountain-orange.svg";
import icon5 from "./icons/star-orange.svg";
import Loader from "react-loader-spinner";

function About() {
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
          Hakkımızda
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
            Biz Kimiz?
          </h3>
          <hr
            style={{
              width: "4rem",
              backgroundColor: "orange",
              height: "2px",
              borderRadius: "20px",
            }}
          />
          <p style={{ color: "#282828", fontSize: "0.9rem" }}>
            Ticaret Bakanlığı Taşınmaz Ticareti Yetki Belgesine sahip,
            Gayrimenkul alanında faaliyet gösteren MB Gayrimenkul Danışmanlık,
            kurumsal ve profesyonel anlamda tüm tecrübesiyle sizlere hizmet
            vermekteyiz. Gayrimenkul ile ilgili taleplerinizi mümkün olan en
            kısa sürede, en iyi fiyat ve en sorunsuz şekilde sonuçlandırmak için
            mülkünüzün gerçek değerini tespit ediyor ve detaylı sonuç raporunu
            sizinle paylaşıyoruz.
          </p>
          <p style={{ color: "#282828", fontSize: "0.9rem" }}>
            Gayrimenkul yatırımcısının birinci hedefi yatırımını kazanca
            dönüştürmektir. MB Gayrimenkul Danışmanlığı, konusunda uzman ve
            eğitimli personeliyle, müşterilerinin sektörden yüksek karlar elde
            etmesini hedeflemiş ve bu hedefini yakalamıştır. Stratejik düşünme
            yeteneği olan, bölgesinin geleceği ve gerçekleri konusunda bilgiye
            ve öngörüye sahip uzman kadromuzun sunduğu yatırım fikirleri ile
            yüksek kazançlı işlere birlikte imza atmak için MB Gayrimenkul
            olarak sizleri ağırlamaktan ve tanışmaktan mutluluk duyarız.
          </p>
        </div>
        <div style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontSize: "1.4rem",
              color: "rgb(70,70,70)",
              textAlign: "start",
            }}
          >
            Misyonumuz
          </h3>
          <hr
            style={{
              width: "4rem",
              backgroundColor: "orange",
              height: "2px",
              borderRadius: "20px",
            }}
          />
          <p style={{ color: "#282828", fontSize: "0.9rem" }}>
            Gayrimenkul alanında uzmanlaştığımız tüm konularda hizmetlerin
            kalitesini yükselterek, çağdaş, güvenilir, müşteri haklarına
            saygılı, çalışanların eğitim ihtiyaçlarına katkıda bulunan,
            yenilikçi, pozitif değişimi kabul eden ve sürekli kendini
            geliştiren, farklı, yenilikçi ve güvenilir marka haline gelmek.
          </p>
        </div>
        <div style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontSize: "1.4rem",
              color: "rgb(70,70,70)",
              textAlign: "start",
            }}
          >
            Vizyonumuz
          </h3>
          <hr
            style={{
              width: "4rem",
              backgroundColor: "orange",
              height: "2px",
              borderRadius: "20px",
            }}
          />
          <p style={{ color: "#282828", fontSize: "0.9rem" }}>
            Konusunda Uzman, Eğitimli Danışmanlarımızla, Sektörde HEM ÖNCÜ HEM
            DE Gayrimenkullerinizin 1 numaralı Danışmanlık şirketi olmak.
          </p>
        </div>
        <div style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontSize: "1.4rem",
              color: "rgb(70,70,70)",
              textAlign: "start",
            }}
            id="neden-mb-gayrimenkul"
          >
            Neden MB Gayrimenkul?
          </h3>
          <hr
            style={{
              width: "4rem",
              backgroundColor: "orange",
              height: "2px",
              borderRadius: "20px",
            }}
          />
          <Row style={{ marginTop: "3rem" }}>
            <Col lg={4} md={6}>
              <Card className="about-card">
                <img src={icon0} alt="" className="about-icon" />
                <p className="about-card-title">Dürüstlük</p>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="about-card">
                <img src={icon1} alt="" className="about-icon" />
                <p className="about-card-title">Müşteri Memnuniyeti</p>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="about-card">
                <img src={icon2} alt="" className="about-icon" />
                <p className="about-card-title">Kapsamlı Hizmet</p>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="about-card">
                <img src={icon3} alt="" className="about-icon" />
                <p className="about-card-title">Güvenilirlik</p>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="about-card">
                <img src={icon4} alt="" className="about-icon" />
                <p className="about-card-title">Mesleki Deneyim</p>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="about-card">
                <img src={icon5} alt="" className="about-icon" />
                <p className="about-card-title">Sorumluluk</p>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default About;
