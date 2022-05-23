import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

const EditProductForm = () => {

    const { _id } = useParams();

    const [productInfo, setProductInfo] = useState({})

    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log("Response: ", res)
                setProductInfo(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${_id}`, productInfo)
            .then(res => {
                console.log("Response: ", res)
                history.push('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" onChange={changeHandler} className="form-control" value={productInfo.title} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" onChange={changeHandler} className="form-control" value={productInfo.price} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" onChange={changeHandler} className="form-control" value={productInfo.description} rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default EditProductForm;