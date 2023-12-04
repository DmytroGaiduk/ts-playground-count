import React from 'react';
import './App.css';
import CounterControl from "./components/CounterControl";
import CounterDisplay from "./components/CounterDisplay";
import CounterContextProvider from "./context/CounterContext";
import s from 'styled-components'

function App() {
    return (
        <CounterContextProvider>
            <div className="App">
                <Panel>
                    <CounterControl></CounterControl>
                </Panel>
                <Panel>
                    <CounterDisplay></CounterDisplay>
                </Panel>
            </div>
        </CounterContextProvider>
    );
}

const Panel = s.div`
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: white;
    width: 360px;
`

export default App;
