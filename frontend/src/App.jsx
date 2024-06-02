import React from "react";

const App = () => {
  return (
    <div className="h-screen bg-blue-50 flex flex-col items-center justify-center gap-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to ChainCure
      </h1>
      <div className="shadow-lg p-5 bg-white rounded-lg">
        <img
          className="w-full h-auto"
          src="https://img.freepik.com/free-vector/blockchain-cryptocurrency-isometric-flowchart_1284-23782.jpg"
          alt="Blockchain Cryptocurrency Isometric"
        />
      </div>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out">
        Start Here
      </button>
    </div>
  );
};

export default App;
