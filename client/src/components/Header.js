import React from 'react';
import {Link} from "react-router-dom";

const Header = () => (
    <nav>
        <div className="nav-wrapper #09e176 teal accent-3">
            <Link to={'/'} className="brand-logo center">GUVI</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">

                <li><Link to={'/about'}>About Us</Link></li>
            </ul>
        </div>
    </nav>
)

export default Header;