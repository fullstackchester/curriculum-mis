import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Template/Layout';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import Curriculum from './pages/Curriculum';
import './css/index.css';
import { AuthProvider } from './Firebase/AuthContext';
import Faculty from './pages/Faculty';

function App() {


  const ComposedDashboard = Layout(Dashboard)
  const ComposedUserProfile = Layout(UserProfile)
  const ComposedCurriculum = Layout(Curriculum)
  const ComposedFaculty = Layout(Faculty)

  return (

    <AuthProvider>
      <div className="w-full base-container bg-zinc-200/60">

        <Router>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<ComposedDashboard />} />
            <Route path='/user_profile' element={<ComposedUserProfile />} />
            <Route path='/curriculum' element={<ComposedCurriculum />} />
            <Route path='/faculty' element={<ComposedFaculty />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>

  );
}

export default App;
