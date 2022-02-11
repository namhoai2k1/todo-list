import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return <>
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/creat">Create</NavLink>
            </div>
        </nav>
    </>;
}

export default Navbar;
