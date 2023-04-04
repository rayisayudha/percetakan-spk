import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, cekTokenExp } from "../../redux/actions/authActions";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import logoPerusahaan from "../../public/img/logoPerusahaan.png";
import { Button } from "bootstrap";
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user, status } = useSelector((state) => state.auth);
  // const { dispatch } = useContext(DarkModeContext);
  useEffect(() => {
    if (localStorage.getItem("token") && status !== "EXPIRED") {
      dispatch(cekTokenExp());
    }
    if (status === "EXPIRED") return navigate("/login");
  }, [dispatch, isAuthenticated, status, navigate]);

  setTimeout(() => {
    if (localStorage.getItem("token")) dispatch(cekTokenExp());
  }, 5 * 60000);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="sidebar">
      <div className="top py-5">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={logoPerusahaan} className="mt-4" alt="" style={{ width: "100%", height: "68px" }} />
        </Link>
      </div>
      <hr />
      <div className="center">
        <p className="title">MAIN</p>
        <ul>
          <li onClick={() => navigate("/info-akun")}>
            <PersonOutlineIcon className="icon" />
            <span>Users</span>
          </li>

          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <div className="mx-2 fixed-bottom">
            {!user ? (
              <>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <li>
                    <ExitToAppIcon className="icon" style={{ fontSize: "20px" }} />
                    <span style={{ fontSize: "20px" }}>Login</span>
                  </li>
                </Link>
              </>
            ) : (
              <>
                <li onClick={handleLogout}>
                  <ExitToAppIcon className="icon" style={{ fontSize: "20px", color: "red" }} />
                  <span style={{ fontSize: "20px", color: "red" }}>Logout</span>
                </li>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
