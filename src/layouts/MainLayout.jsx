import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Header from "../pages/Home/Header/Header";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div>
      <Toaster />
      {location.pathname === "/" ? <Header></Header> : <Navbar></Navbar>}
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
