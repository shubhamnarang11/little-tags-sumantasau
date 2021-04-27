import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [localStorage, setLocalStorage] = useState(() => {
    try {
      
      const value = JSON.parse(JSON.parse(window.localStorage.getItem(key)));
      //const value = window.localStorage.getItem(key);
      if (value) {        
        return value;
      }
      return initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    //window.localStorage.setItem(key, JSON.stringify(JSON.stringify(value)));
    setLocalStorage(value);
  };

  return [localStorage, setValue];
}
