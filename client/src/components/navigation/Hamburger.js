import React from 'react';
import '../../styles/navigation/Hamburger.css';

const Hamburger = ({setActive}) => {
    return (
        <div id="trigger-menu" onClick={() => setActive(true)}>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
        </div>
    )
}

export default Hamburger;