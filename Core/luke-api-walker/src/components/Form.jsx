import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Form = () => {

    let [category, setCat] = useState("");
    let [id, setId] = useState("");

    const history = useHistory();

    const search = (e) => {
        e.preventDefault();

        history.push(`/${category}/${id}`);
    }

    return (
        <div>
            <form action="" className="d-flex justify-content-around align-items-center" onSubmit={search}>
                <div className="form-group">
                    <label htmlFor="">Search For:</label>
                    <select className="form-select" onChange={(e)=>{setCat(e.target.value)}}>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="planets">Planets</option>
                        <option value="species">Species</option>
                        <option value="starships">Starships</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">ID</label>
                    <input type="number" className="form-group" onChange={(e)=>{setId(e.target.value)}}/>
                </div>
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}

export default Form;