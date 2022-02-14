import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <h1>The Dojo Blog</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/creat">New Blog</Link>
                    <Link to="/author">Author</Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
