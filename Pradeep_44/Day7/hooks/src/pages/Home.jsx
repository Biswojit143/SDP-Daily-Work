import useAuth from "../hooks/useAuth";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { user, logout } = useAuth();
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome, {user.name}</p>
      <button onClick={logout}>Logout</button>

      <h3>Posts</h3>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {data &&
          data.slice(0, 5).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
