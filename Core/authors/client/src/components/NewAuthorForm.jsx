import React, { useState } from 'react';
import axios from 'axios';

const NewAuthorForm = () => {

    let [name, setName] = useState("");

    let [errors, setErrors] = useState({});

    const addAuthor = (e) => {
        e.preventDefault();
        let formInfo = { name };

        axios.post("http://localhost:8000/api/authors", formInfo)
            .then(res => {
                console.log("Response: ", res);

                if(res.data.error) {
                    setErrors(res.data.error.errors);
                }

                else{
                    setName("");
                }

            })
            .catch(err => console.log("Error: ", err));
    }

    const changeHandler = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value);
        }

    return (
        <div>
            <h1>Add Author</h1>
            <form onSubmit={addAuthor}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" onChange={changeHandler} className="form-control" placeholder="Enter name" />
                    <p className="text-danger">{errors.name?.message}</p>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default NewAuthorForm;