import { useState } from "react";
import "./../styles/Login.css";
import { useNavigate, useOutletContext } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { setAuthen } = useOutletContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://clienthub-backend.onrender.com/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("auth", "true");
      setAuthen(true);
      navigate("/welcome");
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert("Server not responding");
  }
};


  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Login Page</h2>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="loginButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
