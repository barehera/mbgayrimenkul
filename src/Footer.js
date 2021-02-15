import React from "react";
import { useStateValue } from "./contexts/StateProvider";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import firebase from "./firebase";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PinDropIcon from "@material-ui/icons/PinDrop";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const [{ user }] = useStateValue();

  return (
    <>
      <Jumbotron
        fluid
        style={{
          backgroundColor: "#282828",
          marginBottom: "0",
        }}
      >
        <Container>
          <Row>
            <Col
              style={{
                marginBottom: "2rem",
              }}
              lg={3}
            >
              <h3
                style={{
                  color: "#fff",
                  fontSize: "1.1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid lightgray",
                  marginBottom: "1rem",
                }}
              >
                İletişim
              </h3>
              <div
                style={{
                  display: "flex",
                  marginBottom: "1rem",
                }}
              >
                <PinDropIcon
                  style={{
                    fontSize: "1.5rem",
                    color: "orange",
                    marginRight: "1rem",
                  }}
                ></PinDropIcon>
                <p style={{ color: "#fff", fontSize: "0.8rem" }}>
                  Yıldırım Mahallesi, Değirmen Caddesi, No: 15/1C
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  marginBottom: "1rem",
                }}
              >
                <MailOutlineIcon
                  style={{
                    fontSize: "1.5rem",
                    color: "orange",
                    marginRight: "1rem",
                  }}
                ></MailOutlineIcon>
                <p style={{ color: "#fff", fontSize: "0.8rem" }}>
                  mbgayrimenkul39@gmail.com
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  marginBottom: "1rem",
                }}
              >
                <CallIcon
                  style={{
                    fontSize: "1.5rem",
                    color: "orange",
                    marginRight: "1rem",
                  }}
                ></CallIcon>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "0.8rem",
                  }}
                >
                  0 552 830 3939 - 0 288 502 3839
                </p>
              </div>
            </Col>

            <Col
              lg={3}
              style={{
                marginBottom: "2rem",
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontSize: "1.1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid lightgray",
                  marginBottom: "1rem",
                }}
              >
                Kurumsal
              </h3>
              <Link to="/hakkimizda" className="footer-link-item">
                <p>Biz Kimiz?</p>
              </Link>
              <Link to="/hakkimizda" className="footer-link-item">
                <p>Misyon, Vizyon</p>
              </Link>
              <Link to="/hakkimizda" className="footer-link-item">
                <p>Neden MB Gayrimenkul</p>
              </Link>
            </Col>
            <Col lg={3} style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  color: "#fff",
                  fontSize: "1.1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid lightgray",
                  marginBottom: "1rem",
                }}
              >
                Hizmetlerimiz
              </h3>
              <Link to="/hizmetler" className="footer-link-item">
                <p>Alım / Satım Aracılık Hizmetleri</p>
              </Link>
              <Link to="/hizmetler" className="footer-link-item">
                <p>Satış Sonrası Hizmetler</p>
              </Link>
              <Link to="/hizmetler" className="footer-link-item">
                <p>Portföy Yönetimi</p>
              </Link>
              <Link to="/hizmetler" className="footer-link-item">
                <p>Kiralama Hizmetleri</p>
              </Link>
              <Link to="/hizmetler" className="footer-link-item">
                {" "}
                <p>Ekspertiz Hizmetleri</p>
              </Link>
              <Link to="/hizmetler" className="footer-link-item">
                <p>Gayrimenkul Pazarlama</p>
              </Link>
            </Col>
            <Col
              lg={3}
              style={{
                marginBottom: "2rem",
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontSize: "1.1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid lightgray",
                  marginBottom: "1rem",
                }}
              >
                Sosyal Medya Hesaplarımız
              </h3>
              <InstagramIcon
                className="footer-icons"
                style={{
                  color: "orange",
                  fontSize: "2rem",
                  marginRight: "0.5rem",
                }}
              ></InstagramIcon>
              <FacebookIcon
                className="footer-icons"
                style={{
                  color: "orange",
                  fontSize: "2rem",
                }}
              ></FacebookIcon>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Jumbotron
        fluid
        style={{
          backgroundColor: "#202020",
          marginBottom: "0",
          padding: "1.5rem",
        }}
      >
        <Container>
          <Row style={{ display: "flex", alignItems: "center" }}>
            <Col lg={10} style={{ color: "lightgray", fontSize: "0.7rem" }}>
              Copyright &copy; MB Gayrimenkul. Bütün Hakları Saklıdır.
            </Col>
            <Col
              lg={2}
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {user ? (
                <button
                  style={{
                    textDecoration: "none",
                    color: "lightgray",
                    fontSize: "0.7rem",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                  onClick={() => firebase.auth().signOut()}
                >
                  Çıkış Yap
                </button>
              ) : (
                <Link
                  style={{
                    textDecoration: "none",
                    color: "lightgray",
                    fontSize: "0.7rem",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                  to="/admin-giris"
                >
                  Giriş Yap
                </Link>
              )}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Footer;
