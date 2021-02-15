import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import firebase from "./firebase";
import { Editor } from "@tinymce/tinymce-react";
import { Link, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { Button, Container, Form } from "react-bootstrap";

function AdminBlog() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [article, setArticle] = useState("");
  const { addToast } = useToasts();
  console.log(image);
  const addBlogHandler = (e) => {
    e.preventDefault();
    const uploadTask = firebase
      .storage()
      .ref(`${title}/${image.name}`)
      .put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref(`${title}`)
          .child(image && image.name)
          .getDownloadURL()
          .then((url) => {
            firebase
              .firestore()
              .collection("Blogs")
              .doc()
              .set({
                title: title,
                category: category,
                article: article,
                image: url,
                date: firebase.firestore.Timestamp.now(),
              })
              .then(() => {
                addToast("Blog Yazısı Başarıyla Eklendi", {
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
          });
      }
    );
    setTitle("");
    setArticle("");
    setCategory("");
    setImage(null);
    history.push("/blog");
  };

  const handleEditorChange = (content, editor) => {
    setArticle(content);
  };

  return (
    <>
      <Header></Header>
      <Container style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <Form onSubmit={addBlogHandler}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label style={{ fontSize: "1.3rem" }}>
              Blog Başlığını Giriniz:
            </Form.Label>
            <Form.Control
              required
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
              required
              size="lg"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label style={{ fontSize: "1.3rem" }}>
              Blog Resmi Ekleyiniz:
            </Form.Label>
            <Form.File
              required
              accept="image/*"
              size="lg"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{ fontSize: "1.3rem" }}>
              Blog Metnini Giriniz:
            </Form.Label>
            <Editor
              required
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
            Blog Yazısını Paylaş
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

/*<div className="admin-blog">
        <form onSubmit={addBlogHandler} className="admin-blog-form">
          <label htmlFor="title" className="admin-blog-label">
            Başlığı Giriniz:
          </label>
          <input
            className="admin-blog-input"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="category" className="admin-blog-label">
            Kategori Giriniz:
          </label>
          <input
            className="admin-blog-input"
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <label htmlFor="image" className="admin-blog-label">
            Resim Ekleyiniz:
          </label>
          <input
            className="admin-blog-image-input"
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
          />

          <label htmlFor="category" className="admin-blog-label">
            Metin Giriniz:
          </label>
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
          <button
            type="submit"
            className="blog-poster-button"
            style={{ marginTop: "4rem" }}
          >
            Blog Yazısını Paylaş
          </button>
        </form>
      </div>*/
