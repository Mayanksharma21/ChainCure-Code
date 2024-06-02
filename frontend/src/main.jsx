import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BatchCreationPage, Dashboard, LoginForm, LoginPage, WelcomePage } from "./pages";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/create-batch",
        element: <BatchCreationPage />,
      },
      {
        path: "/login-form",
        element: <LoginForm />,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
