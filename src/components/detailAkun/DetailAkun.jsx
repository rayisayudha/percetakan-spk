import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { updateInfoUsers } from "../../redux/actions/authActions";
const FormInfoAkunComponent = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated, user, status } = useSelector((state) => state.auth);

  React.useEffect(() => {
    if (location.pathname === "/info-akun") cekUserInfo();
  });
  function cekUserInfo() {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    } else {
      if (user !== null && status !== "UPDATE_SUCCESS") {
        if (user.username !== null) document.getElementById("username").value = user.username;
        if (user.email !== null) document.getElementById("email").value = user.email;

        if (user.typeUser !== null) document.getElementById("typeUser").value = user.typeUser;
      }
    }
  }
  const handleSubmit = async (e) => {
    const updateArgs = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      typeUser: document.getElementById("typeUser").value,
    };

    if (updateArgs.username === "" || updateArgs.email === "" || updateArgs.typeUser === "") {
      Swal.fire({
        title: "Error",
        text: "Semua field harus diisi",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "Data sudah benar ?",
        text: "Apakah anda yakin ingin menyimpan data ini ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Simpan!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Loading",
            text: "Mohon tunggu...",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            showConfirmButton: false,
            showCloseButton: false,
            showCancelButton: false,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
          });

          dispatch(updateInfoUsers(updateArgs));
        }
      });
    }
  };

  if (status === "UPDATE_SUCCESS") {
    return <Navigate to={`/`} />;
  }

  return (
    <Container>
      <Row className=" mt-5">
        <Col lg={12} md={10} className="d-flex">
          <div className="justify-content-start">
            <Link to="/">
              <i className="bi bi-arrow-left fs-4 d-flex align-items-center"></i>
            </Link>
          </div>
          <div className="mx-auto">
            <h4 className="d-flex align-items-center">Info Akun</h4>
          </div>
        </Col>
      </Row>

      <Form className="formInfoAkun">
        <Form.Control type="text" hidden id="idUser" />
        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Username</Form.Label>
          <Form.Control type="text" className="formInput" id="username" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Email</Form.Label>
          <Form.Control type="text" className="formInput" id="email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Posisi</Form.Label>

          <Form.Select className="mb-2" id="typeUser">
            <option>Select</option>
            <option value="1">Produksi</option>
            <option value="2">Manager</option>
          </Form.Select>
        </Form.Group>

        <Button type="button" className="btn-block w-100 mb-3 btnPrimary" onClick={() => handleSubmit()}>
          Simpan
        </Button>
      </Form>
    </Container>
  );
};

export default FormInfoAkunComponent;
