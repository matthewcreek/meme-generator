import React from 'react';

import troll from '../images/trollface.png';

function Header() {
    return (
        <header className='header'>
            <img className='header--img' src={troll}></img>
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--course'>React Course - Project 3</h4>
        </header>
    )
}

export default Header;