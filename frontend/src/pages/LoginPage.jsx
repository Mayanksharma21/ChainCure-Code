import React from "react";
import Card from "../components/Card";

const LoginPage = () => {
  const cardData = [
    {
      title: "Manufacturer",
      description:
        "Login as a Manufacturer to manage your products on the portal",
    },
    {
      title: "Logistics",
      description: "Login as Logistics to track and update shipment status.",
    },
    {
      title: "Distributor",
      description: "Login as a Distributor to oversee product distribution.",
    },
    {
      title: "Pharmacy",
      description: "Login as a Pharmacy to order and manage inventory.",
    },
  ];

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
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Login to ChainCure
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 w-full">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
