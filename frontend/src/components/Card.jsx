import { useNavigate } from "react-router-dom";

const Card = ({ title, description }) => {
  const navigate = useNavigate();

  const redirectLoginForm = () => {
    navigate("/login-form");
  };
  return (
    <div className="card bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <button
        onClick={redirectLoginForm}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
      >
        Login
      </button>
    </div>
  );
};

export default Card;
