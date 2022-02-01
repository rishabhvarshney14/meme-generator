import React from 'react';
import { Navigate } from 'react-router-dom'

import { useAuth } from '../../contexts/AuthContext';

import Form from './Form';

const Signin = () => {
    const {signup, currentUser} = useAuth()
    const authenticated = currentUser ? true : false

    return (
        <div style={{maxWidth: 700, margin: 'auto'}}>
            <h3>Create a new Account!</h3>
            {authenticated ? <Navigate to="/" /> : <Form onSubmit={signup} />}
        </div>
    )
}

export default Signin;