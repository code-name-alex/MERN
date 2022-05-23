import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const OneProduct = () => {

    const { _id } = useParams();
    const [productInfo, setProductInfo] = useState({});
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
    
            .then(res => {
                console.log(res.data);
                setProductInfo(res.data.results);
            })
            .catch(err => console.log(err));
    },[]);

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log(res);
                history.push("/");
            })
            .catch(err => console.log(err));
    } 

    return (
        <div>
            <h3>Product: {productInfo.title}</h3>
            <p>{productInfo.description}</p>
            <p>{productInfo.price}</p>
            <button onClick={deleteProduct} className="btn btn-danger">Delete</button>
        </div>
    );
}

export default OneProduct;