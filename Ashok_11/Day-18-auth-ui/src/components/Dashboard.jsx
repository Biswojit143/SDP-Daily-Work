function Dashboard({ onLogout }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    onLogout();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>Dashboard</h2>
      <p>You are logged in</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;