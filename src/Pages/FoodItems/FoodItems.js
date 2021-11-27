import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleMenu from '../SingleMenu/SingleMenu';
import './FoodItems.css';

const FoodItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://frightful-eyeballs-23644.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    // 51 4
    return (
        <div className="add-food py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h2 className="text-danger">Our Discount Chocolate Items</h2>
                        </div>
                    </div>
                </div>
                {
                    items.length === 0 ?
                        <Spinner animation="border" />
                        :
                        <div className="row bg-dark">
                            {
                                items.map(item => <SingleMenu
                                    key={item._id}
                                    item={item}
                                ></SingleMenu>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default FoodItems;