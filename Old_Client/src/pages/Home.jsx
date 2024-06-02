import { useWeb3Contexst } from "../contexts/useWeb3context.jsx";

const Home = () => {
  const { web3State } = useWeb3Contexst();
  const { selectedAccount } = web3State;
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Home;
