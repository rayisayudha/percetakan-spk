import Swal from "sweetalert2";
import { CLEAR_SPK_NOTA, GET_ALL_SPK_NOTA, SPK_NOTA_ERROR, GET_SPK_NOTA, CREATE_SPK_NOTA, DELETE_SPK_NOTA, UPDATE_SPK_NOTA } from "./types";

export const getAllSpkNota = () => async (dispatch) => {
  let token = "";
  if (localStorage.getItem("token")) token = `Bearer ${localStorage.getItem("token")}`;

  try {
    const response = await fetch("http://localhost:8000/api/v1/spknota", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();

    if (response.status === 500) {
      dispatch({
        type: SPK_NOTA_ERROR,
        payload: data.message,
      });
    } else {
      dispatch({
        type: GET_ALL_SPK_NOTA,
        payload: data,
        status: "GET_ALL",
      });
    }
  } catch (error) {
    dispatch({
      type: SPK_NOTA_ERROR,
      payload: error.response,
    });
    Swal.fire({
      position: "center",
      icon: "error",
      title: error.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const getSpkNotaById = (params) => async (dispatch) => {
  try {
    const id = params;
    const response = await fetch(`http://localhost:8000/api/v1/spknota/${id}`, {
      method: "GET",
    });
    const data = await response.json();

    dispatch({
      type: GET_SPK_NOTA,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SPK_NOTA_ERROR,
      payload: error.response,
    });
    Swal.fire({
      position: "center",
      icon: "error",
      title: error.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

// export const getProductByNama = (params) => async (dispatch) => {
//   try {
//     const namaProduk = params;
//     const response = await fetch(
//       REACT_APP_BACKEND +
//         "/api/v1/product/filter/nama?" +
//         new URLSearchParams({
//           namaProduk,
//         })
//     );
//     const data = await response.json();

//     dispatch({
//       type: GET_ALL_PRODUCT,
//       payload: data,
//       status: "GET_ALL",
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_ERROR,
//       payload: error.response,
//     });

//     Swal.fire({
//       position: "center",
//       icon: "error",
//       title: error.message,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   }
// };

// export const getProductByKategori = (params) => async (dispatch) => {
//   let token = "";
//   if (localStorage.getItem("token")) token = `Bearer ${localStorage.getItem("token")}`;

//   try {
//     const response = await fetch(REACT_APP_BACKEND + "/api/v1/product/filter/kategori?" + new URLSearchParams({ kategori: params }), {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: token,
//       },
//     });
//     const data = await response.json();

//     dispatch({
//       type: GET_ALL_PRODUCT,
//       payload: data,
//       status: "GET_ALL",
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_ERROR,
//       payload: error.response,
//     });

//     Swal.fire({
//       position: "center",
//       icon: "error",
//       title: error.message,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   }
// };

// export const getProductByStatus = (params) => async (dispatch) => {
//   try {
//     const { idSeller, statusProduk } = params;

//     const response = await fetch(
//       REACT_APP_BACKEND +
//         "/api/v1/product/filter/status?" +
//         new URLSearchParams({
//           idSeller,
//           statusProduk,
//         })
//     );
//     const data = await response.json();

//     dispatch({
//       type: GET_ALL_PRODUCT,
//       payload: data,
//       status: "GET_ALL",
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_ERROR,
//       payload: error.response,
//     });
//     Swal.fire({
//       position: "center",
//       icon: "error",
//       title: error.message,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   }
// };

export const addSpkNota = (params) => async (dispatch) => {
  try {
    params.startDate = params.startDate + "T00:00:00.000Z";
    params.endDate = params.endDate + "T00:00:00.000Z";

    const response = await fetch("http://localhost:8000/api/v1/spknota", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(params),
    });

    const result = await response.json();

    dispatch({
      type: CREATE_SPK_NOTA,
      status: result.status,
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    dispatch({
      type: SPK_NOTA_ERROR,
      payload: error.response,
    });

    Swal.fire({
      position: "center",
      icon: "error",
      title: error,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const updateSpkNota = (params) => async (dispatch) => {
  try {
    params.startDate = params.startDate + "T00:00:00.000Z";
    params.endDate = params.endDate + "T00:00:00.000Z";

    const response = await fetch(`http://localhost:8000/api/v1/spknota/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(params),
    });

    const data = await response.json();

    dispatch({
      type: UPDATE_SPK_NOTA,
      payload: data.status,
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    dispatch({
      type: SPK_NOTA_ERROR,
      payload: error.response,
    });

    Swal.fire({
      position: "center",
      icon: "error",
      title: error,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const deleteSpkNota = (params) => async (dispatch) => {
  const { id } = params;
  try {
    const response = await fetch("http://localhost:8000/api/v1/spknota?" + new URLSearchParams({ id }), {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await response.json();

    dispatch({
      type: DELETE_SPK_NOTA,
      payload: data.status,
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Delete success",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    dispatch({
      type: SPK_NOTA_ERROR,
      payload: error,
    });

    Swal.fire({
      position: "center",
      icon: "error",
      title: error,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const clearSpkNota = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SPK_NOTA,
  });
};

// export const previewImg = (params) => async (dispatch) => {
//   dispatch({
//     type: PREVIEW_PROODUCT,
//     payload: params,
//   });
// };
