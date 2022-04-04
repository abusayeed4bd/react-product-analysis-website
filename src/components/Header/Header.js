import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/review'>Reviews</CustomLink>
            <CustomLink to='/dashboard'>Dashboard</CustomLink>
            <CustomLink to='/blog'>Blog</CustomLink>
        </nav>
    );
};

export default Header;