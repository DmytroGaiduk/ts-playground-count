import React from 'react'
import Button from "../ui/Button";
import s from 'styled-components'

import {CounterContext} from "../context/CounterContext";
import NumericInput from "../ui/NumericInput";

function CounterControl() {
    const {
        store,
        updateMaximumValueHandler,
        updateMinimumValueHandler,
        updateStartValueHandler,
        errorHandler
    } = React.useContext<any>(CounterContext);

    const [startValue, setStartValue] = React.useState(0)

    //local to sync with store?
    const [maxValue, setMaxValue] = React.useState(store.maximumValue)
    const [minValue, setMinValue] = React.useState(store.minimumValue)

    //применяется на сабми формы
    const [applied, setApplied] = React.useState(false)

    const valId = React.useId()
    const maxValId = React.useId()
    const minValId = React.useId()

    React.useEffect(() => {
        //это ок?

        if ((minValue >= maxValue) || (maxValue <= minValue)) {
            errorHandler('Incorrect value')
        } else if ((startValue > maxValue) || (startValue < minValue)) {
            errorHandler('Provided start value is out of bounds')
        } else {
            errorHandler(null)
        }
    }, [minValue, maxValue, startValue])

    const submitCounterSettingsForm = (e: React.ChangeEvent<any>) => {
        e.preventDefault();


        //как сократить?
        updateMaximumValueHandler(maxValue);
        updateMinimumValueHandler(minValue);
        updateStartValueHandler(startValue);
        //
        setApplied(true)
    }

    return (
        <form onSubmit={submitCounterSettingsForm} name={"counterSettingsForm"}>
            <h1>Settings</h1>
            <InputWrapper>
                <label htmlFor={valId}>Start value</label>
                <NumericInput id={valId} placeholder={'Enter new value'}
                              min={minValue}
                              max={maxValue}
                              value={startValue}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                  setStartValue(parseInt(e.target.value, 10))
                                  setApplied(false)
                              }}/>
            </InputWrapper>

            <InputWrapper>
                <label htmlFor={minValId}>Minimum value</label>
                <NumericInput id={minValId} placeholder={'Enter min value'}
                              value={minValue}
                              max={maxValue}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                  setMinValue(parseInt(e.target.value, 10))
                                  setApplied(false)
                              }}/>
            </InputWrapper>

            <InputWrapper>
                <label htmlFor={maxValId}>Maximum value</label>
                <NumericInput id={maxValId} placeholder={'Enter max value'}
                              value={maxValue}
                              min={minValue}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                  setMaxValue(parseInt(e.target.value, 10))
                                  setApplied(false)
                              }}/>
            </InputWrapper>

            <div>
                <Button disabled={store.errorMessage || applied} onClick={submitCounterSettingsForm}>Apply</Button>
            </div>
        </form>
    );
}

const InputWrapper = s.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 20px 0px;
    
    & label {
        font-weight: 500
    }
`

export default CounterControl;