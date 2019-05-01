import React from 'react';
import { DefaultButton } from './Button';
import styled from 'styled-components';

const StyledSecondaryButton = styled(DefaultButton)`
    color: red;
    background-color: #41dff4;
`;

function PrimaryButton(props) {
    return (
        <StyledSecondaryButton onClick={props.onClick}>
            {props.text}
        </StyledSecondaryButton>
    );
}

export default PrimaryButton;