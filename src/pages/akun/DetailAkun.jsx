import Sidebar from "../../components/sidebar/Sidebar";

import "./home.scss";

import DetailAkunComponent from "../../components/detailAkun/DetailAkun";

const DetailAkun = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets"></div>
        <DetailAkunComponent />
      </div>
    </div>
  );
};

export default DetailAkun;
