import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([]);

    const [deleteToggle, setDeleteToggle] = useState(false);

    const deleteProduct = (_id) => {
        console.log("Deleting Product ", _id);
        axios.delete(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log(res)
                setDeleteToggle(!deleteToggle);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                // console.log("Response: ", res);
                setAllProducts(res.data.results);
            })
            .catch(err => {
                console.log("Error ", err);
            })
    }, [deleteToggle]);

    return (
        <div>
            <h3>All Products</h3>
            <div className="cards">
                {
                    allProducts.map((productObj, idx) => {
                        return (
                            <div key={productObj._id} className="card mx-auto mb-2" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title"> <Link to={`/products/${productObj._id}`}>{productObj.title}</Link></h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{productObj.price}</h6>
                                    <p className="card-text">{productObj.description}</p>
                                    <p><Link className="btn btn-success" to={`/edit/${productObj._id}`}>Edit</Link></p>
                                    <button onClick={(e)=>{deleteProduct(productObj._id)}} className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default AllProducts;