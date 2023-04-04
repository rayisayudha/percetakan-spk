import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams, useNavigate } from "react-router-dom";

import { Container, Row, Col, Form, Button, Stack } from "react-bootstrap";
import Swal from "sweetalert2";
import { getSpkNotaById, deleteSpkNota, clearSpkNota } from "../../redux/actions/spkNotaAction";
const DetailSpkComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { detailSpkNota, error, status } = useSelector((state) => state.spknota);

  useEffect(() => {
    dispatch(getSpkNotaById(id));
  }, [dispatch, id]);

  function handleDelete() {
    Swal.fire({
      title: "Konfirmasi",
      text: "Apakah anda yakin ingin menghapus produk ini?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
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
        dispatch(deleteSpkNota({ id: detailSpkNota.id }));
      }
    });
  }
  function handleEdit() {
    dispatch(clearSpkNota());
    return navigate(`/editspk/${id}`);
  }
  if (status === "OK") {
    dispatch(clearSpkNota());
    return (window.location.href = "/");
  }
  return (
    <>
      {detailSpkNota.length === 0 ? (
        <></>
      ) : (
        <Container className="mt-5">
          <Row className=" mt-5 mb-4">
            <Col lg={10} className="d-flex">
              <div className="justify-content-start">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <i className="bi bi-arrow-left fs-4 d-flex align-items-center"></i>
                </Link>
              </div>
            </Col>
            <Col lg={2} className="d-flex">
              <div className="justify-content-end">
                <Button className="btn btn-primary mx-2" style={{ borderRadius: "10px" }} type="button" onClick={() => handleEdit()}>
                  Edit
                </Button>
                <Button className="btn btn-danger" style={{ borderRadius: "10px" }} type="button" onClick={() => handleDelete()}>
                  Delete
                </Button>
              </div>
            </Col>
          </Row>
          <Container contentClassName="custom-modal">
            <Form className="">
              <Form.Group className="mb-2" controlId="category">
                <Form.Select value={detailSpkNota.category} disabled>
                  <option>Select</option>
                  <option value="SPK Nota">SPK Nota</option>
                  <option value="SPK Mesin Besar">SPK Mesin Besar</option>
                  <option value="SPK Mesin Kecil">SPK Mesin Kecil</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-2" controlId="projectname">
                <Form.Label className="formLabel">Project Name</Form.Label>
                <Form.Control className="formInput" value={detailSpkNota.project} disabled />
              </Form.Group>
              <Form.Group className="mb-2" controlId="bahan">
                <Form.Label className="formLabel">Bahan</Form.Label>
                <Form.Control className="formInput" value={detailSpkNota.bahan} disabled />
              </Form.Group>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-2" controlId="startDate">
                    <Form.Label className="formLabel">Start Date</Form.Label>
                    <Form.Control className="formInput" value={detailSpkNota.startDate} disabled />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-2" controlId="endDAte">
                    <Form.Label className="formLabel">End Date</Form.Label>
                    <Form.Control className="formInput" value={detailSpkNota.endDate} disabled />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <Form.Group className="mb-2" controlId="ukuran">
                    <Form.Label className="formLabel">Ukuran</Form.Label>
                    <Form.Control className="formInput" value={detailSpkNota.ukuran} disabled />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group className="mb-2" controlId="tebal">
                    <Form.Label className="formLabel">Tebal</Form.Label>
                    <Form.Control className="formInput" value={detailSpkNota.tebal} disabled />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group className="mb-2" controlId="jumlah">
                    <Form.Label className="formLabel">Jumlah</Form.Label>
                    <Form.Control className="formInput" value={detailSpkNota.jumlah} disabled />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-2" controlId="UkuranJadi">
                <Form.Label className="formLabel">Ukuran Jadi</Form.Label>
                <Form.Select value={detailSpkNota.ukuranJadi} disabled>
                  <option>Select</option>
                  <option value="1">1</option>
                  <option value="1/2">1/2</option>
                  <option value="1/3">1/3</option>
                  <option value="1/4">1/4</option>
                  <option value="1/6">1/6</option>
                  <option value="1/8">1/8</option>
                </Form.Select>
              </Form.Group>

              <Form.Label className="formLabel">Note Warna</Form.Label>
              <Form.Group className="mb-2" controlId="top">
                <Row>
                  <Col lg={3}>
                    <Form.Label className="formLabel">Top</Form.Label>
                  </Col>
                  <Col lg={4}>
                    <Form.Control className="formInput" value={detailSpkNota.ncrTop} disabled />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-2" controlId="middle1">
                <Row>
                  <Col lg={3}>
                    <Form.Label className="formLabel">Middle 1</Form.Label>
                  </Col>
                  <Col lg={4}>
                    <Form.Control className="formInput" value={detailSpkNota.ncrMid1} disabled />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-2" controlId="middle2">
                <Row>
                  <Col lg={3}>
                    <Form.Label className="formLabel">Middle 2</Form.Label>
                  </Col>
                  <Col lg={4}>
                    <Form.Control className="formInput" value={detailSpkNota.ncrMid2} disabled />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-2" controlId="middle3">
                <Row>
                  <Col lg={3}>
                    <Form.Label className="formLabel">Middle 3</Form.Label>
                  </Col>
                  <Col lg={4}>
                    <Form.Control className="formInput" value={detailSpkNota.ncrMid3} disabled />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-2" controlId="bottom">
                <Row>
                  <Col lg={3}>
                    {" "}
                    <Form.Label className="formLabel">Bottom</Form.Label>
                  </Col>
                  <Col lg={4}>
                    <Form.Control className="formInput" value={detailSpkNota.ncrBot} />
                  </Col>
                </Row>
              </Form.Group>

              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-2" controlId="UkuranJadi">
                    <Form.Label className="formLabel">Cetak Jadi</Form.Label>
                    <Form.Select value={detailSpkNota.cetak} disabled>
                      <option>Select</option>
                      <option value="1 Muka">1 Muka</option>
                      <option value="2 Muka">2 Muka</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-2" controlId="UkuranJadi">
                    <Form.Label className="formLabel">Warna</Form.Label>
                    <Form.Select value={detailSpkNota.warna} disabled>
                      <option>Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="FC">FC</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-2" controlId="finishing">
                <Row>
                  <Col lg={3}>
                    <Form.Label className="formLabel">Finishing</Form.Label>
                  </Col>
                  <Col lg={4}>
                    <Form.Control className="formInput" value={detailSpkNota.finishing} disabled />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-2" controlId="note">
                <Form.Label className="formLabel">Note</Form.Label>
                <Form.Control className="formInput" as="textarea" rows={3} value={detailSpkNota.catatan} disabled />
              </Form.Group>
            </Form>
          </Container>
        </Container>
      )}
    </>
  );
};

export default DetailSpkComponent;
