import React, { useState } from 'react';
import axios from 'axios';

const NewProductForm = () => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");

    let [errors, setErrors] = useState({});

    const addProduct = (e) => {
        e.preventDefault();
        let formInfo = { title, price, description };

        axios.post("http://localhost:8000/api/products", formInfo)
            .then(res => {
                console.log("Response: ", res);

                if(res.data.error) {
                    setErrors(res.data.error.errors);
                }

                else{
                    setTitle("");
                    setPrice("");
                    setDescription("");
                }

            })
            .catch(err => console.log("Error: ", err));
    }

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={addProduct}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" placeholder="Enter title" />
                    <p className="text-danger">{errors.title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" placeholder="Enter price" />
                    <p className="text-danger">{errors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default NewProductForm;