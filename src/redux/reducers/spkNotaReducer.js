import { GET_ALL_SPK_NOTA, SPK_NOTA_ERROR, CLEAR_SPK_NOTA, GET_SPK_NOTA, CREATE_SPK_NOTA, DELETE_SPK_NOTA, UPDATE_SPK_NOTA } from "../actions/types";

const initialState = {
  spknota: [],
  detailSpkNota: [],
  previewSpkNota: [],
  status: [],
  error: null,
};

const spkNotaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SPK_NOTA:
      return {
        ...state,
        spknota: action.payload,
        status: action.status,
      };
    case GET_SPK_NOTA:
      return {
        ...state,
        detailSpkNota: action.payload,
      };
    case CREATE_SPK_NOTA:
      return {
        ...state,
        status: action.status,
      };
    case UPDATE_SPK_NOTA:
      return {
        ...state,
        status: action.payload,
      };
    case DELETE_SPK_NOTA:
      return {
        ...state,
        status: action.payload,
      };
    case CLEAR_SPK_NOTA:
      return {
        ...state,
        detailSpkNota: [],
        editProduct: [],
        status: [],
        previewSpkNota: [],
        error: null,
      };
    case SPK_NOTA_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "FAIL",
      };
    default:
      return state;
  }
};

export default spkNotaReducer;
