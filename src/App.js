import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';


function App() {
  return (
    <div className="w-screen h-screen">
      {/* <Register /> */}
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route exact path='/' element={ <Main /> } />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
