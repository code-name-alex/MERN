import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const OneAuthor = () => {

    const { _id } = useParams();
    const [authorInfo, setAuthorInfo] = useState({});
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
    
            .then(res => {
                console.log(res);
                setAuthorInfo(res.data.results);
            })
            .catch(err => console.log(err));
    },[]);

    const deleteAuthor = () => {
        axios.delete(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                console.log(res);
                history.push("/");
            })
            .catch(err => console.log(err));
    } 

    return (
        <div>
            <h3>Author: {authorInfo.name}</h3>
            <button onClick={deleteAuthor} className="btn btn-danger">Delete</button>
        </div>
    );
}

export default OneAuthor;