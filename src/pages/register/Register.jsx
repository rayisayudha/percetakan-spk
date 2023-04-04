import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CoverAuth from "../../public/img/CoverAuth.png";
import "./style.scss";
import logoPerusahaan from "../../public/img/logoPerusahaan.png";
import { registerViaForm } from "../../redux/actions/authActions";
const FormRegisterComponent = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, status, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [typeUser, setPosisi] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    if (email === "") {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Please enter your email",
        showConfirmButton: false,
        timer: 1000,
      });
    } else if (password === "") {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Please enter your password",
        showConfirmButton: false,
        timer: 1000,
      });
    } else if (username === "") {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Please enter your name",
        showConfirmButton: false,
        timer: 1000,
      });
    } else if (typeUser === "") {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Please enter your name",
        showConfirmButton: false,
        timer: 1000,
      });
    } else if (password !== passwordConfirm) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Password doesn't match",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      Swal.fire({
        title: "Loading",
        text: "Please wait...",
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      });
      dispatch(registerViaForm({ email, password, username, typeUser }));
    }
  };

  useEffect(() => {
    if (status === "REGISTER_SUCCESS") {
      return (window.location.href = "/login");
    }
  });

  return (
    <>
      {!isAuthenticated ? (
        <Container fluid>
          <Row className="h-100 align-items-center">
            <Col lg={6} className="m-0 p-0 cover-image">
              <img src={CoverAuth} className="img-fluid image-login" alt="" />
            </Col>
            <Col lg={6}>
              <Form className="formAuth">
                <center>
                  <img src={logoPerusahaan} className="" alt="" />
                </center>
                <Form.Group className="mb-2" controlId="posisi">
                  <Form.Label className="formLabel formInput">Role</Form.Label>
                  <Form.Select className="mb-2" onChange={(e) => setPosisi(e.target.value)}>
                    <option>Select</option>
                    <option value="1">Produksi</option>
                    <option value="2">Manager</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-2" controlId="email">
                  <Form.Label className="formLabel">Username</Form.Label>
                  <Form.Control className="formInput" placeholder="Contoh: aalggabiez" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="email">
                  <Form.Label className="formLabel">Email</Form.Label>
                  <Form.Control type="email" className="formInput" placeholder="Contoh: johndee@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="password">
                  <Form.Label className="formLabel">Password</Form.Label>
                  <Form.Control type="password" className="formInput" placeholder="Masukkan password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="password2">
                  <Form.Label className="formLabel">Confirm Password</Form.Label>
                  <Form.Control type="password" className="formInput" placeholder="Masukkan password kembali" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                </Form.Group>

                <Button type="button" onClick={() => handleSubmit()} className="btn-block w-100 btnRegister">
                  Daftar
                </Button>
                <div className="mt-2 d-flex justify-content-center">
                  <span>
                    <p>Sudah punya akun? </p>
                  </span>
                  &nbsp;
                  <span>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <p style={{ color: "#4b1979", fontWeight: "bold" }}>Masuk di sini</p>
                    </Link>
                  </span>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default FormRegisterComponent;
