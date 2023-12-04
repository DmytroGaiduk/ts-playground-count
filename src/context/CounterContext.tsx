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
            if (state.value < state.maximumValue) {
                return {...state, value: state.value + 1, errorMessage: null};
            } else {
                return {...state, errorMessage: `Maximum value! Cannot increment bigger than ${state.maximumValue}.`};
            }
        }
        case 'decrement': {
            if (state.value > state.minimumValue) {
                return {...state, value: state.value - 1, errorMessage: null};
            } else {
                return {...state, errorMessage: `Minimum value! Cannot decrement below ${state.minimumValue}.`};
            }
        }
        case 'reset': {
            return {...state, value: 0, errorMessage: null};
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


    //error
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
        resetHandler
    };

    return (
        <CounterContext.Provider value={contextValue}>{children}</CounterContext.Provider>
    );
}

export default CounterContextProvider;


// const counterReducer = (state: any, action: any): any => {
//
//     const {type} = action;
//
//     switch (type) {
//         case 'increment': {
//             if (state.value < state.maximumValue) {
//                 return {...state, value: state.value + 1, errorMessage: null};
//             } else {
//                 return {...state, errorMessage: 'Cannot increment bigger than the maximum value.'};
//             }
//         }
//         case 'decrement': {
//             if (state.value > state.minimumValue) {
//                 return {...state, value: state.value - 1, errorMessage: null};
//             } else {
//                 return {...state, errorMessage: 'Cannot decrement below the minimum value.'};
//             }
//         }
//         case 'reset': {
//             return {...state, value: counterData.initialValue, errorMessage: null};
//         }
//         case 'update-maximum': {
//             if (action.payload > state.minimumValue) {
//                 return {...state, maximumValue: action.payload, errorMessage: null};
//             } else {
//
//                 return {...state, errorMessage: 'Maximum value must be greater than the minimum value.'};
//             }
//         }
//         case 'update-minimum':{
//             if (action.payload < state.maximumValue) {
//                 return {...state, minimumValue: action.payload, errorMessage: null};
//             } else {
//                 return {...state, errorMessage: 'Minimum value must be smaller than the maximum value.'};
//             }
//         }
//         case 'update-start': {
//             if (action.payload >= state.minimumValue && action.payload <= state.maximumValue) {
//                 return {...state, value: action.payload, errorMessage: null};
//             } else {
//                 return {
//                     ...state,
//                     errorMessage: 'Start value must be greater than minimum value and lesser than the maximum value'
//                 }
//             }
//         }
//         case 'update-error-message':
//             return {...state, errorMessage: action.payload}
//         default:
//             return state;
//     }
// };