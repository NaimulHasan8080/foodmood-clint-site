import React from 'react';
import { Link } from 'react-router-dom';
import './SingleMenu.css';

const SingleMenu = ({ item }) => {
    const { _id, name, price, description, img } = item;
    return (
        <div className="col-lg-4">
            <div className="card mb-3 single-service  p-3">
                <img src={img} alt="" />
                <div className="d-flex justify-content-between my-3">
                    <div className="text-center">
                        <h3 className="my-3 text-info ">{name}</h3>
                    </div>

                </div>
                <h6>Price: {price}</h6>
                <p className="text-justify">{description.slice(0, 100)}</p>
                <div className="text-center">
                    <Link to={`/placeorder/${_id}`}>
                        <button className="btn text-center text-white bg-primary">Order Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleMenu;