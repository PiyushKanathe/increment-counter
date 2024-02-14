import "./App.css";
import countContext from "./context";
import React, { useCallback, useState } from "react";
import ButtonComp from "./ButtonComp";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((pre) => pre + 1);
  }, []);

  const decrementCount = useCallback(() => {
    setCount((pre) => {
      if (pre > 0) {
        return pre - 1;
      }
      return pre
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <countContext.Provider
          value={{ incrementCount, decrementCount }}
        >
          <div>
            <span>{count}</span>
          </div>
          <div className="button-container">
            <ButtonComp>+</ButtonComp>
            <ButtonComp>-</ButtonComp>
          </div>
        </countContext.Provider>
      </header>
    </div>
  );
}

export default App;
