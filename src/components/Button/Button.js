import React from 'react';
import styled from 'styled-components';

export const DefaultButton = styled.button`
    border: 1px solid #ccc;
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    &:hover {
        background: #ccc;
    }
`;

function Button(props) {
    return (
        <DefaultButton onClick={props.onClick}>
            {props.text}
        </DefaultButton>
    );
}

export default Button;