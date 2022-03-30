import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Curriculum from './components/pages/Curriculum';
import UserProfile from './components/pages/UserProfile';

function App() {
  return (
    <div className="w-screen h-screen">
      {/* <Register /> */}
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/user_profile' element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
