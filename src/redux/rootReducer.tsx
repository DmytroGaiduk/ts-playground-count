import {combineReducers} from 'redux';
import {errorReducer} from "./ErrorReducer/errorReducer";
import {counterReducer} from "./CounterReducer/counterReducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    error: errorReducer
})
