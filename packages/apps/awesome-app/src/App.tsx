import { useState } from "react";
import "./App.css";

import Header from "@np/ui/header";
import Footer from "@np/ui/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <h1>Count is {count}</h1>
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
