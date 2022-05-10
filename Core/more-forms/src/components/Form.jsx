import React, {useState} from 'react';

const Form = () => {

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");

    const showFirstNameError = () => {
        if (firstName.length < 3) {
            return <p>First name must be at least 3 characters long!</p>
        }
        else {
            return null;
        }
    };

    const showLastNameError = () => {
        if (lastName.length < 3) {
            return <p>Last name must be at least 3 characters long!</p>
        }
        else {
            return null;
        }
    };

    const showEmailError = () => {
        if (email.length < 5) {
            return <p>Email must be at least 5 characters long!</p>
        }
        else {
            return null;
        }
    };

    const showPasswordError = () => {
        if (password.length < 8) {
            return <p>Password must be at least 8 characters long!</p>
        }
        else {
            return null;
        }
    };

    const showConfirmPasswordError = () => {
        if (password !== confirmPassword) {
            return <p>Passwords must match!</p>
        }
        else {
            return null;
        }
    };

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input type="text" onChange={(e)=>setFirstName(e.target.value)} name="" id="" className="form-control" />
                    {
                        showFirstNameError()
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" onChange={(e)=>setLastName(e.target.value)} name="" id="" className="form-control" />
                    {
                        showLastNameError()
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} name="" id="" className="form-control" />
                    {
                        showEmailError()
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="text" onChange={(e)=>setPassword(e.target.value)} name="" id="" className="form-control" />
                    {
                        showPasswordError()
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password</label>
                    <input type="text" onChange={(e)=>setConfirmPassword(e.target.value)} name="" id="" className="form-control" />
                    {
                        showConfirmPasswordError()
                    }
                </div>
                <input type="submit" value="Submit" />
            </form>
            <h5>Your Form Data</h5>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </>
    )
}

export default Form;