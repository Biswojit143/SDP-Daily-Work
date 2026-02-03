function Login({ onLogin }) {
  const handleLogin = () => {
    // mock token
    const fakeToken = "mock-auth-token";
    localStorage.setItem("token", fakeToken);
    onLogin();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;