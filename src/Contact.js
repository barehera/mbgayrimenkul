import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import emailjs from "emailjs-com";
import image1 from "./images/phone-3594206_1920.jpg";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PinDropIcon from "@material-ui/icons/PinDrop";
import { useToasts } from "react-toast-notifications";
import "./Contact.css";
import Loader from "react-loader-spinner";

function Contact() {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  /*Email yollama functionu */
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4gcgprm",
        "template_hyqynw5",
        e.target,
        "user_cHkW9y5fssus6K4fw5YbX"
      )
      .then(() => {
        addToast("Mesajınız Başarıyla Tarafımıza Ulaşmıştır", {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      })
      .catch((err) => {
        addToast(err, {
          appearance: "error",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      });

    e.target.reset();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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
          İletişim
        </h3>
      </div>
      <Container fluid>
        <Container
          style={{
            padding: "4rem 0",
          }}
        >
          <Row className="contact-cards-container">
            <Col lg={4}>
              <Card className="contact-cards">
                <MailOutlineIcon
                  style={{
                    fontSize: "3rem",
                    color: "orange",
                    marginBottom: "1rem",
                  }}
                ></MailOutlineIcon>
                <p className="contact-card-titles">mbgayrimenkul39@gmail.com</p>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="contact-cards">
                <PinDropIcon
                  style={{
                    fontSize: "3rem",
                    color: "orange",
                    marginBottom: "1rem",
                  }}
                ></PinDropIcon>
                <p className="contact-card-titles">
                  Yıldırım Mahallesi, Değirmen Caddesi, No: 15/1C
                  <br />
                  <br /> Yol Tarifi Almak İçin
                  <a
                    href="https://goo.gl/maps/hf6gPzg3BPPUds6GA"
                    target="_blank"
                    style={{ marginLeft: "0.3rem", color: "orange" }}
                    rel="noreferrer"
                  >
                    Tıklayın
                  </a>
                </p>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="contact-cards">
                <CallIcon
                  style={{
                    fontSize: "3rem",
                    color: "orange",
                    marginBottom: "1rem",
                  }}
                ></CallIcon>

                <p className="contact-card-titles">0 552 830 3939</p>
                <p className="contact-card-titles">0 288 502 3839</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Contact;
