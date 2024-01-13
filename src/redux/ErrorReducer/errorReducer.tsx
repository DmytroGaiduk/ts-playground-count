import {ErrorActionTypes, ErrorState, SET_ERROR} from '../actionTypes'

const initialErrorState = {
    errorMessage: null,
}

export function errorReducer(state: ErrorState = initialErrorState, action: ErrorActionTypes) {
    switch (action.type) {
        case SET_ERROR:
            return {...state, errorMessage: action.payload}
        default:
            return state;
    }

}