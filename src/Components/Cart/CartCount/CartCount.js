import React from 'react';
import styled from 'styled-components';

const CartCount = props => {
    const StyledButton = styled.button`
        border: 1px solid ${({ theme }) => theme.colors.violet};
        padding: 0px;
        margin: auto;
        border-radius: 25px;
        height: 20px;
        width: 20px;
        color: ${({ theme }) => theme.colors.violet};
        color: white;
        background-color: ${({ theme }) => theme.colors.violet};
        z-index: 449;
        text-align: center;
        vertical-align: middle;

        @media (max-width: 620px) {
            margin: 0;
        }
    `;

    return <StyledButton>{props.count}</StyledButton>;
};

export default CartCount;
