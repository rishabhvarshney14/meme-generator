import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContext';
import { MemeProvider } from './contexts/MemeContext';

import Navbar from './components/Navbar';
import MemeGen from './components/MemeGen/MemeGen'
import Login from './components/authentication/Login';
import Signin from './components/authentication/Signin';
import SingleMeme from './components/SingleMeme';
import UserMemes from './components/UserMemes';

function App() {
  return (
    <AuthProvider>
      <MemeProvider>
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route element={<MemeGen />} path="/" exact/>
              <Route element={<Login />} path='/login' />
              <Route element={<Signin />} path='/signin' />
              <Route element={<UserMemes />} path='/memes' />
              <Route element={<SingleMeme />} path='/meme/:id' />
            </Routes>
          </Router>
        </div>
      </MemeProvider>
    </AuthProvider>
  );
}

export default App;
