import React, { useState } from 'react';
import axios from 'axios';

const NewProductForm = (props) => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");
    let {newProductToggle, setNewProductToggle} = props;

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

                    setNewProductToggle(!newProductToggle);

                }

            })
            .catch(err => console.log("Error: ", err));
    }

    const changeHandler = (e) => {
        if(e.target.name === "title") {
            setTitle(e.target.value);
        }
        else if(e.target.name === "price") {
            setPrice(e.target.value);
        }
        else if(e.target.name === "description") {
            setDescription(e.target.value);
        }
    }

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={addProduct}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" onChange={changeHandler} name="title" className="form-control" placeholder="Enter title" />
                    <p className="text-danger">{errors.title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" onChange={changeHandler} name="price" className="form-control" placeholder="Enter price" />
                    <p className="text-danger">{errors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea onChange={changeHandler} name="description" className="form-control" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default NewProductForm;