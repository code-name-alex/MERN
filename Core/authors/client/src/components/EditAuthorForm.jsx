import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

const EditAuthorForm = () => {

    const { _id } = useParams();

    const [authorInfo, setAuthorInfo] = useState({})

    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                console.log("Response: ", res)
                setAuthorInfo(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${_id}`, authorInfo)
            .then(res => {
                console.log("Response: ", res)
                history.push('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Edit Author</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={changeHandler} className="form-control" value={authorInfo.name} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default EditAuthorForm;