//counter
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const UPDATE_MINIMUM_VALUE = 'UPDATE-MINIMUM'
export const UPDATE_MAXIMUM_VALUE = 'UPDATE-MAXIMUM'
export const UPDATE_START_VALUE = "UPDATE-START"
export const RESET_COUNTER = 'RESET';
export const APPLY_SETTINGS = "APPLY-CHANGES";

//error
export const SET_ERROR = "SET-ERROR-MESSAGGE"


//states
export type CounterState = {
    value: number;
    minimumValue: number;
    maximumValue: number;
    isApplied: boolean;
}

export type ErrorState = {
    errorMessage: string | null;
}


//Action types
export type IncrementAction = {
    type: typeof INCREMENT;
}

export type DecrementAction = {
    type: typeof DECREMENT;
}

export type UpdateMaximumValueAction = {
    type: typeof UPDATE_MAXIMUM_VALUE;
    payload: number;
}

export type UpdateMinimumValueAction = {
    type: typeof UPDATE_MINIMUM_VALUE;
    payload: number;
}

export type UpdateStartValueAction = {
    type: typeof UPDATE_START_VALUE;
    payload: number;
}

export type ResetCounterAction = {
    type: typeof RESET_COUNTER;
}

export type ApplySettingsAction = {
    type: typeof APPLY_SETTINGS;
    payload: boolean;
}

export type ErrorAction = {
    type: typeof SET_ERROR,
    payload: string | null
}

//action types
export type CounterActionTypes =
    | IncrementAction
    | DecrementAction
    | UpdateMaximumValueAction
    | UpdateMinimumValueAction
    | UpdateStartValueAction
    | ResetCounterAction
    | ApplySettingsAction;

export type ErrorActionTypes = ErrorAction