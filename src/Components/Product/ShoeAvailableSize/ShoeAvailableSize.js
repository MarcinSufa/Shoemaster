import React from 'react';
import styled from 'styled-components';

const StyledAvailableSize = styled.div`
    display: inline-flex;
    border: 1px solid #6a1b9a;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 25px;
    color: #6a1b9a;
    font-size: 0.8rem;
`;

const ShoeAvailableSize = props => {
    console.log('soeAvailable props', props);
    return <StyledAvailableSize>{props.children}</StyledAvailableSize>;
};

export default ShoeAvailableSize;
