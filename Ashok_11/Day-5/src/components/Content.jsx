import { usePreference } from "../context/PreferenceContext";

const Content = () => {
  const { theme, fontSize } = usePreference();

  return (
    <div
      className={`p-6 rounded ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-200 text-black"
      } ${fontSize}`}
    >
      This content reflects your saved preferences.
    </div>
  );
};

export default Content;