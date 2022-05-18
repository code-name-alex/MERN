import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Result = () => {

    let { category, id } = useParams();

    let [detail, setDetail] = useState([]);

    useEffect(() => {

        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response => {
                console.log("response-->", response);
                setDetail(response.data);
            })
            .catch(err => console.log(err));

    }, [id, category]);


    return (
        <div>
            <h1>Name: {detail.name} </h1>
            <p>Heigh: {detail.height} </p>
            <p>Mass: {detail.mass} </p>
            <p>Hair Color: {detail.hair_color} </p>
        </div>
    );
}

export default Result;