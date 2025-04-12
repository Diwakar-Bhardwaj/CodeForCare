import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';
import UpdatePassword from './components/UpdatePassword';

import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";

const App = () => {
  return (
    <>
    <div>

    </div>
    <div className='app-wrapper'>
     
      <BrowserRouter>
      <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/update-password">Update Password</Link></li>
                </ul>
            </nav>
            <Routes>
                {/* other routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/update-password" element={<UpdatePassword />} />
            </Routes>
        </BrowserRouter>
    </div>
    </>
  );
};

export default App;
