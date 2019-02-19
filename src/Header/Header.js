import React from 'react';
import Search from '../Search/Search.js';
import '../Styles/_Header.scss'

const Header = (props) => {
    return (
    <div className='header-container'>
        <h1 className='header-title'>enpsychlopedia</h1>
        <Search
        />
    </div>
    )
}

export default Header;