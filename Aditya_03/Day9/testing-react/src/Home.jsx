import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  function logout() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div className="container">
      <h2>Home</h2>

      <p>Welcome 👋</p>
      <p className="home-email">{user?.email}</p>

<button className="logout-btn" onClick={logout}>
  Logout
</button>

    </div>
  );
}

export default Home;
