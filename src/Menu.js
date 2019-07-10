import React, { PureComponent } from 'react';
import { NavLink as Link } from 'react-router-dom';

class Menu extends PureComponent {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link exact className="nav-link" to="/">List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/new">New</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu;

