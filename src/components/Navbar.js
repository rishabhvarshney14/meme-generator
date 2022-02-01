import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// NavBar Component
const Navbar = () => {
    const {logout, currentUser} = useAuth()
    const authenticated = currentUser ? true : false
    const navigate = useNavigate()

    const handleLogut = async () => {
        try {
            await logout()
            navigate('/')
        }
        catch {
            alert("Error loging out!")
        }
    }
    
    return (
        <div className="d-flex justify-content-around">
            <Link className='text-decoration-none' to="/"><h3>Meme Generator</h3></Link>
            <div>
                {authenticated ? (
                    <>
                        <Link to='/memes'>My Memes</Link>
                        <span> | </span>
                        <a href='/' onClick={handleLogut}>Logout</a>
                    </> 
                ): (
                    <>
                        <Link to='/signin'>Sign In</Link>
                        <span> | </span>
                        <Link to='/login'>Login</Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default Navbar;