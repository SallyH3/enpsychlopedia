import React from 'react';
import Search from '../Search/Search.js';
import '../Styles/Header.scss'

const Header = (props) => {
    return (
    <div className='header-container'>
        <h1>enpsychlopedia</h1>
        <Search
        />
    </div>
    )
}

export default Header;