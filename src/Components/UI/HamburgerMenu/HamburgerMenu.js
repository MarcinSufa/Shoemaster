import React from 'react';

import './HamburgerMenu.css';

const hamburgerMenu = (props) => (
    <div className={'Hamburger '+ props.className} onClick={props.clicked}>
    <span></span>
    <span></span>
    <span></span>
    </div>
);

export default hamburgerMenu;