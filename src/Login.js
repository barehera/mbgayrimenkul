import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "./images/logo.jpeg";
import firebase from "./firebase";
import { useToasts } from "react-toast-notifications";
import { Button, Container, Form, Image } from "react-bootstrap";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { addToast } = useToasts();
  const login = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        addToast(e.message, {
          appearance: "error",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      });
  };

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form style={{ margin: "5rem 0", width: "50%" }}>
        <Link to="/">
          <Image
            src={logo}
            style={{
              width: "100%",
              height: "20rem",
              objectFit: "contain",
              marginBottom: "5rem",
            }}
          ></Image>
        </Link>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          type="submit"
          onClick={login}
          style={{ backgroundColor: "orange", border: "none" }}
        >
          Giriş Yap
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
