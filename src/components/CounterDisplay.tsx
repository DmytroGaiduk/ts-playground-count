import React from 'react';
import {CounterContext,CounterContextProps} from "../context/CounterContext";


function CounterDisplay() {
    const { store, incrementHandler, decrementHandler, resetHandler } = React.useContext<any>(CounterContext);

    return (
        <div>
            <h1>{store.value}</h1>
            <button type={'button'} onClick={decrementHandler}>Decrement</button>
            <button type={'button'} onClick={incrementHandler}>Increment</button>
            <button type={'button'} onClick={resetHandler}>Reset to initial value</button>
        </div>
    );
}

export default CounterDisplay;