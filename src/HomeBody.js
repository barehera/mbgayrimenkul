import React, { useEffect, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./HomeBody.css";
import Header from "./Header";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import firebase from "./firebase";
import image2 from "./images/metin-nobg.png";

import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useStateValue } from "./contexts/StateProvider";

import imagegiris1 from "./images/house-1477041_1280.jpg";
import imagegiris2 from "./images/hills-615429_1920.jpg";
import imagegiris3 from "./images/architecture-3121009_1920.jpg";
import logo from "./images/logo.jpeg";

import Loader from "react-loader-spinner";

import icon0 from "./icons/method-draw-image.svg";
import icon1 from "./icons/method-draw-image (1).svg";
import icon2 from "./icons/method-draw-image (2).svg";
import icon3 from "./icons/method-draw-image (3).svg";
import icon4 from "./icons/method-draw-image (4).svg";
import icon5 from "./icons/method-draw-image (5).svg";

import NumberFormat from "react-number-format";
import WeekendIcon from "@material-ui/icons/Weekend";
import DomainIcon from "@material-ui/icons/Domain";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import HomeIcon from "@material-ui/icons/Home";

function HomeBody() {
  const [{ adds }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [isThereAdds, setIsThereAdds] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const getAdds = () => {
      const ref = firebase
        .firestore()
        .collection("Adds")
        .orderBy("date", "desc");
      ref.onSnapshot((item) => {
        let items = [];
        item.forEach((doc) => {
          items.push({ id: doc.id, data: doc.data() });
        });
        dispatch({
          type: "SET_ADDS",
          adds: items,
        });
      });
    };
    getAdds();
    console.log(adds);
  }, [dispatch]);

  useEffect(() => {
    if (adds.length === 0) {
      setIsThereAdds(true);
    } else {
      setIsThereAdds(false);
    }
  }, [adds]);

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
      <Carousel style={{ marginBottom: "2rem", position: "relative" }}>
        <Carousel.Item>
          <div style={{ backgroundColor: "black" }}>
            <img
              src={imagegiris1}
              alt="First slide"
              style={{
                width: "100%",
                height: "88vh",
                objectFit: "cover",
                opacity: "0.2",
              }}
            />
          </div>

          <Carousel.Caption
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              bottom: "initial",
            }}
          >
            <h3 style={{ fontSize: "2rem", letterSpacing: "3px" }}>
              Gayrimenkul Sektöründe{" "}
              <strong style={{ color: "orange", fontWeight: "400" }}>
                MB Gayrimenkul
              </strong>{" "}
              Ayrıcalığı
            </h3>
          </Carousel.Caption>
          <Carousel.Caption>
            <p style={{ color: "lightgray" }}>
              Daha Fazlası İçin Kaydırınız...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ backgroundColor: "black" }}>
            <img
              src={imagegiris2}
              alt="First slide"
              style={{
                width: "100%",
                height: "88vh",
                objectFit: "cover",
                opacity: "0.2",
              }}
            />
          </div>

          <Carousel.Caption
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              bottom: "initial",
            }}
          >
            <h3 style={{ fontSize: "2rem", letterSpacing: "3px" }}>
              MB Gayrimenkul{" "}
              <strong style={{ color: "orange", fontWeight: "400" }}>
                Her Zaman
              </strong>{" "}
              Güvenilir Ortağınız
            </h3>
          </Carousel.Caption>
          <Carousel.Caption>
            <p style={{ color: "lightgray" }}>
              Daha Fazlası İçin Kaydırınız...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ backgroundColor: "black" }}>
            <img
              src={imagegiris3}
              alt="First slide"
              style={{
                width: "100%",
                height: "88vh",
                objectFit: "cover",
                opacity: "0.2",
              }}
            />
          </div>

          <Carousel.Caption
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              bottom: "initial",
            }}
          >
            <h3 style={{ fontSize: "2rem", letterSpacing: "3px" }}>
              Gayrimenkul Sektöründe{" "}
              <strong style={{ color: "orange", fontWeight: "400" }}>
                Kazandıran Dostunuz
              </strong>{" "}
              MB Gayrimenkul
            </h3>
          </Carousel.Caption>
          <Carousel.Caption>
            <p style={{ color: "lightgray" }}>
              Daha Fazlası İçin Kaydırınız...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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
          <hr
            style={{
              width: "4rem",
              backgroundColor: "orange",
              height: "0.1rem",
            }}
          />
          <p style={{ color: "#282828", fontSize: "0.9rem" }}>
            <strong>
              Konutlar, villalar, bürolar, işyerleri, alışveriş merkezleri,
              eğitim, spor ve sağlık tesisleri, arazi ve arsalar, sanayi arsa ve
              tesisleri, çiftlik, bağ, bahçe, turizm ve konaklama tesisleri,
              oteller, benzin istasyonları
            </strong>{" "}
            gibi gayrimenkul projelerinin piyasa ve çevre koşullarını analiz
            ederek değerleme standartları çerçevesinde analiz ve raporlama
            hizmetinde bulunmak. Satış ve Kiralama sürecini en hızlı şekilde
            sonuçlandırmak.
          </p>
          <Row style={{ marginTop: "2.5rem" }}>
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
      <section className="img-bg">
        <Container style={{ padding: "1rem 3rem 0 3rem" }}>
          <Row
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <Col lg={5}>
              <img
                src={image2}
                alt=""
                style={{ width: "100%", height: "30rem", objectFit: "cover" }}
              />
            </Col>
            <Col lg={7} style={{ paddingBottom: "5rem" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "rgb(70,70,70)",
                  textAlign: "start",
                  paddingTop: "2rem",
                }}
              >
                MB Gayrimenkul
              </h3>
              <hr
                style={{
                  width: "4rem",
                  backgroundColor: "orange",
                  height: "0.1rem",
                }}
              />
              <p style={{ color: "#282828", fontSize: "0.9rem" }}>
                Ticaret Bakanlığı Taşınmaz Ticareti Yetki Belgesine sahip,
                Gayrimenkul alanında faaliyet gösteren
                <strong> MB Gayrimenkul </strong>
                Danışmanlık, kurumsal ve profesyonel anlamda tüm tecrübesiyle
                sizlere hizmet vermekteyiz. Gayrimenkul ile ilgili taleplerinizi
                mümkün olan en kısa sürede, en iyi fiyat ve en sorunsuz şekilde
                sonuçlandırmak için mülkünüzün gerçek değerini tespit ediyor ve
                detaylı sonuç raporunu sizinle paylaşıyoruz.
              </p>
              <p style={{ color: "#282828", fontSize: "0.9rem" }}>
                Gayrimenkul yatırımcısının birinci hedefi yatırımını kazanca
                dönüştürmektir. <strong> MB Gayrimenkul </strong> Danışmanlığı,
                konusunda uzman ve eğitimli personeliyle, müşterilerinin
                sektörden yüksek karlar elde etmesini hedeflemiş ve bu hedefini
                yakalamıştır. Stratejik düşünme yeteneği olan, bölgesinin
                geleceği ve gerçekleri konusunda bilgiye ve öngörüye sahip uzman
                kadromuzun sunduğu yatırım fikirleri ile yüksek kazançlı işlere
                birlikte imza atmak için <strong> MB Gayrimenkul </strong>
                olarak sizleri ağırlamaktan ve tanışmaktan mutluluk duyarız.
              </p>
              <Link to="/hakkimizda">
                <Button
                  style={{
                    border: "none",
                    backgroundColor: "#282828",
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  Daha Fazla
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <Container style={{ paddingTop: "6rem" }}>
        <h3
          style={{
            fontSize: "1.4rem",
            color: "rgb(70,70,70)",
            textAlign: "start",
          }}
        >
          Son Girilen İlanlarımız
        </h3>
        <hr
          style={{
            width: "4rem",
            backgroundColor: "orange",
            height: "0.1rem",
          }}
        />
        <Row>
          {isThereAdds && (
            <Col
              lg={12}
              style={{
                paddingBottom: "5rem",
                fontSize: "1.2rem",
                paddingTop: "5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={logo}
                alt=""
                style={{ width: "100%", height: "15rem", objectFit: "contain" }}
              />
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#282828",
                  marginTop: "2rem",
                  marginLeft: "2rem",
                }}
              >
                Şu Anda Yayında Herhangi Bir ilanımız Bulunmamaktadır.
              </p>
            </Col>
          )}
          {adds.slice(0, 3).map((add) => {
            return (
              <Col lg={4} md={4} key={add.id}>
                <Card
                  className="adds-poster"
                  style={{
                    width: "100%",
                    border: "none",
                    boxShadow: "0 1px 2px 1px rgba(0,0,0,0.1)",
                    marginBottom: "3rem",
                  }}
                >
                  {add.data.image ? (
                    <Card.Img
                      variant="top"
                      src={add.data.image}
                      style={{
                        width: "100%",
                        height: "12rem",
                        objectFit: "cover",
                        backgroundPosition: "center center",
                      }}
                    />
                  ) : (
                    <Card.Img
                      variant="top"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/750px-Black_flag.svg.png"
                      style={{
                        width: "100%",
                        height: "15rem",
                        objectFit: "cover",
                        backgroundPosition: "center center",
                      }}
                    />
                  )}

                  <Card.Body style={{ padding: "1rem", marginTop: "1rem" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Card.Title
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                          marginBottom: "0rem",
                          textAlign: "start",
                        }}
                      >
                        {truncate(add.data.title, 45)}
                      </Card.Title>
                    </div>
                    <Card.Text
                      style={{
                        fontSize: "0.75rem",
                        marginBottom: "0.3rem",
                        color: "orange",
                        textAlign: "start",
                      }}
                    >
                      {add.data.type} / {add.data.category}
                    </Card.Text>
                    <Row>
                      {add.data.rooms && (
                        <Col lg={6} className="adds-eleman-information-eleman">
                          <WeekendIcon
                            style={{
                              marginRight: "0.3rem",
                              color: "orange",
                              fontSize: "1.2rem",
                            }}
                          ></WeekendIcon>

                          {add.data.rooms}
                        </Col>
                      )}
                      {add.data.floor && (
                        <Col lg={6} className="adds-eleman-information-eleman">
                          <DomainIcon
                            style={{
                              marginRight: "0.3rem",
                              color: "orange",
                              fontSize: "1.1rem",
                            }}
                          ></DomainIcon>
                          {add.data.floor}. Kat
                        </Col>
                      )}
                      {add.data.area && (
                        <Col lg={6} className="adds-eleman-information-eleman">
                          <HomeIcon
                            style={{
                              marginRight: "0.3rem",
                              color: "orange",
                              fontSize: "1.1rem",
                            }}
                          ></HomeIcon>
                          {add.data.area} m
                          <sup style={{ paddingTop: "10px" }}>2</sup>
                        </Col>
                      )}
                      <Col lg={6} className="adds-eleman-information-eleman">
                        <CalendarTodayIcon
                          style={{
                            marginRight: "0.3rem",
                            color: "orange",
                            fontSize: "1.1rem",
                          }}
                        ></CalendarTodayIcon>
                        {new Date(
                          add.data.date.seconds * 1000
                        ).toLocaleDateString("tr-TR")}
                      </Col>
                    </Row>
                    <Card.Text
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        marginTop: "1rem",
                        textAlign: "start",
                      }}
                    >
                      <NumberFormat
                        value={add.data.price}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₺"}
                      />
                    </Card.Text>
                    <Card.Footer
                      style={{
                        backgroundColor: "#fff",
                        padding: "1rem 0",
                      }}
                    >
                      <Row>
                        <Col lg={12}>
                          <a
                            href={add.data.sahibindenLink}
                            target="_blank"
                            style={{
                              flex: "0.3",
                              textDecoration: "none",
                            }}
                            rel="noreferrer"
                          >
                            <Button
                              style={{
                                backgroundColor: "#282828",
                                color: "#fff",
                                border: "none",
                                marginRight: "1rem",
                                marginBottom: "1rem",
                                width: "100%",
                              }}
                            >
                              İlana Git
                            </Button>
                          </a>
                        </Col>
                        <Col lg={12}>
                          <Link
                            to="/ilanlar"
                            style={{
                              width: "100%",
                            }}
                          >
                            <Button
                              style={{
                                width: "100%",
                                color: "#282828",
                                backgroundColor: "lightgray",
                                border: "none",
                                fontWeight: "600",
                              }}
                              className="to-adds-button"
                            >
                              Tüm İlanları Görüntüle
                            </Button>
                          </Link>
                        </Col>
                      </Row>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Footer></Footer>
    </>
  );
}

export default HomeBody;
