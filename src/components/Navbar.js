import React from 'react';
import { Link,NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;