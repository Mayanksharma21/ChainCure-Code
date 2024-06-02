import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/create-batch");
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
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          ChainCure Login
        </h1>
        <form className="space-y-6 w-full" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="usrid"
              className="block text-sm font-medium text-gray-700"
            >
              User Id
            </label>
            <input
              type="text"
              id="usrid"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
