import React, { useState, useEffect } from "react";
import "./styles.css";

const useTimeout = (delay = 0) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setReady(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return ready;
};

export default function App() {
  const ready = useTimeout(2000);

  return (
    <div className="App">
      <h1>Ready?</h1>
      <p className="status">{ready ? "yes" : "no"}</p>
    </div>
  );
}
