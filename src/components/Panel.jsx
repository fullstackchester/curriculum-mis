import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';


function Panel() {
    return (
        <Router>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />}></Route>
            </Routes>

        </Router>
    )
}

export default Panel