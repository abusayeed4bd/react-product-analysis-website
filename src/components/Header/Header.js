import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'>Home</Link>
            <Link to='/review'>Reviews</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/blog'>Blog</Link>
        </nav>
    );
};

export default Header;