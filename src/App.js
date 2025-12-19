import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Common/Header";
import { useEffect, useState } from "react";

function App() {
  const [authen, setAuthen] = useState(localStorage.getItem("auth") === "true");
  const [data, setData] = useState([]);
  useEffect(() => {
  const fetchAPI = async () => {
    try {
      const response = await fetch("https://clienthub-backend.onrender.com/api/customers");
      const resdata = await response.json();
      setData(resdata);
    } catch (err) {
      console.log(err);
    }
  };
  fetchAPI();
}, []);

const deleteUser = async (id) => {
  try {
    await fetch(`https://clienthub-backend.onrender.com/api/customers/${id}`, {
      method: "DELETE",
    });

    setData((prev) => prev.filter((c) => c._id !== id));
  } catch (err) {
    console.error(err);
  }
};


  const updateUser = (updatedUser) => {
  setData((prev) =>
    prev.map((u) =>
      u._id === updatedUser._id ? updatedUser : u
    )
  );
};


  return (
    <div className="App">
      {authen && <Header />}
      <Outlet
        context={{ setAuthen, data, setData, deleteUser, updateUser }}
      ></Outlet>
    </div>
  );
}

export default App;
