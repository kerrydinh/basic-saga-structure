import styled from 'styled-components';
import defaultStyle from './defaultStyle';

const StyledPrimaryButton = styled.button`
    ${defaultStyle};
`;


function PrimaryButton(props) {
    return (
        <StyledPrimaryButton onClick={props.onClick}>
            {props.text}
        </StyledPrimaryButton>
    );
}

export default PrimaryButton;