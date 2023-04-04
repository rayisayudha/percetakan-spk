import { combineReducers } from "redux";

import authReducer from "./authReducer";
import spkNotaReducer from "./spkNotaReducer";

export default combineReducers({
  auth: authReducer,
  spknota: spkNotaReducer,
  // transaction: transactionReducer,
  // theme: themeReducer,
});
