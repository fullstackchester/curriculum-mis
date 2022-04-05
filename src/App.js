import React from 'react';
import Login from './components/Login';
import Register from './components/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/index.css'
import { AuthProvider } from './Firebase/AuthContext'
import Dashboard from './pages/Dashboard'
import Curriculum from './pages/Curriculum'
import Profile from './pages/Profile/Profile'
import EditProfile from './pages/Profile/EditProfile';
import Layout from './Template/Layout';
import Faculty from './pages/Faculty/Faculty';
import UserProfile from './pages/Profile/UserProfile';


function App() {


  return (


    <div className="w-full h-full base-container bg-zinc-200/60">

      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Layout />} >
              <Route index element={<Dashboard />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/curriculum' element={<Curriculum />} />

              <Route path='/profile' element={<Profile />} >
                <Route index element={<UserProfile />} />
                <Route path='edit-profile' element={<EditProfile />} />
              </Route>

              <Route path='/faculty' element={<Faculty />} ></Route>
            </Route>

          </Routes>
        </AuthProvider>
      </Router>
    </div>

  );
}

export default App;
