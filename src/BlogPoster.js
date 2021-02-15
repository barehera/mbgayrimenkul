import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import { Link } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { useStateValue } from "./contexts/StateProvider";
import { useToasts } from "react-toast-notifications";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import profilePic from "./images/0-20181008-220428-80039-8596799.jpg";
import image1 from "./images/diary-968592_1920.jpg";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import logo from "./images/logo.jpeg";
import "./BlogPoster.css";

const { htmlToText } = require("html-to-text");

function BlogPoster() {
  const [{ blogs, user }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [isThereBlogs, setIsThereBlogs] = useState(false);
  const { addToast } = useToasts();

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  useEffect(() => {
    const getBlogs = () => {
      setLoading(true);
      const ref = firebase
        .firestore()
        .collection("Blogs")
        .orderBy("date", "desc");
      ref.onSnapshot((item) => {
        let items = [];
        item.forEach((doc) => {
          items.push({ id: doc.id, data: doc.data() });
        });
        dispatch({
          type: "SET_BLOG",
          blogs: items,
        });
        setLoading(false);
      });
    };
    getBlogs();
  }, [dispatch]);

  useEffect(() => {
    if (blogs.length === 0) {
      setIsThereBlogs(true);
    } else {
      setIsThereBlogs(false);
    }
  }, [blogs]);

  const deleteHandler = (id) => {
    firebase
      .firestore()
      .collection("Blogs")
      .doc(`${id}`)
      .delete()
      .then(() => {
        addToast("Blog Yazısı Başarıyla Silindi", {
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
          Blog
        </h3>
      </div>
      <Container fluid></Container>
      <Container style={{ marginBottom: "5rem" }}>
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
              <Link to="/admin-blog">
                <Button
                  style={{
                    backgroundColor: "orange",
                    border: "none",
                    height: "2.4rem",
                  }}
                >
                  Blog Yazısı Ekle
                </Button>
              </Link>
            )}
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <div
              style={{
                fontSize: "1.2rem",
                paddingBottom: "1rem",
                borderBottom: "1px solid lightgray",
                textAlign: "center",
                fontWeight: "500",
                marginBottom: "1rem",
              }}
            >
              Yazılarım
            </div>
            {isThereBlogs && (
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
                  style={{
                    width: "100%",
                    height: "15rem",
                    objectFit: "contain",
                  }}
                />
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "#282828",
                    marginTop: "2rem",
                    marginLeft: "2rem",
                  }}
                >
                  Şu Anda Yayında Herhangi Bir Blog Yazımız Bulunmamaktadır.
                </p>
              </Col>
            )}
            {blogs.map((blog) => {
              const text = htmlToText(blog.data.article, {
                wordwrap: 130,
              });

              return (
                <Card
                  style={{
                    width: "100%",
                    border: "none",
                    boxShadow: "0 1px 4px 1px rgba(0,0,0,0.1)",
                    marginBottom: "2rem",
                  }}
                  key={blog.id}
                >
                  {blog.data.image ? (
                    <img
                      variant="top"
                      src={blog.data.image}
                      style={{
                        width: "100%",
                        height: "12rem",
                        objectFit: "cover",
                        backgroundPosition: "center center",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                      alt=""
                    />
                  ) : (
                    <img
                      variant="top"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/750px-Black_flag.svg.png"
                      style={{
                        width: "100%",
                        height: "12rem",
                        objectFit: "cover",
                        backgroundPosition: "center center",
                      }}
                      alt=""
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
                          fontSize: "1.2rem",
                          fontWeight: "500",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {truncate(blog.data.title, 40)}
                      </Card.Title>
                      <Card.Text style={{ fontSize: "0.7rem" }}>
                        {new Date(
                          blog.data.date.seconds * 1000
                        ).toLocaleDateString("tr-TR")}
                      </Card.Text>
                    </div>
                    <Card.Text
                      style={{
                        fontSize: "1rem",
                        marginBottom: "0.3rem",
                        color: "orange",
                      }}
                    >
                      {blog.data.category}
                    </Card.Text>

                    <Card.Text style={{ fontSize: "0.9rem" }}>
                      {truncate(text, 300)}
                    </Card.Text>
                    <Card.Footer
                      style={{
                        backgroundColor: "#fff",
                        padding: "1rem 0",
                      }}
                    >
                      <Link
                        to={`/blog/${blog.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          style={{
                            backgroundColor: "#282828",
                            color: "#fff",
                            border: "none",
                            marginRight: "1rem",
                            fontSize: "0.8rem",
                          }}
                        >
                          Yazının Devamını Oku
                        </Button>
                      </Link>

                      {user && (
                        <Link to={`/admin-edit-blog/${blog.id}`}>
                          <Button
                            style={{
                              backgroundColor: "green",
                              border: "none",
                              marginRight: "1rem",
                              fontSize: "0.8rem",
                            }}
                          >
                            Blog Yazısını Düzenle
                          </Button>
                        </Link>
                      )}
                      {user && (
                        <Button
                          style={{
                            backgroundColor: "red",
                            border: "none",
                            marginRight: "1rem",
                            fontSize: "0.8rem",
                          }}
                          onClick={() => deleteHandler(blog.id)}
                        >
                          Blog Yazısını Sil
                        </Button>
                      )}
                    </Card.Footer>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
          <Col lg={4}>
            <div
              style={{
                fontSize: "1.2rem",
                paddingBottom: "1rem",
                borderBottom: "1px solid lightgray",
                textAlign: "center",
                fontWeight: "500",
                marginBottom: "1rem",
              }}
            >
              Hakkımda
            </div>
            <Card
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                border: "none",
              }}
            >
              <Card.Img
                variant="top"
                src={profilePic}
                style={{
                  borderRadius: "50%",
                  width: "12rem",
                  height: "12rem",
                  objectFit: "cover",
                }}
              />

              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card.Title
                  style={{
                    padding: "1rem",
                    borderBottom: "1px solid lightgray",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  Metin Büyükavcılar
                </Card.Title>
                <Card.Text
                  style={{
                    textAlign: "center",
                    width: "60%",
                    letterSpacing: "0.1rem",
                    fontWeight: "500",
                    fontSize: "0.8rem",
                  }}
                >
                  Lüleburgaz'da doğdum. Evli ve 2 çocuk babasıyım. Anadolu
                  Üniversitesi Emlak ve Emlak Yönetimi Bölümü ve Kurumsal
                  Gayrimenkul Şirketlerinden almış olduğum profesyonel eğitimler
                  sayesinde sizlere kusursuz hizmet vermek için çalışıyorum.
                </Card.Text>
                <Card.Title
                  style={{
                    padding: "1rem",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    borderBottom: "1px solid lightgray",
                    textAlign: "center",
                  }}
                >
                  Sosyal Medya Hesaplarım
                </Card.Title>
                <Card.Text
                  style={{
                    display: "flex",
                  }}
                >
                  <a href="https://www.instagram.com/">
                    <InstagramIcon
                      className="blog-icons"
                      style={{ color: "#282828", fontSize: "2.5rem" }}
                    ></InstagramIcon>
                  </a>

                  <FacebookIcon
                    className="blog-icons"
                    style={{ color: "#282828", fontSize: "2.5rem" }}
                  ></FacebookIcon>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BlogPoster;
