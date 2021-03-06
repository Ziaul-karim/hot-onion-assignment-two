import React from 'react';
import './Footer.css';
import Logo from '../../header-img/logo.png'

const Footer = () => {
    return (
        <div>
            <section className='first-footer'>
                <div className="footer-logo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="footer-spec">
                    <ul>
                        <li><a href="">About Online Food</a></li>
                        <li><a href="">Read Our Blog</a></li>
                        <li><a href="">Sign Up to deliver</a></li>
                        <li><a href="">Add Your Restaurant</a></li>
                    </ul>
                </div>
                <div className="footer-spec">
                    <ul>
                        <li><a href="">Get Help</a></li>
                        <li><a href="">Read FAQ's</a></li>
                        <li><a href="">View All Cities</a></li>
                        <li><a href="">Restaurants Near Me</a></li>
                    </ul>
                </div>
            </section>
            <section className='second-footer'>
                <div className='copyright'>
                    <p><small>Copyright &copy; 2021 Zia's Food</small></p>
                </div>
                <div className='conditions'>
                    <ul className='footer-nav-links'>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>Pricing</li>
                    </ul>
                </div>
            </section>
        </div>
        
    );
};

export default Footer;