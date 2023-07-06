import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'
const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo"><Link to="/" style={{textDecoration:'none', color:'#EEA47F'}}>TaskCart</Link></div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>

    )
}

export default Nav