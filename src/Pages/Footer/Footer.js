import logo from '../../images/foodmood.png';

import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <div className="footer-area text-white pt-1 bg-primary">
                <div className="container">
                    <div className="row py-1">
                        <div className="col-md-6">
                            <div className="footer-logo">
                                <img className="mb-3" src={logo} alt="" />
                                <p>FoodMood is an international chain of fast food restaurants, which has an experience of opening more than 170 restaurants in 10 countries of the world. Thus the restaurants of the new generation had emerged in 2017....</p>
                            </div>
                            <div className="icons-container d-flex text-center ">
                                <div className="icon">

                                </div>
                                <div className="icon">

                                </div>
                                <div className="icon">

                                </div>
                                <div className="icon">
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-menu-container">
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <Nav.Link href="/home">About Online service</Nav.Link>
                                    <Nav.Link eventKey="link-1">Blog</Nav.Link>
                                    <Nav.Link eventKey="link-2">Order</Nav.Link>
                                    <Nav.Link eventKey="link-3">Add your service</Nav.Link>
                                </Nav>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <Nav defaultActiveKey="/home" className="flex-column justify-content-end">
                                <Nav.Link href="/home">Help</Nav.Link>
                                <Nav.Link eventKey="link-1">Read FAQs</Nav.Link>
                                <Nav.Link eventKey="link-3">Chocolate Review</Nav.Link>
                            </Nav>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col pt-2">
                            <p className="text-white text-center">
                                Copyright &copy;2021 foodmood delivery Service. All rights reserved.
                            </p>
                        </div>
                        <div className="col">
                            <Nav className="justify-content-end" activeKey="/home">
                                <Nav.Item>
                                    <Nav.Link href="/home">Privacy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Terms</Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;