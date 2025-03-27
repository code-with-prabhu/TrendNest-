import LeftBar from "../../Components/leftbar/LeftBar";
import TopBar from "../../Components/topbar/TopBar";
import "./MainLayout.css";
import {Outlet} from "react-router"

const MainLayout = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <TopBar />
        <Outlet/>
      </div>
    </div>
  );
};


export default MainLayout;