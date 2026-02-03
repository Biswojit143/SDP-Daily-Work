import { usePreference } from "../context/PreferenceContext";

const Settings = () => {
  const { setTheme, setFontSize } = usePreference();

  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2 font-medium">Theme</p>
        <button
          className="mr-2 px-4 py-1 border"
          onClick={() => setTheme("light")}
        >
          Light
        </button>
        <button
          className="px-4 py-1 border"
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>
      </div>

      <div>
        <p className="mb-2 font-medium">Font Size</p>
        <select
          className="border p-1"
          onChange={(e) => setFontSize(e.target.value)}
        >
          <option value="text-sm">Small</option>
          <option value="text-base">Medium</option>
          <option value="text-xl">Large</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;