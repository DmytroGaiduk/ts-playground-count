import React from 'react';
import s from 'styled-components';

type NumericInputProps = {
    id?: any
    placeholder?: string
    value: number
    onChange: any;
}

function NumericInput(props: NumericInputProps) {
    return (
        <>
            <StyledInput type={'number'} id={props.id}
                         placeholder={props.placeholder}
                         onChange={props.onChange}
                         value={props.value}/>
        </>
    );
}

const StyledInput = s.input`
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-radius: 3px;
`

export default NumericInput;