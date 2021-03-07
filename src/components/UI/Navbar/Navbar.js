import React from 'react';
import classes from './Navbar.module.css';

const navbar = () => {
    return (
        <nav>
            <ul className="start">
                <li>YMDB</li>
            </ul>
            <ul className="end">
                <li>Login</li>
                <li>Sign up</li>
            </ul>
        </nav>
    );
}

export default navbar;