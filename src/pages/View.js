import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../styles/View.css";

const View = () => {
  const { data, updateUser, deleteUser } = useOutletContext();
  const [search, setSearch] = useState("");
  const [editUser, setEditUser] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  const filteredUsers = data.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (editUser) {
      reset(editUser);
    }
  }, [editUser, reset]);

  const handleUpdateSubmit = async (formData) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/customers/${editUser._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const updatedCustomer = await res.json();
      updateUser(updatedCustomer);
      setEditUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="view">
      <h2>User List</h2>

      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchBox"
      />

      <table className="userTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((u, index) => (
            <tr key={u.id}>
              <td>{index + 1}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.city}</td>
              <td>{u.role}</td>
              <td>
                <button className="buttons" onClick={() => setEditUser(u)}>
                  Update
                </button>
                <button
                  className="buttons"
                  onClick={() => deleteUser(u._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editUser && (
        <div className="updateFormContainer">
          <h3>Edit User</h3>
          <form onSubmit={handleSubmit(handleUpdateSubmit)} className="updateForm">
            <div className="formRow">
              <label>Name</label>
              <input {...register("name")} />
            </div>
            <div className="formRow">
              <label>Email</label>
              <input {...register("email")} />
            </div>
            <div className="formRow">
              <label>Phone</label>
              <input {...register("phone")} />
            </div>
            <div className="formRow">
              <label>City</label>
              <input {...register("city")} />
            </div>
            <div className="formActions">
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditUser(null)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default View;
