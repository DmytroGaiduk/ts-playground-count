import * as React from 'react'
import counterContext, {CounterContext} from "../context/CounterContext";

function CounterControl() {
    const { store, updateMaximumValueHandler,updateStartValueHandler } = React.useContext<any>(CounterContext);


    const [startValue, setStartValue] = React.useState(store.initialValue)
    const [maxValue, setMaxValue] = React.useState(store.maximumValue)


    const valId = React.useId()
    const maxValId = React.useId()

    const submitForm = (e:any)=>{
        e.preventDefault();
        updateMaximumValueHandler(maxValue);
        updateStartValueHandler(startValue);
    }

    return (
        <form onSubmit={submitForm}>
            <h3>Settings</h3>
            <div>
                <label htmlFor={valId}>Start value</label>
                <input id={valId} type={"number"} placeholder={'Enter new value'} value={startValue}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                           setStartValue(parseInt(e.target.value, 10))
                       }}/>
            </div>
            <div>
                <label htmlFor={maxValId}>Maximum value</label>
                <input id={maxValId} type={"number"} placeholder={'Enter max value'} value={maxValue}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                           setMaxValue(parseInt(e.target.value, 10))
                       }}/>
            </div>
            <div>
                <button type={'button'} onClick={submitForm}>Set</button>
            </div>
        </form>
    );
}

export default CounterControl;