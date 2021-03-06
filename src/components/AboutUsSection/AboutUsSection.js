import React from 'react';
import './AboutUsSection.css';
import Delivery from '../../header-img/delivery.png';
import Hygiene from '../../header-img/hygiene.png';
import FastService from '../../header-img/fast-service.png';
import IconOne from '../../header-img/Group 1133.png';
import IconOne2 from '../../header-img/Group 204.png';
import IconOne3 from '../../header-img/Group 245.png'


const AboutUsSection = () => {
    return (
        <div style={{ marginTop:'100px'}}>
            <div className="about-us-section">
                <div className='why-choose'>
                    <h1>Why You Choose Us</h1><br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nulla quos numquam deleniti facere distinctio pariatur quo illum ullam aspernatur.</p>
                </div>
                
                <div className="our-specialty">

                        <div className='sp-sec-one'>
                            <img src={Delivery} alt=""/>
                            <br/>
                            <br/><br/>
                            <div className='our-specialty-details'>
                                <div>
                                    <img src={IconOne2} alt=""/>
                                </div>
                                <div className="details-text">
                                    <h4>Fast Delivery</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, saepe?</p>
                                    <h3><a href="">See More</a></h3>
                                </div>
                            </div>
                        </div>

                        <div className='sp-sec-two'>
                            <img src={Hygiene} alt=""/>
                            <br/>
                            <br/><br/>
                            <div className='our-specialty-details'>
                                <div>
                                    <img src={IconOne} alt=""/>
                                </div>
                                <div className="details-text">
                                    <h4>A Good Auto Responder</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, saepe?</p>
                                    <h3><a href="">See More</a></h3>
                                </div>
                            </div>
                        </div>

                        <div className='sp-sec-three'>
                            <img src={FastService} alt=""/>
                            <br/>
                            <br/><br/>
                            <div className='our-specialty-details'>
                                <div>
                                    <img src={IconOne3} alt=""/>
                                </div>
                                <div className="details-text">
                                    <h4>Home Delivery</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, saepe?</p>
                                    <h3><a href="">See More</a></h3>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;