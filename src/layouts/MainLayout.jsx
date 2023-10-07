import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" && <Navbar></Navbar>}
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
