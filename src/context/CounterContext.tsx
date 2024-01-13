import React from 'react';
import counterData, {CounterProps} from "../data/data";

export type CounterContextProps = {
    counter: CounterProps;
    incrementHandler: () => void;
    decrementHandler: () => void;
    //TODO: add other
}

export const CounterContext = React.createContext(counterData)

const counterReducer = (state: any, action: any): any => {

    const {type} = action;

    switch (type) {
        case 'increment': {
            return {...state, value: state.value + 1};
        }
        case 'decrement': {
            return {...state, value: state.value - 1};
        }
        case 'reset': {
            return {minimumValue:0,maximumValue:10, value: 0, isApplied: false,errorMessage: null};
        }
        case 'apply-changes': {
            return {...state, isApplied: action.payload};
        }
        case 'update-maximum': {
            return {...state, maximumValue: action.payload};
        }
        case 'update-minimum': {
            return {...state, minimumValue: action.payload};
        }
        case 'update-start': {
            return {...state, value: action.payload};
        }
        case 'update-error-message':
            return {...state, errorMessage: action.payload}
        default:
            return state;
    }
};


function CounterContextProvider({children}: any) {

    const savedData = null//localStorage.getItem("CounterSettings")
    const initState = savedData ? JSON.parse(savedData) : counterData
    const [store, dispatch] = React.useReducer(counterReducer, initState)

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
        localStorage.clear()
    };

    const updateMaximumValueHandler = (maximum: number) => {
        dispatch({
            type: 'update-maximum',
            payload: maximum
        });
    }

    const updateMinimumValueHandler = (minimum: number) => {
        dispatch({
            type: 'update-minimum',
            payload: minimum
        });
    }

    const updateStartValueHandler = (start: number) => {
        dispatch({
            type: 'update-start',
            payload: start
        });
    }

    const applyChangesHandler = (nextState: boolean) => {
        dispatch({
            type: "apply-changes",
            payload:nextState
        })
    }

    const errorHandler = (error: string | null) => {
        dispatch({
            type: "update-error-message",
            payload: error
        })
    }

    const contextValue: any = {
        store,
        incrementHandler,
        decrementHandler,
        updateMaximumValueHandler,
        updateMinimumValueHandler,
        updateStartValueHandler,
        errorHandler,
        applyChangesHandler,
        resetHandler
    };

    return (
        <CounterContext.Provider value={contextValue}>{children}</CounterContext.Provider>
    );
}

export default CounterContextProvider;
