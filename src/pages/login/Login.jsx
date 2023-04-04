import React, { useState } from "react";

import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CoverAuth from "../../public/img/CoverAuth.png";
import logoPerusahaan from "../../public/img/logoPerusahaan.png";
import { loginViaForm } from "../../redux/actions/authActions";
import Swal from "sweetalert2";

const FormLoginComponent = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "") {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Please enter your username",
        showConfirmButton: false,
        timer: 1000,
      });
    }
    if (password === "") {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Password cannot be empty",
        showConfirmButton: false,
        timer: 1000,
      });
    }
    if (username !== "" && password !== "") {
      Swal.fire({
        title: "Loading",
        text: "Please wait...",
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      });
      dispatch(loginViaForm({ username, password }));
    }
  };
  return (
    <>
      {!isAuthenticated ? (
        <Container fluid>
          <Row className="h-100 align-items-center">
            <Col lg={6} className="m-0 p-0 cover-image">
              <img src={CoverAuth} className="img-fluid image-login" alt="" />
            </Col>
            <Col lg={6}>
              <Form className="formAuth" onSubmit={handleSubmit}>
                <center>
                  <img src={logoPerusahaan} className="mb-5" alt="" />
                </center>
                <Form.Group className="mb-3 mt-2" controlId="email">
                  <Form.Label className="formLabel">Username</Form.Label>
                  <Form.Control type="text" className="formInput" placeholder="Masukan username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label className="formLabel">Password</Form.Label>
                  <Form.Control type="password" className="formInput" placeholder="Masukkan password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button type="submit" className="btn-block w-100 btnPrimary mb-3">
                  Masuk
                </Button>
                <Link to={"/register"}>
                  <Button type="button" className="btn-block w-100 btnRegister">
                    Register
                  </Button>
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      ) : (
        <Navigate to={`/`} />
      )}
    </>
  );
};

export default FormLoginComponent;
