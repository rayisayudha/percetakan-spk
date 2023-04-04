// import Swal from "sweetalert2";
// import {GET_ALL_TR_BUYER, GET_ALL_TR_SELLER, CREATE_TR, UPDATE_TR} from "./types";

// const {REACT_APP_BACKEND} = process.env;

// export const getTransactionBuyer = () => async (dispatch) => {
//     const res = await fetch(`${REACT_APP_BACKEND}/api/v1/trBuyer`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//     });
//     const data = await res.json();
//     dispatch({
//         type: GET_ALL_TR_BUYER,
//         transaction: data.transactions,
//         status: data.status,
//     });
// };

// export const getTransactionSeller = () => async (dispatch) => {
//     const res = await fetch(`${REACT_APP_BACKEND}/api/v1/trSeller`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//     });
//     const data = await res.json();
//     dispatch({
//         type: GET_ALL_TR_SELLER,
//         transaction: data.transactions,
//         status: data.status,
//     });
// };

// export const createTransaction = (data) => async (dispatch) => {
//     const res = await fetch(`${REACT_APP_BACKEND}/api/v1/transaction?` + new URLSearchParams(data), {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//     });
//     const dataRes = await res.json();

//     if (dataRes.error) {
//         Swal.fire({
//             title: "Error",
//             text: dataRes.error,
//             icon: "error",
//         });
//     } else {
//         Swal.fire({
//             title: "Success",
//             text: "Transaksi anda sedang diproses",
//             icon: "success",
//         });
//         dispatch({
//             type: CREATE_TR,
//             payload: dataRes.transaction,
//             status: dataRes.status,
//         });
//     }
// };

// export const updateTransaction = (args) => async (dispatch) => {
//     const res = await fetch(`${REACT_APP_BACKEND}/api/v1/transaction?` + new URLSearchParams(args), {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//     });

//     const dataRes = await res.json();

//     if (dataRes.error) {
//         Swal.fire({
//             title: "Error",
//             text: dataRes.error,
//             icon: "error",
//         });
//     } else {
//         Swal.fire({
//             title: "Success",
//             text: "Transaction has been updated",
//             icon: "success",
//         });
//         dispatch({
//             type: UPDATE_TR,
//             payload: dataRes.status,
//         });
//     }
// };

// export const updateStatusTransaction = (args) => async (dispatch) => {
//     const res = await fetch(`${REACT_APP_BACKEND}/api/v1/transaction/status?` + new URLSearchParams(args), {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//     });

//     const dataRes = await res.json();

//     if (dataRes.error) {
//         Swal.fire({
//             title: "Error",
//             text: dataRes.error,
//             icon: "error",
//         });
//     } else {
//         Swal.fire({
//             title: "Success",
//             text: "Transaksi selesai",
//             icon: "success",
//         });
//         dispatch({
//             type: UPDATE_TR,
//             payload: dataRes.status,
//         });
//     }
// };
