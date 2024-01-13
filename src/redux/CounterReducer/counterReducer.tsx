import {
    INCREMENT,
    DECREMENT,
    UPDATE_MINIMUM_VALUE,
    UPDATE_MAXIMUM_VALUE,
    UPDATE_START_VALUE,
    RESET_COUNTER,
    APPLY_SETTINGS, CounterActionTypes, CounterState
} from '../actionTypes'


const initialData: CounterState = {
    value: 0,
    minimumValue: 0,
    maximumValue: 10,
    isApplied:false,
}

export function counterReducer(state: CounterState  = initialData, action: CounterActionTypes): CounterState{
    switch (action.type) {
        case INCREMENT: {
            return {...state, value: state.value + 1};
        }
        case DECREMENT: {
            return {...state, value: state.value - 1};
        }
        case UPDATE_MAXIMUM_VALUE: {
            return {...state, maximumValue: action.payload};
        }
        case UPDATE_MINIMUM_VALUE: {
            return {...state, minimumValue: action.payload};
        }
        case UPDATE_START_VALUE: {
            return {...state, value: action.payload};
        }
        case RESET_COUNTER: {
            return {minimumValue: 0, maximumValue: 10, value: 0, isApplied: false, }; //errorMessage: null
        }
        case APPLY_SETTINGS: {
            return {...state, isApplied: action.payload};
        }
        default:
            return state
    }
};