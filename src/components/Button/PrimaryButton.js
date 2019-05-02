import React from 'react';
import { DefaultButton } from './Button';
import styled from 'styled-components';

const StyledPrimaryButton = styled(DefaultButton)`
    color: red;
    background-color: #65f442;
`;

function PrimaryButton(props) {
    return (
        <StyledPrimaryButton onClick={props.onClick}>
            {props.text}
        </StyledPrimaryButton>
    );
}

export default PrimaryButton;