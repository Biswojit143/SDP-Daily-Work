import { usePreference } from "../context/PreferenceContext";

const Header = () => {
  const { user, setUser } = usePreference();

  return (
    <header className="flex justify-between items-center p-4 border-b">
      <h1 className="font-semibold">Welcome, {user}</h1>
      <button
        onClick={() => setUser(null)}
        className="text-red-500"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;