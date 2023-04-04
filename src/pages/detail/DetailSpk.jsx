import Sidebar from "../../components/sidebar/Sidebar";

import "./home.scss";

import DetailSpkComponent from "../../components/detailSPK/DetailSPK";

const DetailSPK = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets"></div>
        <DetailSpkComponent />
      </div>
    </div>
  );
};

export default DetailSPK;
