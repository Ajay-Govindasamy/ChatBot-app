import React from 'react';
import {Link} from "react-router-dom";

const Header = () => (
    <nav>
        <div style={{backgroundColor: '#00c853'}} className="nav-wrapper">
            <Link to={'/'} className="brand-logo center">GUVI</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">

                <li><Link to={'/about'}>About Us</Link></li>
            </ul>
        </div>
    </nav>
)

export default Header;

