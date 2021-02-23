import React from 'react';
import './Header.css'
import Logo from '../../header-img/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = (props) => {
    const {cart} = props;
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />
    return (
        <nav className="nav-bar">
            <div className="nav-logo">
                <Link to='/home'><img src={Logo} alt=""/></Link>
            </div>
                <ul className="nav-links">
                    <li><Link to="/cart" style={{color:'red',}}>{cartIcon}<span><small>{cart.length}</small></span></Link></li>
                    <Link to='/login'><li className="btn-main">Login</li></Link>
                    <li className="btn-main"><a href="">Sign Up</a></li>
                </ul>
            
        </nav>
    );
};

export default Header;