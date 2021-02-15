import React, { useEffect, useState } from "react";
import "./Adds.css";
import Footer from "./Footer";
import Header from "./Header";
import firebase from "./firebase";
import { Link, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { useStateValue } from "./contexts/StateProvider";
import { Button, Container, Form } from "react-bootstrap";

function AdminEditAdds({ match }) {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [addId, setAddId] = useState("");
  const [category, setCategory] = useState("");
  const [article, setArticle] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [floor, setFloor] = useState("");
  const [rooms, setRooms] = useState("");
  const [area, setArea] = useState("");
  const [image, setImage] = useState("");
  const [sahibindenLink, setSahibindenLink] = useState("");
  const { addToast } = useToasts();
  const [{ adds }] = useStateValue();

  useEffect(() => {
    adds.map((add) => {
      if (add.id === match.params.id) {
        setTitle(add.data.title);
        setCategory(add.data.category);
        setType(add.data.type);
        setArea(add.data.area);
        setRooms(add.data.rooms);
        setFloor(add.data.floor);
        setPrice(add.data.price);
        setAddId(add.id);
        setImage(add.data.image);
        setSahibindenLink(add.data.sahibindenLink);
      }
      return 0;
    });
  }, []);

  const editAddsHandler = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("Adds")
      .doc(`${addId}`)
      .set({
        title: title,
        category: category,
        article: article,
        date: firebase.firestore.Timestamp.now(),
        price: price,
        type: type,
        rooms: rooms,
        floor: floor,
        area: area,
        image: image,
        sahibindenLink: sahibindenLink,
      })
      .then(() => {
        addToast("İlan Başarıyla Güncellendi", {
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
    setType("");
    setRooms("");
    setFloor("");
    setPrice("");
    setTitle("");
    setArticle("");
    setCategory("");
    setSahibindenLink("");

    history.push("/ilanlar");
  };

  return (
    <>
      <Header></Header>
      <Container style={{ marginBottom: "5rem", marginTop: "5rem" }}>
        <Form onSubmit={editAddsHandler}>
          <Form.Group>
            <Form.Label>İlan Başlığını Giriniz</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              İlan net m<sup>2</sup> Giriniz
            </Form.Label>
            <Form.Control
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Fiyatı Giriniz</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>İlanın Sahibinden Linkini Giriniz</Form.Label>
            <Form.Control
              type="text"
              value={sahibindenLink}
              onChange={(e) => setSahibindenLink(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>İlan Kategorisini Seçiniz</Form.Label>
            <Form.Control
              as="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value={null}></option>
              <option value="Daire">Daire</option>
              <option value="Arsa">Arsa</option>
              <option value="İşyeri">İşyeri</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>İlan Tipini Seçiniz</Form.Label>
            <Form.Control
              as="select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value={null}></option>
              <option value="Satılık">Satılık</option>
              <option value="Kiralık">Kiralık</option>
              <option value="Günü Birlik">Günü Birlik</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>İlan Katını Seçiniz</Form.Label>
            <Form.Control
              as="select"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            >
              <option value={null}></option>
              <option value="Giriş">Giriş</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Oda Sayısını Seçiniz</Form.Label>
            <Form.Control
              as="select"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
            >
              <option value={null}></option>
              <option value="Stüdyo">Stüdyo</option>
              <option value="1+0">1+0</option>
              <option value="1+1">1+1</option>
              <option value="2+1">2+1</option>
              <option value="3+1">3+1</option>
              <option value="4+1">4+1</option>
              <option value="5+1">5+1</option>
            </Form.Control>
          </Form.Group>

          <Form.Group
            style={{ paddingTop: "2rem", borderTop: "1px solid lightgray" }}
          >
            <Button
              type="submit"
              style={{
                backgroundColor: "orange",
                border: "none",
                marginRight: "1rem",
              }}
            >
              İlanı Güncelle
            </Button>
            <Link to="/ilanlar">
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
          </Form.Group>
        </Form>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default AdminEditAdds;
