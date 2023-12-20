import React from 'react';
import s from 'styled-components';

type NumericInputProps = {
    id: string
    value: number
    onChange: any;
    placeholder?: string
    min?: number;
    max?: number;
}

function NumericInput({id, min, max, placeholder, onChange, value}: NumericInputProps) {
    return (
        <>
            <StyledInput type={'number'} id={id}
                         min={min}
                         max={max}
                         placeholder={placeholder}
                         onChange={onChange}
                         value={value}/>
        </>
    );
}

const StyledInput = s.input`
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-radius: 3px;
`

export default NumericInput;