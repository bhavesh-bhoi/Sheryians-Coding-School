import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [InputValue, setInputValue] = useState("");

  // use effect is used when you want to side load some activity
  useEffect(() => {
    console.log("useEffect is Running");
  }, [count]); // [count] -> agar me dependency banata hoon to bas usi ke liye hi useEffect chalega
  // agar dependency empty hai to useEffect nahi chalega kisi bhi chiz ke liye

  return (
    <div>
      <input
        type="text"
        value={InputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count +
      </button>
    </div>
  );
}

export default App;
