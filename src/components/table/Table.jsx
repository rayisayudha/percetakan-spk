import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./table.scss";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Link, useNavigate, useHistory } from "react-router-dom";
import { getAllSpkNota, getSpkNotaById, clearSpkNota, deleteSpkNota } from "../../redux/actions/spkNotaAction";

export default function AccessibleTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isAuthenticated = auth.isAuthenticated;
  const { spknota, error, status } = useSelector((state) => state.spknota);

  useEffect(() => {
    (async () => {
      dispatch(getAllSpkNota());
      dispatch(clearSpkNota());
    })();
  }, [dispatch]);

  useEffect(() => {
    document.title = "Home";
    if (error) {
      alert(error);
    }
  }, [error]);

  const handleSubmit = (id) => {
    dispatch(getSpkNotaById(id));
  };

  if (status === "OK") {
    return (window.location.href = "/");
  }

  return (
    <TableContainer component={Paper}>
      <div className="">
        <h1>{spknota.length}</h1>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="left">Project</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">bahan</TableCell>
            <TableCell align="left">Due Date</TableCell>
            <TableCell align="left">Approval</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {spknota.length === 0 ? (
            <>
              <h4 className="text-center pt-5">Data Tidak Tersedia</h4>
            </>
          ) : (
            spknota.map((spknota) => (
              <TableRow key={spknota.id}>
                <TableCell component="th" scope="row">
                  {spknota.id}
                </TableCell>
                <TableCell align="left">{spknota.project}</TableCell>
                <TableCell align="left">{spknota.category}</TableCell>
                <TableCell align="left">{spknota.bahan}</TableCell>
                <TableCell align="left">{spknota.endDate}</TableCell>
                <TableCell align="left">{spknota.approval}</TableCell>
                {isAuthenticated ? (
                  <Link to={`/spknota/${spknota.id}`}>
                    <BorderColorIcon onClick={() => handleSubmit(spknota.id)} className="mt-3" />
                  </Link>
                ) : (
                  <div className=""></div>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
