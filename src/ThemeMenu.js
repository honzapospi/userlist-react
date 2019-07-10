import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemeMenu = () => {

    const { setTheme } = useContext(ThemeContext);

    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <span onClick={() => setTheme('dark')} className="nav-link">Dark</span>
            </li>
            <li className="nav-item">
                <span onClick={() => setTheme('light')} className="nav-link">Light</span>
            </li>
        </ul>
    )
}

export default ThemeMenu;