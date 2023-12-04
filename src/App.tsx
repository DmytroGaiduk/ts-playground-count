import React from 'react';
import './App.css';
import CounterControl from "./components/CounterControl";
import CounterDisplay from "./components/CounterDisplay";

import CounterContextProvider from "./context/CounterContext";

function App() {
  return (
      <CounterContextProvider>
          <div className="App">
              <CounterControl></CounterControl>
              <CounterDisplay></CounterDisplay>
          </div>
      </CounterContextProvider>
  );
}

export default App;
