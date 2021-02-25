import React, { useEffect, useState } from "react";
import "./Adds.css";
import Footer from "./Footer";
import Header from "./Header";
import firebase from "./firebase";
import { useStateValue } from "./contexts/StateProvider";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { useToasts } from "react-toast-notifications";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import WeekendIcon from "@material-ui/icons/Weekend";
import DomainIcon from "@material-ui/icons/Domain";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import HomeIcon from "@material-ui/icons/Home";
import image1 from "./images/sale-3701777_1920.jpg";
import logo from "./images/logo.jpeg";

function Adds() {
  const [loading, setLoading] = useState();
  const [{ adds, user }, dispatch] = useStateValue();
  const { addToast } = useToasts();
  const [isThereAdds, setIsThereAdds] = useState(false);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const deleteHandler = (id) => {
    firebase
      .firestore()
      .collection("Adds")
      .doc(`${id}`)
      .delete()
      .then(() => {
        addToast("İlan Başarıyla Silindi", {
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
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    const getAdds = () => {
      setLoading(true);
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
        setLoading(false);
      });
    };
    getAdds();
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
      <>
        <Header></Header>
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
        <Footer></Footer>
      </>
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
          Yayındaki İlanlarımız
        </h3>
      </div>
      <Container fluid></Container>
      <Container style={{ marginBottom: "5rem", marginTop: "2rem" }}>
        <Row>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            {user && (
              <Link to="/admin-ilanlar">
                <Button
                  style={{
                    backgroundColor: "orange",
                    border: "none",
                    height: "2.4rem",
                  }}
                >
                  İlan Ekle
                </Button>
              </Link>
            )}
          </Col>
        </Row>
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
        <Row>
          <Col lg={12}>
            <Row>
              {adds.map((add) => {
                return (
                  <Col lg={4} md={6} key={add.id}>
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
                            }}
                          >
                            {truncate(add.data.title, 50)}
                          </Card.Title>
                        </div>
                        <Card.Text
                          style={{
                            fontSize: "0.75rem",
                            marginBottom: "0.3rem",
                            color: "orange",
                          }}
                        >
                          {add.data.type} / {add.data.category}
                        </Card.Text>
                        <Row>
                          {add.data.rooms && (
                            <Col
                              lg={6}
                              className="adds-eleman-information-eleman"
                            >
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
                            <Col
                              lg={6}
                              className="adds-eleman-information-eleman"
                            >
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
                            <Col
                              lg={6}
                              className="adds-eleman-information-eleman"
                            >
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
                          <Col
                            lg={6}
                            className="adds-eleman-information-eleman"
                          >
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
                                style={{ flex: "0.3", textDecoration: "none" }}
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
                            <Col lg={6}>
                              {user && (
                                <Link to={`/admin-edit-ilanlar/${add.id}`}>
                                  <Button
                                    style={{
                                      backgroundColor: "green",
                                      border: "none",
                                      marginRight: "1rem",
                                      marginBottom: "1rem",
                                      width: "100%",
                                    }}
                                  >
                                    İlanı Düzenle
                                  </Button>
                                </Link>
                              )}
                            </Col>
                            <Col lg={6}>
                              {user && (
                                <Button
                                  style={{
                                    backgroundColor: "red",
                                    border: "none",
                                    marginRight: "1rem",
                                    width: "100%",
                                  }}
                                  onClick={() => deleteHandler(add.id)}
                                >
                                  İlanı Sil
                                </Button>
                              )}
                            </Col>
                          </Row>
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Adds;
