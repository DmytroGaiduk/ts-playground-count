import React from 'react';
import s from 'styled-components'

type ButtonProps = {
    disabled?: boolean;
    onClick: (e: any) => void;
    children: React.ReactNode
}

function Button(props: ButtonProps) {
    return (
        <StyledButton type={'button'} disabled={props.disabled} onClick={props.onClick}>{props.children}</StyledButton>
    );
}

const StyledButton = s.button`
   font-size:1rem;
   padding: 6px 12px;
   border: 1px solid #ccc;
   border-radius: 3px;
   cursor: pointer;
   
   &[disabled]{
        cursor: not-allowed;
        opacity: 0.9
   }
`

export default Button;