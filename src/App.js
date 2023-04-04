import Home from "./pages/home/Home";

import Register from "./pages/register/Register";

import InfoSpkNota from "./pages/detail/DetailSpk";
import EditSpkNota from "./pages/edit/EditSpk";
import Detailakun from "./pages/akun/DetailAkun";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./public/css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="register" element={<Register />} />
          <Route index element={<Home />} />

          <Route path="editspk/:id" element={<EditSpkNota />} />
          <Route path="spknota/:id" element={<InfoSpkNota />} />
          <Route path="info-akun" element={<Detailakun />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
