import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';


const AddFood = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://frightful-eyeballs-23644.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-food py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h2 className="text-danger">Chocolate items Add</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="single-add-food">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control mb-3" {...register("key")} placeholder="Key" required />
                                <input className="form-control mb-3" {...register("name")} placeholder="Name" required />
                                <input className="form-control mb-3" type="number" {...register("price")} placeholder="price" required />
                                <input className="form-control mb-3" type="text" {...register("restaurantName")} placeholder="restaurant name" />
                                <textarea className="form-control mb-3" {...register("description")} placeholder="Description" required />

                                <input className="form-control mb-3" {...register("img")} placeholder="image url" />
                                <input type="submit" className="bg-warning border-0 p-2 text-white" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFood;