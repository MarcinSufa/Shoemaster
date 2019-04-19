import React from 'react';
import  './Navbar.modules.css';
import { NavLink } from 'react-router-dom'




const Navbar = () =>  {

        return (
            <nav className='NavBarDiv'>
                <ul className='LeftNavLink'>
                <NavLink to="/" className="">Shoemaster.com</NavLink>
                </ul>
                <ul className='RightNavLink'>
                <li>About </li>
                <li>Log-in </li>
                <li><NavLink to="/Cart" className="">Cart</NavLink></li>
                </ul>
            </nav>
        );
}


export default Navbar;