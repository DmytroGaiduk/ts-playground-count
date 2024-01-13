import React, {ChangeEvent, useContext, useId, useState} from 'react'
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
        errorHandler,
        applyChangesHandler
    } = useContext<any>(CounterContext);

    const [startValue, setStartValue] = useState(store.value)
    const [maxValue, setMaxValue] = useState(store.maximumValue)
    const [minValue, setMinValue] = useState(store.minimumValue)

    const valId = useId()
    const maxValId = useId()
    const minValId = useId()

    React.useEffect(() => {
        if (store.isApplied) {
            localStorage.setItem("CounterSettings", JSON.stringify(store))
        }
    }, [store.isApplied])

    const submitCounterSettingsForm = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (startValue < minValue) {
            errorHandler('Provided start value lesser than minValue')
            return
        }

        if (startValue > maxValue) {
            errorHandler('Provided start value bigger than maxValue');
            return
        }
        if (minValue < maxValue) {
            updateMaximumValueHandler(maxValue);
            updateMinimumValueHandler(minValue);
            updateStartValueHandler(startValue);
            applyChangesHandler(true);
        } else {
            errorHandler('Provided minimum value bigger than maximum value')
            return
        }
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        let val = parseInt(e.target.value, 10);

        if (isNaN(val)) {
            val = 0
        }

        switch (e.target.name) {
            case 'startValue':
                setStartValue(val);
                break
            case 'minValue':
                setMinValue(val);
                break
            case 'maxValue':
                setMaxValue(val);
                break
            default:
                throw new Error("Unknown input type")
        }

        errorHandler(null)

        applyChangesHandler(false)
    }

    return (
        <form onSubmit={submitCounterSettingsForm} name={"counterSettingsForm"}>
            <h1>Settings</h1>
            <InputWrapper>
                <label htmlFor={valId}>Start value</label>
                <NumericInput id={valId}
                              placeholder='Enter new value'
                              min={minValue}
                              max={maxValue}
                              value={startValue}
                              name='startValue'
                              onChange={handleChange}/>
            </InputWrapper>

            <InputWrapper>
                <label htmlFor={minValId}>Minimum value</label>
                <NumericInput id={minValId}
                              placeholder='Enter min value'
                              value={minValue}
                              max={maxValue}
                              name='minValue'
                              onChange={handleChange}/>
            </InputWrapper>

            <InputWrapper>
                <label htmlFor={maxValId}>Maximum value</label>
                <NumericInput id={maxValId}
                              placeholder={'Enter max value'}
                              value={maxValue}
                              min={minValue}
                              name='maxValue'
                              onChange={handleChange}
                />
            </InputWrapper>


            <div>
                {/*{store.isApplied.toString()}*/}
                <Button disabled={store.isApplied}  onClick={submitCounterSettingsForm}>Apply</Button>
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