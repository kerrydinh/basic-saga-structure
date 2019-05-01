import React from 'react';
import styled from 'styled-components';
import defaultStyle from './defaultStyle';

const StyledDefaultButton = styled.button`
    ${defaultStyle};
`;

function Button(props) {
    return (
        <StyledDefaultButton onClick={props.onClick}>
            {props.text}
        </StyledDefaultButton>
    );
}

export default Button;