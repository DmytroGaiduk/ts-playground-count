import {createStore} from 'redux'
import {rootReducer} from "./rootReducer";

export type CounterProps = {
    value: number;
    maximumValue: number;
    minimumValue: number;
    isApplied: boolean;
    errorMessage: string | null
}



const store = createStore(rootReducer)

export default store;