import React from 'react';
import counterData, {CounterProps} from "../data/data";

export type CounterContextProps = {
    counter: CounterProps;
    incrementHandler: () => void;
    decrementHandler: () => void;
}
export const CounterContext = React.createContext(counterData)

const counterReducer = (state: any, action: any): any => {

    const {type} = action;

    switch (type) {
        case 'increment':
            return {...state, value: state.value + 1};
        case 'decrement':
            return {...state, value: state.value - 1};
        case 'reset':
            return {...state, value: counterData.initialValue};
        case 'update-maximum':
            return {...state, maximumValue: action.payload};
        case 'update-start':
            return {...state, initialValue: action.payload};
        default:
            return state;
    }
};


function CounterContextProvider({children}: any) {
    const [store, dispatch] = React.useReducer(counterReducer, counterData);

    ///counter actions
    const incrementHandler = () => {
        dispatch({
            type: 'increment',
        });
    };

    const decrementHandler = () => {
        dispatch({
            type: 'decrement',
        });
    };

    const resetHandler = () => {
        dispatch({
            type: 'reset',
        });
    };

    //settings actions
    const updateMaximumValueHandler = (maximum: number) => {
        dispatch({
            type: 'update-maximum',
            payload: maximum
        });
    }

    const updateStartValueHandler = (start: number) => {
        dispatch({
            type: 'update-start',
            payload: start
        });
    }


    const contextValue: any = {
        store,
        incrementHandler,
        decrementHandler,
        updateMaximumValueHandler,
        updateStartValueHandler,
        resetHandler
    };

    return (
        <CounterContext.Provider value={contextValue}>{children}</CounterContext.Provider>
    );
}

export default CounterContextProvider;