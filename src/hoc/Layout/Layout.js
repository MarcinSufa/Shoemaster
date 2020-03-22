import React from 'react';
import Navbar from '../../Components/Navigation/Navbar/Navbar';
import styled from 'styled-components';

const LayoutStyled = styled.div`
    width: auto;
    margin: 5em 12em;
    text-align: center;
    @media (max-width: 1425px) {
        margin: 5em 2em;
    }
    @media (max-width: 900px) {
        margin: 5em 0;
    }
`;

const Layout = props => {
    return (
        <React.Fragment>
            <Navbar />
            <LayoutStyled>{props.children}</LayoutStyled>
        </React.Fragment>
    );
};

export default Layout;
