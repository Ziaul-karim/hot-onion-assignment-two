import React, { useContext, useState } from 'react';
import './Header.css'
import Logo from '../../header-img/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = (props) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    const {cart} = props;
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />
    return (
        <nav className="nav-bar d-flex">
            <div className="nav-logo">
                <Link to='/home'><img src={Logo} alt=""/></Link>
            </div>
            <div>
                <p>{loggedInUser.name}</p>
            </div>
                <ul className="nav-links">
                    <li><Link to="/cart" style={{color:'grey',}}>{cartIcon}<span></span></Link><small>{cart.length}</small></li>
                    {
                        loggedInUser.isSuccess ? 
                        <button onClick={()=> setLoggedInUser({})} className='btn-main'>Log Out</button> : 
                        <Link to='/login' className='btn-main' style={{textDecoration:'none', color:'#ececec'}}><li>Login</li></Link>
                    }
                    
                </ul>            
        </nav>
    );
};

export default Header;