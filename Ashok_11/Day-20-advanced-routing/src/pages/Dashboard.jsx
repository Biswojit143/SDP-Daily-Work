import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <div style={{ marginBottom: "12px" }}>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Dashboard;