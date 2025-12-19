import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">

      <header className="heading tag1">
        <h1>Customer Management System</h1>
      </header>

      <section className="split">

        <div className="register common">
          <span className="tag">ADMIN</span>
          <h2>Admin Register</h2>

          <p className="info">
            Admins can manage all user-related activities efficiently and
            maintain secure customer records.
          </p>

          <button onClick={() => navigate("./register")}>
            Register
          </button>

          <p className="footer-text">
          </p>
        </div>

        <div className="login common">
          <span className="tag">ADMIN / USER</span>
          <h2>Admin / User Login</h2>

          <p className="info">
            Users can securely log in to view and manage their personal
            information with limited access.
          </p>
          <button onClick={() => navigate("./login")}>
            Login
          </button>

          <p className="footer-text">
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
