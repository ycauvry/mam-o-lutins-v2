import React from 'react';
import {Link} from 'react-router-dom';

const MenuLink = ({link}) => {
    return (
        <li className="menu-link">
            <Link to={link.path}>
                <i className={link.iconClass}/>
                <span>{link.label}</span>
            </Link>
        </li>
    )
}

export default MenuLink;
