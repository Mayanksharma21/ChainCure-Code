import React, { useState } from "react";

const BatchCreationPage = () => {
  const [formData, setFormData] = useState({
    drugName: "",
    drugExpiry: "",
    CDSCOApprovalId: "",
    drugQuantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignMessage = () => {
    // Add logic to sign a message with MetaMask
    console.log("Signing message with MetaMask...");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to interact with the smart contract
    console.log("Form Data Submitted:", formData);
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
          Create New Batch
        </h1>
        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="drugName"
              className="block text-sm font-medium text-gray-700"
            >
              Drug Name
            </label>
            <input
              type="text"
              id="drugName"
              name="drugName"
              value={formData.drugName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="drugExpiry"
              className="block text-sm font-medium text-gray-700"
            >
              Drug Expiry (timestamp)
            </label>
            <input
              type="number"
              id="drugExpiry"
              name="drugExpiry"
              value={formData.drugExpiry}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="CDSCOApprovalId"
              className="block text-sm font-medium text-gray-700"
            >
              CDSCO Approval ID
            </label>
            <input
              type="text"
              id="CDSCOApprovalId"
              name="CDSCOApprovalId"
              value={formData.CDSCOApprovalId}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="drugQuantity"
              className="block text-sm font-medium text-gray-700"
            >
              Drug Quantity
            </label>
            <input
              type="number"
              id="drugQuantity"
              name="drugQuantity"
              value={formData.drugQuantity}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={handleSignMessage}
              className="px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              Sign Metamask Message
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              Create Batch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BatchCreationPage;
