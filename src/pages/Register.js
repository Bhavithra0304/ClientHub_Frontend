import { useForm } from "react-hook-form";
import "../styles/Register.css";
const Register= () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // const onSubmitHandler = (fdata) => {
  //   if(!fdata.id){
  //   alert("No Data Found");

  //   }else{
  //   console.log(fdata);
  //   alert("Added Successfully");}
  // };

const onSubmitHandler = async (fdata) => {
  try {
    const res = await fetch("http://localhost:5000/api/admin/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        adminId: fdata.id,
        name: fdata.name,
        email: fdata.email,
        phone: fdata.phone
      })
    });

    const data = await res.json();

    if (data.success) {
      alert("Admin Registered Successfully");
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert("Server error");
  }
};


  return (
    <div className="forms">
      <h1>Admin Registeration</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)} className="innerform">
        <label>Admin Id</label>
        <input {...register("id")} type="text"></input>
        <label>Admin Name</label>
        <input 
        {...register("name")} type="text"></input>
        <label>Admin Email</label>
        <input {...register("email")} type="text"></input>
        <label>Admin Phone number</label>
        <input {...register("phone")} type="text"></input>
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
};

export default Register;