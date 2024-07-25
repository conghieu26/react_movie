import { useState } from "react";
import "./App.css";
import "./config/style/modern-nomalize.css";
import "./config/style/tailwind.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
