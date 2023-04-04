import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams, useNavigate } from "react-router-dom";

import { Container, Row, Col, Form, Button, Stack } from "react-bootstrap";
import Swal from "sweetalert2";
import { getSpkNotaById, deleteSpkNota, updateSpkNota } from "../../redux/actions/spkNotaAction";
const EditSpkComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { detailSpkNota, error, status } = useSelector((state) => state.spknota);

  const [idSpk, setIdSpk] = useState("");
  const [project, setProject] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [bahan, setBahan] = useState("");
  const [tebal, setTebal] = useState("");
  const [ukuran, setUkuran] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [ukuranJadi, setUkuranJadi] = useState("");
  const [ncrTop, setNcrTop] = useState("");
  const [ncrMid1, setNcrMid1] = useState("");
  const [ncrMid2, setNcrMid2] = useState("");
  const [ncrMid3, setNcrMid3] = useState("");
  const [ncrBot, setNcrBot] = useState("");
  const [cetak, setCetak] = useState("");
  const [warna, setWarna] = useState("");
  const [finishing, setFinishing] = useState("");
  const [catatan, setCatatan] = useState("");

  useEffect(() => {
    dispatch(getSpkNotaById(id));
  }, [dispatch, id]);

  function cekSpkNota() {
    if (detailSpkNota.length !== 0) {
      if (idSpk === "") {
        setIdSpk(detailSpkNota.id);
        setProject(detailSpkNota.project);
        setCategory(detailSpkNota.category);
        setStartDate(detailSpkNota.startDate);
        setEndDate(detailSpkNota.endDate);
        setBahan(detailSpkNota.bahan);
        setTebal(detailSpkNota.tebal);
        setUkuran(detailSpkNota.ukuran);
        setJumlah(detailSpkNota.jumlah);
        setTebal(detailSpkNota.tebal);
        setUkuranJadi(detailSpkNota.ukuranJadi);
        setNcrTop(detailSpkNota.ncrTop);
        setNcrMid1(detailSpkNota.ncrMid1);
        setNcrMid2(detailSpkNota.ncrMid2);
        setNcrMid3(detailSpkNota.ncrMid3);
        setNcrBot(detailSpkNota.ncrBot);
        setCetak(detailSpkNota.cetak);
        setWarna(detailSpkNota.warna);
        setFinishing(detailSpkNota.finishing);
        setCatatan(detailSpkNota.catatan);
      }
    }
  }

  cekSpkNota();

  const handleSubmit = async (e) => {
    const updateArgs = {
      id: detailSpkNota.id,
      idUser: user.id,
      project,
      category,
      startDate,
      endDate,
      bahan,
      tebal,
      ukuran,
      jumlah,
      ukuranJadi,
      ncrTop,
      ncrMid1,
      ncrMid2,
      ncrMid3,
      ncrBot,
      cetak,
      warna,
      finishing,
      catatan,
    };
    Swal.fire({
      title: "Konfirmasi",
      text: "Apakah anda yakin ingin mengubah produk ini?",
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
        dispatch(updateSpkNota(updateArgs));
      }
    });
  };

  if (status === "OK") {
    return (window.location.href = "/");
  }
  return (
    <Container className="mt-5">
      <Row className=" mt-5 mb-4">
        <Col lg={11} className="d-flex">
          <div className="justify-content-start">
            <Link to="/" style={{ textDecoration: "none" }}>
              <i className="bi bi-arrow-left fs-4 d-flex align-items-center"></i>
            </Link>
          </div>
        </Col>
        <Col lg={1} className="d-flex">
          <div className="justify-content-end x-3">
            <Button className="btn btn-primary " style={{ borderRadius: "10px" }} type="button" onClick={() => handleSubmit()}>
              Simpan
            </Button>
            {/* <Button className="btn btn-danger" style={{ borderRadius: "10px" }} type="button">
              Delete
            </Button> */}
          </div>
        </Col>
      </Row>
      <Container contentClassName="custom-modal">
        <Form className="">
          <Form.Control type="text" id="idSpk" hidden />
          <Form.Group className="mb-2" controlId="category">
            <Form.Select value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option>Select</option>
              <option value="SPK Nota">SPK Nota</option>
              <option value="SPK Mesin Besar">SPK Mesin Besar</option>
              <option value="SPK Mesin Kecil">SPK Mesin Kecil</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-2" controlId="projectname">
            <Form.Label className="formLabel">Project Name</Form.Label>
            <Form.Control className="formInput" value={project} onChange={(e) => setProject(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-2" controlId="bahan">
            <Form.Label className="formLabel">Bahan</Form.Label>
            <Form.Control className="formInput" value={bahan} onChange={(e) => setBahan(e.target.value)} required />
          </Form.Group>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-2" controlId="startDate">
                <Form.Label className="formLabel">Start Date</Form.Label>
                <Form.Control className="formInput" value={startDate} type="date" onChange={(e) => setStartDate(e.target.value)} required />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-2" controlId="endDAte">
                <Form.Label className="formLabel">End Date</Form.Label>
                <Form.Control className="formInput" value={endDate} type="date" onChange={(e) => setEndDate(e.target.value)} required />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-2" controlId="ukuran">
                <Form.Label className="formLabel">Ukuran</Form.Label>
                <Form.Control className="formInput" value={ukuran} onChange={(e) => setUkuran(e.target.value)} required />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-2" controlId="tebal">
                <Form.Label className="formLabel">Tebal</Form.Label>
                <Form.Control className="formInput" value={tebal} onChange={(e) => setTebal(e.target.value)} required />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-2" controlId="jumlah">
                <Form.Label className="formLabel">Jumlah</Form.Label>
                <Form.Control className="formInput" value={jumlah} onChange={(e) => setJumlah(e.target.value)} required />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-2" controlId="UkuranJadi">
            <Form.Label className="formLabel">Ukuran Jadi</Form.Label>
            <Form.Select value={ukuranJadi} onChange={(e) => setUkuranJadi(e.target.value)} required>
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
                <Form.Control className="formInput" value={ncrTop} onChange={(e) => setNcrTop(e.target.value)} required />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-2" controlId="middle1">
            <Row>
              <Col lg={3}>
                <Form.Label className="formLabel">Middle 1</Form.Label>
              </Col>
              <Col lg={4}>
                <Form.Control className="formInput" value={ncrMid1} onChange={(e) => setNcrMid1(e.target.value)} required />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-2" controlId="middle2">
            <Row>
              <Col lg={3}>
                <Form.Label className="formLabel">Middle 2</Form.Label>
              </Col>
              <Col lg={4}>
                <Form.Control className="formInput" value={ncrMid2} onChange={(e) => setNcrMid2(e.target.value)} required />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-2" controlId="middle3">
            <Row>
              <Col lg={3}>
                <Form.Label className="formLabel">Middle 3</Form.Label>
              </Col>
              <Col lg={4}>
                <Form.Control className="formInput" value={ncrMid3} onChange={(e) => setNcrMid3(e.target.value)} required />
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
                <Form.Control className="formInput" value={ncrBot} onChange={(e) => setNcrBot(e.target.value)} required />
              </Col>
            </Row>
          </Form.Group>

          <Row>
            <Col lg={6}>
              <Form.Group className="mb-2" controlId="UkuranJadi">
                <Form.Label className="formLabel">Cetak Jadi</Form.Label>
                <Form.Select value={cetak} onChange={(e) => setCetak(e.target.value)} required>
                  <option>Select</option>
                  <option value="1 Muka">1 Muka</option>
                  <option value="2 Muka">2 Muka</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-2" controlId="UkuranJadi">
                <Form.Label className="formLabel">Warna</Form.Label>
                <Form.Select value={warna} onChange={(e) => setWarna(e.target.value)} required>
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
                <Form.Control className="formInput" value={finishing} onChange={(e) => setFinishing(e.target.value)} required />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-4" controlId="note">
            <Form.Label className="formLabel">Note</Form.Label>
            <Form.Control className="formInput" as="textarea" rows={3} value={catatan} onChange={(e) => setCatatan(e.target.value)} required />
          </Form.Group>
        </Form>
      </Container>
    </Container>
  );
};

export default EditSpkComponent;
