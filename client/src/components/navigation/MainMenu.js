import React, {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import {useEscape} from "../../hooks/useEscape";
import {useClickOutside} from '../../hooks/useClickOutside'
import Hamburger from "./Hamburger";
import '../../styles/navigation/MainMenu.css';

const MainMenu = () => {
    const [active, setActive] = useState(false);
    const menuClass = active ? 'main-menu active' : 'main-menu';
    const wrapperRef = useRef(null);
    useClickOutside(wrapperRef, setActive);
    useEscape(() => setActive(false));

    return (
        <nav ref={wrapperRef}>
            <Hamburger setActive={setActive}/>
            <ul className={menuClass}>
                <li className="menu-link" onClick={() => setActive(false)}>
                    <Link to="/">
                        <i className="far fa-calendar-alt icon"></i>
                        <span>Consulter le planning</span>
                    </Link>
                </li>
                <li className="menu-link" onClick={() => setActive(false)}>
                    <Link to="/gestion-assistantes">
                        <i className="fas fa-users icon"></i>
                        <span>Gestion des assistantes</span>
                    </Link>
                </li>
                <li className="menu-link" onClick={() => setActive(false)}>
                    <Link to="/gestion-enfants">
                        <i className="fas fa-baby icon"></i>
                        <span>Gestion des enfants</span>
                    </Link>
                </li>
                <li className="menu-link" onClick={() => setActive(false)}>
                    <Link to="/gestion-contrats">
                        <i className="fas fa-file-signature icon"></i>
                        <span>Gestion des contrats</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainMenu;