import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllAuthors = () => {

    const [allAuthors, setAllAuthors] = useState([]);

    const [deleteToggle, setDeleteToggle] = useState(false);

    const deleteAuthor = (_id) => {
        console.log("Deleting Author ", _id);
        axios.delete(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                console.log(res)
                setDeleteToggle(!deleteToggle);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                // console.log("Response: ", res);
                setAllAuthors(res.data.results);
            })
            .catch(err => {
                console.log("Error ", err);
            })
    }, [deleteToggle]);

    return (
        <div>
            <h3>All Authors</h3>
            <div className="cards">
                {
                    allAuthors.map((authorObj, idx) => {
                        return (
                            <div key={authorObj._id} className="card mx-auto mb-2" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title"> <Link to={`/authors/${authorObj._id}`}>{authorObj.name}</Link></h5>
                                    <p><Link className="btn btn-success" to={`/edit/${authorObj._id}`}>Edit</Link></p>
                                    <button onClick={(e)=>{deleteAuthor(authorObj._id)}} className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default AllAuthors;