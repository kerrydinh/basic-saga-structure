import styled from 'styled-components';

const Grid = styled.div`
    width:  ${props => (100/12*props.size) + "%"};
    float: left;
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
`;

export default Grid;