import React from "react";
import {NavLink} from "react-router-dom";
import {routesConfig} from "../../utils/definitions/routes";
import "../../styles/components/navigation/Sidebar.css";

const Sidebar = () => {
    return (
        <nav id="sidebar">
            <ul className="sidebar-wrapper">
                {
                    routesConfig.map((route, idx) => {
                        return (
                            <li key={idx} className="sidebar-link">
                                <NavLink exact={true} to={route.path}>
                                    <i className={route.icon}/>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
};

export default Sidebar;