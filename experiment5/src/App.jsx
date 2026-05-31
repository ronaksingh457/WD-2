import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0); // Added default value 0

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1); // Fixed missing minus sign
  };

  const reset = () => {
    setCount(0); // Fixed 'e' to 0 and repaired closing syntax
  };

  return (
    <>
      <div className="container">
        <h1>React Counter App</h1>
        <h2>Count: {count}</h2> {/* Fixed brackets around count */}
        
        {/* Fixed mismatched parenthesis/brackets on all buttons */}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;