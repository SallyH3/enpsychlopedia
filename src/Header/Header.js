import React from 'react';
import '../Styles/_Header.scss'

const Header = (props) => {
    return (
    <div className='header-container'>
        <h1 className='header-title'>enpsychlopedia</h1>
        <p className='header-blurb'>A one stop shop to find information about your favorite psych rock bands by genre.</p>
    </div>
    )
}

export default Header;