import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, ReactNode} from 'react';
import s from 'styled-components';


type DefaultInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type NumericInputProps = Omit<DefaultInputProps, 'type'> & {
    onChangeValue?: (value: string) => void
}

function NumericInput({onChangeValue, onChange, ...restProps}: NumericInputProps) {

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
       onChangeValue?.(e.target.value)
       onChange?.(e)
   }

    return (
            <StyledInput type={'number'}
                         onChange={handleChange}
                         {...restProps}
            />

    );
}

const StyledInput = s.input`
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-radius: 3px;
`

export default NumericInput;