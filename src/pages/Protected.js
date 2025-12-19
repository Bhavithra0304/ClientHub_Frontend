import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const isAuthenticated = localStorage.getItem("auth"); // or from context/state

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default Protected;
