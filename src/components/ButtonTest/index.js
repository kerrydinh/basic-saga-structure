import React from 'react';
//import StyledButton from './StyledButton';
import styled from 'styled-components';

const StyledDefaultButton = styled.button`
    border: 1px solid #ccc;
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
`;

const StyledPrimaryButton = styled(StyledDefaultButton) `
    color: #red;
    color: #eef442;
`;

export function Button(props) {
    return (
        <StyledDefaultButton onClick={props.onClick}>
            {props.text}
        </StyledDefaultButton>
    );
}

export function PrimaryButton(props) {
    return (
        <StyledPrimaryButton onClick={props.onClick}>
            {props.text}
        </StyledPrimaryButton>
    );
}
