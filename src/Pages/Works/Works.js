
import React from 'react';
import './Works.css';

const Works = () => {
    return (
        <div className="works-area py-5 text-center">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className="text-danger">Why you Choice foodmood</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="works-single p-4">
                            <div className="fa-4x theme-color mb-2">
                                <i class="fas fa-heart text-danger"></i>
                            </div>
                            <h2 className="text-info"> Favorite all ages</h2>
                            <p>Choose your favorite meals and restaurants and order online or by phone. It's easy to customize your order.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="works-single p-4">
                            <div className="fa-4x theme-color mb-2">
                                <i class="fas fa-truck text-primary"></i>
                            </div>
                            <h2 className="text-info">We Deliver fast</h2>
                            <p>Our delivery man goes this shop, take this chocolate and delivered meals arrive at your door.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="works-single p-4">
                            <div className="fa-4x theme-color mb-2">
                                <i class="fas fa-handshake text-dark"></i>
                            </div>
                            <h2 className="text-info">Cash in Delivery</h2>
                            <p>We have cash in delivery ser5vice, no cooking, no counting and no cleaning. Enjoy your healthy Chocolate with your family.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;