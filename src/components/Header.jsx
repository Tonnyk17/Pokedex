import React from "react";
import { Link } from "react-router-dom"
import "../assets/styles/components/Header.css";

const Header = () => (
    <>
        <header className="header">
            <nav className="navbar-container">
                <h1 className="header-title"><Link to="/" className="item-link">Pokedex</Link></h1>
                        <input type="checkbox" name="menu-button" className="menu-button"/>
                        <label htmlFor="menu-button" className="header-menu-label">
                            <i className="fas fa-bars header-icon"/>
                        </label>
                        <ul className="header-list">
                            <li className="header-list-item">
                                <Link to="/" className="item-link">Inicio</Link>
                            </li>
                        </ul>
                   
            </nav>
        </header>
    </>
);

export default Header;