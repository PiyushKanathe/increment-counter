import "./App.css";
import countContext from "./context";
import React, { useState } from "react";
import ButtonComp from './ButtonComp';

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
      <countContext.Provider value={{count, handleCount}}>
        <ButtonComp></ButtonComp>
      </countContext.Provider>
      </header>
    </div>
  );
}

export default App;
