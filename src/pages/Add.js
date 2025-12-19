import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
import "../styles/Add.css";

const Add = () => {
  const navigate = useNavigate();
  const { data, setData } = useOutletContext();

  const { register, handleSubmit, reset } = useForm();

  const onsubmitHandler = async (dataValue) => {
  try {
    const res = await fetch("https://clienthub-backend.onrender.com/api/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataValue),
    });
    const savedCustomer = await res.json();
    setData([...data, savedCustomer]);
    reset();
    navigate("/view");
  } catch (err) {
    console.error(err);
  }
};


  return (
    <div className="add-container">
      <div className="add-card professional">
        <h2 className="title">Add New Customer</h2>
        <p className="subtitle">
          Fill in the customer information below to register them in the system.
          Ensure details are accurate for future communication and records.
        </p>

        <form className="forms" onSubmit={handleSubmit(onsubmitHandler)}>
          <input {...register("id")} placeholder="Customer ID" />
          <input {...register("name")} placeholder="Full Name" />
          <input {...register("email")} placeholder="Email Address" />
          <input {...register("phone")} placeholder="Phone Number" />
          <input {...register("city")} placeholder="City / Location" />
          <input {...register("role")} placeholder="Job" />

          <button type="submit">Save Customer</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
