import React from "react";

const Dashboard = () => {
  const role = localStorage.getItem("role");

  // Sample static data for delivery status
  const deliveryData = [
    { batchId: "12345", status: "Dispatched", timestamp: "2024-05-01" },
    { batchId: "67890", status: "In Transit", timestamp: "2024-05-02" },
    { batchId: "54321", status: "Delivered", timestamp: "2024-05-03" },
  ];

  const renderContent = () => {
    switch (role) {
      case "manufacturer":
        return (
          <div className="relative z-10 bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Delivery Status
            </h1>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Batch ID</th>
                  <th className="py-2 px-4 border-b">Status</th>
                  <th className="py-2 px-4 border-b">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {deliveryData.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{item.batchId}</td>
                    <td className="py-2 px-4 border-b">{item.status}</td>
                    <td className="py-2 px-4 border-b">{item.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "distributor":
        return <div>Distributor specific content goes here.</div>;
      case "pharmacy":
        return <div>Pharmacy specific content goes here.</div>;
      default:
        return <div>Unauthorized access. Please log in.</div>;
    }
  };

  return (
    <div className="h-screen bg-blue-50 flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center relative overflow-hidden">
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
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
