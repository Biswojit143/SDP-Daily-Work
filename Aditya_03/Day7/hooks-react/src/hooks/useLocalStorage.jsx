import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    // if value exists in localStorage, use it
    if (storedValue !== null) {
      return JSON.parse(storedValue);
    }

    // otherwise use initial value
    return initialValue;
  });

  const setStorageValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStorageValue];
}

export default useLocalStorage;
