import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const role = localStorage.getItem("role");

  const getLinks = () => {
    switch (role) {
      case "manufacturer":
        return [
          { to: "/create-batch", label: "Create New Batch" },
          { to: "/dispatch-batch", label: "Dispatch a Batch" },
          { to: "/delivery-status", label: "Check Status of Delivery" },
        ];
      case "distributor":
        return [
          { to: "/dispatch-batch", label: "Dispatch Batch" },
          { to: "/delivery-status", label: "Check Status of Delivery" },
          { to: "/order-manufacturer", label: "Give Order to Manufacturer" },
        ];
      case "pharmacy":
        return [
          { to: "/order-distributor", label: "Give Order to Distributor" },
          { to: "/order-status", label: "Check Status of Order" },
          { to: "/delivery-status", label: "Check Status of Delivery" },
        ];
      default:
        return [
          { to: "/login", label: "Login" },
          { to: "/", label: "Home" },
        ];
    }
  };

  const links = getLinks();

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          ChainCure
        </Link>
        <ul className="flex space-x-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to} className="text-white hover:text-gray-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

/*

import React from "react";
import { Link } from "react-router-dom";

const DynamicNavbar = () => {
  const role = localStorage.getItem("role");

  const getLinks = () => {
    switch (role) {
      case "manufacturer":
        return [
          { to: "/create-batch", label: "Create New Batch" },
          { to: "/dispatch-batch", label: "Dispatch a Batch" },
          { to: "/delivery-status", label: "Check Status of Delivery" },
        ];
      case "distributor":
        return [
          { to: "/dispatch-batch", label: "Dispatch Batch" },
          { to: "/delivery-status", label: "Check Status of Delivery" },
          { to: "/order-manufacturer", label: "Give Order to Manufacturer" },
        ];
      case "pharmacy":
        return [
          { to: "/order-distributor", label: "Give Order to Distributor" },
          { to: "/order-status", label: "Check Status of Order" },
          { to: "/delivery-status", label: "Check Status of Delivery" },
        ];
      default:
        return [];
    }
  };

  const links = getLinks();

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">ChainCure</div>
        <ul className="flex space-x-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to} className="text-white hover:text-gray-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DynamicNavbar;


*/
