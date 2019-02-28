import React from 'react';

const Navbar = () => {
    return (
        <div className="nav-wrapper red">
            <div className="container">
                <a className="brand-logo">Poke Times</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;