import { Outlet } from "react-router-dom";
import Navbar from "./components/Navabar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
