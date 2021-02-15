import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import "./BlogEleman.css";
import { useStateValue } from "./contexts/StateProvider";
import Footer from "./Footer";
import Header from "./Header";
import ReactHtmlParser from "react-html-parser";
import Loader from "react-loader-spinner";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function BlogEleman({ match }) {
  const [{ blogs }, dispatch] = useStateValue();
  const [isThereBlogs, setIsThereBlogs] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
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
  const blog = blogs.filter((blog) => {
    if (blog.id === match.params.id) {
      return blog;
    }
    return 0;
  });

  useEffect(() => {
    if (blogs.length > 1) {
      setIsThereBlogs(true);
    } else {
      setIsThereBlogs(false);
    }
  }, [blogs]);

  const html = blog[0]?.data.article;

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

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

      <Container style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <h3 className="blog-eleman-title">{blog[0]?.data.title}</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4 className="blog-eleman-category">{blog[0]?.data.category}</h4>
          <h5 className="blog-eleman-date">
            {new Date(blog[0]?.data.date.seconds * 1000).toLocaleDateString(
              "tr-TR"
            )}
          </h5>
        </div>

        <img
          className="blog-eleman-image"
          src={
            blog[0]?.data.image
              ? blog[0]?.data.image
              : "https://www.zicev.org.tr/wp-content/uploads/2018/05/black-background-1468370534d5s.jpg"
          }
          alt=""
        />
        <article className="blog-eleman-article">
          {ReactHtmlParser(html)}
        </article>
      </Container>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {isThereBlogs && (
          <div>
            <h3
              style={{
                fontSize: "1.4rem",
                color: "rgb(70,70,70)",
                textAlign: "start",
              }}
            >
              Diğer Blog Yazılarımız
            </h3>
            <hr
              style={{
                width: "4rem",
                backgroundColor: "orange",
                height: "0.1rem",
              }}
            />
          </div>
        )}
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "2rem",
            marginBottom: "5rem",
          }}
        >
          <Row style={{ width: "100%" }}>
            {blogs
              .filter((blog) => blog.id !== match.params.id)
              .slice(0, 2)
              .map((blog) => {
                const html = truncate(blog?.data.article, 100);
                return (
                  <Col lg={6} key={blog.id}>
                    <img
                      src={blog.data.image}
                      alt=""
                      style={{
                        width: "100%",
                        height: "12rem",
                        objectFit: "cover",
                      }}
                    />
                    <h3 className="blog-eleman-title">{blog.data.title}</h3>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h4 className="blog-eleman-category">
                        {blog.data.category}
                      </h4>
                      <h5 className="blog-eleman-date">
                        {new Date(
                          blog.data.date.seconds * 1000
                        ).toLocaleDateString("tr-TR")}
                      </h5>
                    </div>

                    <article className="blog-eleman-article">
                      {ReactHtmlParser(html)}
                    </article>
                    <Row>
                      <Col lg={6}>
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
                              marginBottom: "1rem",
                              width: "100%",
                            }}
                            onClick={() => window.scroll(0, 0)}
                          >
                            Yazıya Git
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default BlogEleman;
