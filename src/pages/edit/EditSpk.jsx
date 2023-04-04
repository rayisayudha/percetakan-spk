import Sidebar from "../../components/sidebar/Sidebar";

import EditSpkComponent from "../../components/editSPK/EditSpk";

const DetailSPK = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets"></div>
        <EditSpkComponent />
      </div>
    </div>
  );
};

export default DetailSPK;
