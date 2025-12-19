import { useState } from "react";
import "./../styles/Login.css";
import { useNavigate, useOutletContext } from "react-router-dom";
// const Login = () => {
//   const navigate=useNavigate();
//   const {setAuthen}=useOutletContext()
//   const[email,setEmail]=useState()
//   const [password,setPassword]=useState()


//   //  const handleSubmit=(e)=>{
//   //   e.preventDefault();
//   //   console.log(email,password);
//   //   if(email==="nathi@gmail.com" && password==="nathi")
//   //   {
//   //     localStorage.setItem("auth",true)
//   //     setAuthen(true); 
//   //     navigate("/dashboard");
//   //   }
    
//   //  }
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   const res = await fetch("http://localhost:5000/api/admin/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       email,
//       password // adminId
//     })
//   });

//   const data = await res.json();

//   if (data.success) {
//     localStorage.setItem("auth", "true");
//     setAuthen(true);
//     navigate("/dashboard");
//   } else {
//     alert("Invalid Login");
//   }
// };

//   return (
//     <div className="login">
//       <form className="loginForm">
//         <h2>Login Page</h2>
//         <label>Email</label>
//         <input 
//         value={email} 
//         onChange={(e)=>
//           {setEmail(e.target.value)}}
//           type="email" placeholder="Email" required></input>
//         <label>Password</label>
//         <input  value={password} onChange={(e)=>{setPassword(e.target.value)}}
//         type="password" placeholder="Password" required></input>
//         <button className="loginButton" onClick={handleSubmit}type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

const Login = () => {
  const navigate = useNavigate();
  const { setAuthen } = useOutletContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/admin/login", {
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
