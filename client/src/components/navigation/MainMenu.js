import React, {useState, useRef} from 'react';
import {useEscape} from "../../hooks/dom/useEscape";
import {useClickOutside} from '../../hooks/dom/useClickOutside'
import Hamburger from "./Hamburger";
import MenuLink from "./MenuLink";
import {MenuDef} from "../../utils/MenuDefinitions";
import '../../styles/navigation/MainMenu.css';

const MainMenu = () => {
    const [active, setActive] = useState(false);
    const menuClass = active ? 'main-menu active' : 'main-menu';
    const wrapperRef = useRef(null);
    useClickOutside(wrapperRef, setActive);
    useEscape(() => setActive(false));

    const menuLinks = Object.values(MenuDef).map((link, idx) =>
        <MenuLink key={idx} link={link} onClick={() => setActive(false)}/>)

    return (
        <nav ref={wrapperRef}>
            <Hamburger setActive={setActive}/>
            <ul className={menuClass}>
                {menuLinks}
            </ul>
        </nav>
    )
}

export default React.memo(MainMenu);
