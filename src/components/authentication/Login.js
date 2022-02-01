import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

import Form from './Form';

const Login = () => {
    const {login, currentUser} = useAuth()
    const authenticated = currentUser ? true : false

    return (
        <div style={{maxWidth: 700, margin: 'auto'}}>
            <h3>Login with your account!</h3>
            {authenticated ? <Navigate to="/" /> : <Form onSubmit={login} /> }
        </div>
    )
};

export default Login;