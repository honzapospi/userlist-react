import React, { useContext } from 'react';
import { NavLink as Link } from 'react-router-dom';
import ThemeMenu from './ThemeMenu';
import ThemeContext from './ThemeContext';


const Menu = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link exact className="nav-link" to="/">List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/new">New</Link>
                    </li>
                </ul>
                <ThemeMenu />
            </div>
        </nav>
    )
}

export default Menu;

