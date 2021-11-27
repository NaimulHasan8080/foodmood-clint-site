import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <>
            <div className="blog-area py-5">
                <div className="container">
                    <div className="row justify-content-center py-5">
                        <div className="col-md-6">
                            <div className="section-title text-center">
                                <h1 className="text-danger">Our Upcoming Chocolate</h1>
                                <p>Our upcoming Chocolate are published in this area. Every latest items are instantly published this area.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-blog">
                                <div className="news-img">
                                    <img src="https://image.freepik.com/free-photo/chocolate-bars-with-nuts-marble-surface_114579-73616.jpg" alt="" />

                                </div>
                                <h3 className="my-3 text-info">Alpinlive Chocolate</h3>
                                <p>Alpinlive a chili is thickened with a flour-base, most chili is naturally gluten-free. This recipe is one of them—made with dark-meat turkey, beans, green chiles, and loaded with vegetables. Top this turkey and white bean chili with toppings like red onion, jalapeño, and avocado for a bowl bursting with flavo</p>
                                <button className="btn theme-bg text-white">Details</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-blog">
                                <div className="news-img">
                                    <img src="https://image.freepik.com/free-vector/3d-splashes-melted-chocolate-milk-with-falling-pieces-chocolate-bars_1441-836.jpg" alt="" />

                                </div>
                                <h3 className="my-3 text-info">Pran Milk Candy</h3>
                                <p>Pran Milk Candy gluten-free noodles here! This gluten-free macaroni and cheese recipe will satisfy that craving you've had for this creamy dish. This gluten-free macaroni and cheese is packed with chard—which brings a lot of great nutrients to this dish—and topped with a flavorful sage breadcrumb. </p>
                                <button className="btn theme-bg text-white">Read More</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-blog">
                                <div className="news-img">
                                    <img src="https://image.freepik.com/free-vector/promotion-banner-chocolate-paste-nut-butter-plastic-jar_1441-2450.jpg" alt="" />

                                </div>
                                <h3 className="my-3 text-info">Paste Chocolate</h3>
                                <p>Paste Chocolate combination is one of our favorites, you really could try any combination that you desire. Not a fan of broccoli? Try adding some asparagus spears, Brussels sprouts, or green beans. Don't like sweet potato? Roast up some regular potato bits, or even some chickpeas, sweet potato</p>
                                <button className="btn theme-bg text-white">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;