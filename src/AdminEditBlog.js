import React, { useEffect, useState } from "react";
import { useStateValue } from "./contexts/StateProvider";
import Footer from "./Footer";
import Header from "./Header";
import firebase from "./firebase";
import { Editor } from "@tinymce/tinymce-react";
import { Link, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { Button, Container, Form } from "react-bootstrap";

function AdminBlog({ match }) {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [article, setArticle] = useState("");
  const [blogId, setBlogId] = useState("");
  const [{ blogs }] = useStateValue();
  const { addToast } = useToasts();
  useEffect(() => {
    blogs.map((blog) => {
      if (blog.id === match.params.id) {
        setTitle(blog.data.title);
        setImage(blog.data.image);
        setArticle(blog.data.article);
        setCategory(blog.data.category);
        setBlogId(blog.id);
      }
      return 0;
    });
  }, []);

  const editBlogHandler = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("Blogs")
      .doc(`${blogId}`)
      .set({
        title: title,
        category: category,
        article: article,
        image: image,
        date: firebase.firestore.Timestamp.now(),
      })
      .then(() => {
        addToast("Blog Yazısı Başarıyla Düzenlendi", {
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
    setTitle("");
    setArticle("");
    setCategory("");
    setImage("");
    history.push("/blog");
  };
  const handleEditorChange = (content, editor) => {
    setArticle(content);
  };

  return (
    <>
      <Header></Header>
      <Container style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <Form onSubmit={editBlogHandler}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label style={{ fontSize: "1.3rem" }}>
              Blog Başlığını Giriniz:
            </Form.Label>
            <Form.Control
              size="lg"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label style={{ fontSize: "1.3rem" }}>
              Blog Kategorisini Giriniz:
            </Form.Label>
            <Form.Control
              size="lg"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label style={{ fontSize: "1.3rem" }}>
              Blog Metnini Giriniz:
            </Form.Label>
            <Editor
              init={{
                height: 500,
                width: "100%",
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
              }}
              value={article}
              onEditorChange={handleEditorChange}
            />
          </Form.Group>
          <Button
            type="submit"
            style={{
              backgroundColor: "orange",
              border: "none",
              marginRight: "1rem",
            }}
          >
            Blog Yazısını Düzenle
          </Button>
          <Link to="/blog">
            <Button
              type="submit"
              style={{
                backgroundColor: "red",
                border: "none",
              }}
            >
              İptal
            </Button>
          </Link>
        </Form>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default AdminBlog;
