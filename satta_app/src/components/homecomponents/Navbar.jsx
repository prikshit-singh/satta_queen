import React from 'react';
import { NavLink } from 'react-router-dom'
import '../../styles/navbar.css';

function Navbar(props) {
    return (
        <div>
            <div className="mainNav">
                <li><NavLink className='link' to="/" style={({ isActive }) => ({
                    color: isActive ? 'black' : 'green'
                })}>
                    Home
                </NavLink></li>
                <li><NavLink className='link' to="/contact" style={({ isActive }) => ({
                    color: isActive ? 'black' : 'white'
                })}>
                    Contact
                </NavLink></li>
                <li><NavLink className='link' to="/about" style={({ isActive }) => ({
                    color: isActive ? 'black' : 'white'
                })}>
                    About
                </NavLink></li>
            </div>
        </div>
    );
}

export default Navbar;