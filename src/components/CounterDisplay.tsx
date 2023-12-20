import React from 'react';
import s from 'styled-components'
import {CounterContext} from "../context/CounterContext";
import Button from "../ui/Button";
import {Plus, Minus, RefreshCw} from 'react-feather'


function CounterDisplay() {
    const {store, incrementHandler, decrementHandler, resetHandler} = React.useContext<any>(CounterContext);

    return (
        <div>
            <OutputWrapper>
                <h1>{store.value}</h1>
            </OutputWrapper>

            <BtnWrapper>
                <ControlButtonsWrapper>
                    <Button disabled={store.errorMessage} onClick={decrementHandler}><Minus
                        size={16}/>Decrement</Button>
                    <Button disabled={store.errorMessage} onClick={incrementHandler}><Plus size={16}/>Increment</Button>
                </ControlButtonsWrapper>
                <Button onClick={resetHandler}><RefreshCw size={16}/>Reset</Button>
            </BtnWrapper>

            <ErrorMessagePlaceholder>
                {store.errorMessage && <ErrorMessage>{store.errorMessage}</ErrorMessage>}
            </ErrorMessagePlaceholder>
        </div>
    );
}


const OutputWrapper = s.div`
    text-align: center;
    
    h1 {
        font-size: 4rem
    }
`

const BtnWrapper = s.div`
    border: 1px solid #ccc;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius:12px;
    
    button {
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: center;
    }
`

const ControlButtonsWrapper = s.div`
    display: flex;
    gap: 10px;
`

const ErrorMessagePlaceholder = s.div`
    min-height:45px;
    margin-top:10px;
`

const ErrorMessage = s.div`
    color: crimson;
`

export default CounterDisplay;