import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className="banner-area d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row col">
                        <div className="banner-content text-center text-info">
                            <h1>FOOD MOOD</h1>
                            <h1>Food Delivery & Services</h1>
                            <div className="searchBox mt-4">
                                <h3 className="text-danger fs-1">You can buy Easily and Trustly</h3>
                                <div className="input-group mt-4 mb-3 mx-auto">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;