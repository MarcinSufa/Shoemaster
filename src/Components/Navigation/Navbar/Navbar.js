import React from 'react';
import  './Navbar.modules.css';


const Navbar = () => (
    <nav className='NavBarDiv'>
        <ul className='LeftNavLink'>
        <li>Shoemaster.com</li>
       
        </ul>
        <ul className='RightNavLink'>
        <li>About </li>
        <li>Log-in </li>
        <li>Cart</li> 
        </ul>
    </nav>
);

export default Navbar;