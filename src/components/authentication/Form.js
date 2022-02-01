import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({onSubmit}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const submitForm = async (e) => {
        e.preventDefault()

        try {
            setIsLoading(true);
            await onSubmit(email, password)
            navigate('/') 
        } catch {
            alert("Failed to perform action!")
        }

        setIsLoading(false);
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e => setEmail(e.target.value))} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
            </div>
            <button disabled={isLoading} onClick={e => submitForm(e)} type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    )
};

export default Form;