import { useOutletContext } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const { data } = useOutletContext();

  const totalCustomers = data.length;
  const recentCustomers = data.slice(-5).reverse();
  const activeCount = data.filter(c => c.status === "active").length;
  const inactiveCount = data.filter(c => c.status === "inactive").length;

  const roleCount = data.reduce((acc, curr) => {
    const role = curr.role || "Unassigned";
    acc[role] = acc[role] ? acc[role] + 1 : 1;
    return acc;
  }, {});

  return (
    <div className="dashboard-wrapper">

      <div className="kpi-cards">
        <div className="card total">
          <h4>Total Customers</h4>
          <p>{totalCustomers}</p>
        </div>
        <div className="card recent">
          <h4>Recently Added</h4>
          <p>{recentCustomers.length}</p>
        </div>
        <div className="card active">
          <h4>Active Customers</h4>
          <p>{activeCount}</p>
        </div>
        <div className="card inactive">
          <h4>Inactive Customers</h4>
          <p>{inactiveCount}</p>
        </div>
      </div>

      <div className="role-summary">
        <h3>Customers by Role</h3>
        <div className="role-cards">
          {Object.entries(roleCount).map(([role, count]) => (
            <div className="role-card" key={role}>
              <h5>{role}</h5>
              <p>{count}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="recent-customers">
        <h3>Recent Customers</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {recentCustomers.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.role || "Unassigned"}</td>
                <td>{c.status || "Unknown"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Dashboard;
