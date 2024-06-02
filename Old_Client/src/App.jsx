import { RouterProvider } from "react-router-dom";
import Web3Provider from "./contexts/Web3Provider.jsx";
import { routes } from "./routes/routes.jsx";

const App = () => {
  return (
    <>
      <Web3Provider>
        <RouterProvider router={routes}></RouterProvider>
      </Web3Provider>
    </>
  );
};

export default App;
