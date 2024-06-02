import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="h-screen bg-blue-50 flex flex-col items-center justify-center relative overflow-hidden">
      <style>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
      <div className="absolute inset-0 opacity-30">
        <img
          className="w-full h-full object-cover"
          src="https://img.freepik.com/free-vector/blockchain-cryptocurrency-isometric-flowchart_1284-23782.jpg"
          alt="Blockchain Cryptocurrency Isometric"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 bg-white bg-opacity-80 p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to ChainCure
        </h1>
        <p className="text-lg text-gray-700 max-w-prose text-center">
          Revolutionizing the pharmaceutical supply chain with blockchain
          technology. Ensure the authenticity and traceability of your
          pharmaceutical products with ChainCure.
        </p>
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
        >
          Start Here
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
